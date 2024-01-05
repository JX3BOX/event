<template>
    <div class="m-authors">
        <div class="m-year">
            <h3>YEAR</h3>
            <div class="m-year-list">
                <span v-for="item in year" :key="item" :class="{ active: active === item }" @click="active = item">
                    {{ item }}
                </span>
            </div>
        </div>
        <div class="m-content">
            <div class="m-content-title">
                <h2>AUTHORS</h2>
                <h3>特约作者</h3>
            </div>
            <template v-for="(item, i) in list">
                <a
                    :href="users[item.author].link"
                    target="_blank"
                    class="m-content-item"
                    :key="i"
                    v-if="users[item.author]"
                >
                    <div class="m-info">
                        <Avatar class="u-avatar" :uid="item.author" :url="users[item.author].avatar" size="120" />
                        <div class="u-info">
                            <h4>
                                <span> {{ users[item.author].name }}</span>
                                <label>{{ dataFormat(users[item.author].time) }} 加入魔盒</label>
                            </h4>
                            <div class="u-sci">
                                <label>入选作品：</label>
                                <span v-html="item.title"></span>
                            </div>
                        </div>
                    </div>
                    <span class="u-desc" v-html="item.desc"></span>
                </a>
            </template>
        </div>
    </div>
</template>

<script>
import { uniq } from "lodash";
import { getUsers } from "@/service/topic";
import { __Root } from "@jx3box/jx3box-common/data/jx3box.json";
import { showDate } from "@jx3box/jx3box-common/js/moment";
export default {
    name: "authors",
    props: ["data"],
    data: function () {
        return {
            authors: {},
            year: [],
            active: "",
            users: {},
        };
    },
    watch: {
        data: {
            deep: true,
            immediate: true,
            handler: function ({ authors }) {
                if (authors && authors.length) {
                    this.year = uniq(authors.map((item) => this.yearFormat(item.time)));
                    this.authors = authors.reduce((acc, cur) => {
                        const { time } = cur;
                        let _time = this.yearFormat(time);
                        if (!acc[_time]) acc[_time] = [];
                        acc[_time].push(cur);
                        return acc;
                    }, {});
                    this.loadUser(authors);
                    this.active = this.year[0];
                }
            },
        },
    },
    computed: {
        list() {
            return this.authors[this.active] || [];
        },
    },
    methods: {
        loadUser(list) {
            const users = uniq(list.map((item) => item.author).filter(Boolean)).join(",");
            users &&
                getUsers({ list: users }).then((res) => {
                    this.users = res.data.data.reduce((acc, cur) => {
                        acc[cur.ID] = {
                            name: cur.display_name,
                            avatar: cur.user_avatar,
                            link: __Root + "author/" + cur.ID,
                            time: cur.user_registered,
                        };
                        return acc;
                    }, {});
                });
        },
        yearFormat(time) {
            const date = new Date(time);
            return date.getFullYear();
        },
        dataFormat(val) {
            return showDate(val);
        },
    },
};
</script>
<style lang="less">
.m-authors {
    .pb(20px);
    .c-avatar-pic {
        .r(0);
    }
    .m-year {
        .flex;
        .fz(14px);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        flex-direction: column;
        gap: 10px;
        padding: 20px;
        h3 {
            color: #ba9624;
        }
        &-list {
            .flex;
            flex-wrap: wrap;
            color: #000;
            gap: 10px;
            span {
                .pointer;
                .tm(0.4);
                &.active {
                    .tm(1);
                }
            }
        }
    }
    .m-content {
        .flex;
        padding: 20px;
        flex-wrap: wrap;
        gap: 20px;
        box-sizing: border-box;
        &-title {
            .w(100%);
            h2 {
                .fz(20px);
                color: #ba9624;
            }
            h3 {
                .fz(16px);
            }
        }
        &-item {
            .fz(10px,20px);
            color: #000;
            width: calc(50% - 10px);
            .m-info {
                .flex;
                box-sizing: border-box;
                border-right: 4px solid #ba9624;
                gap: 10px;
                background: rgba(0, 0, 0, 0.02);
                .u-info {
                    .flex;
                    padding: 10px 0;
                    flex-direction: column;
                    justify-content: space-between;
                    box-sizing: border-box;
                    label,
                    span {
                        .db;
                    }
                    label {
                        .tm(0.4);
                    }
                    span {
                        .tm(1);
                    }
                    h4 span {
                        .fz(16px);
                    }
                }
            }
            .u-desc {
                .mt(20px);
                .tm(0.6);
            }
        }
    }
}
</style>
