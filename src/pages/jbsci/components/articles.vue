<template>
    <div class="m-articles">
        <div class="m-filter">
            <h3>YEAR</h3>
            <div class="m-filter-list">
                <span
                    v-for="item in year"
                    :key="item"
                    :class="{ active: filter.year === item }"
                    @click="filter.year = item"
                >
                    {{ item }}
                </span>
            </div>
            <h3>SEASON</h3>
            <div class="m-filter-list">
                <a v-for="item in season" :key="item" :href="`${linkKey}#m-season-${item}`">
                    {{ item }}
                </a>
            </div>
        </div>
        <div class="m-content">
            <div :id="`m-season-${s}`" v-for="(season, s) in list" :key="s">
                <div class="m-content-header" v-if="seasons[filter.year][s]">
                    <img class="u-cover" :src="seasons[filter.year][s].img" />
                    <div class="m-content-title">
                        <h2>{{ seasons[filter.year][s].title }} SEASON {{ s }}</h2>
                        <h3>{{ seasons[filter.year][s].title }}年度 第{{ s }}季 期刊</h3>
                        <div class="u-desc">{{ seasons[filter.year][s].desc }}</div>
                    </div>
                </div>
                <div class="m-content-title">
                    <h2>ARTICLES</h2>
                    <h3>精选文章</h3>
                </div>

                <div class="m-content-list">
                    <div class="m-item" v-for="item in season" :key="item.id">
                        <a :href="showLink(item.link)" target="_blank" class="cover">
                            <img class="u-img" :src="showImg(item.type)" />
                            <i class="u-mark" :class="item.type">{{ s }}</i>
                            <div class="u-title" v-html="showTitle(item.title)"></div>
                        </a>
                        <div class="info">
                            <a :href="showLink(item.link)" target="_blank" class="u-title">
                                <span>{{ showTitle(item.title, "title") }}</span>
                                <img :src="`${__imgRoot}arr.svg`" />
                            </a>
                            <a :href="users[item.author].link" v-if="users[item.author]" class="u-author">
                                <user-avatar class="u-avatar" :src="users[item.author].avatar" :size="20" />
                                <span>{{ users[item.author].name }}</span>
                            </a>
                            <span class="u-desc">{{ item.desc || "暂无介绍" }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import userAvatar from "../../../components/avatar.vue";
import { getUsers } from "@/service/topic";
import { uniq, flatMapDeep, isObject, isArray } from "lodash";
import { __Root } from "@jx3box/jx3box-common/data/jx3box.json";
export default {
    name: "articles",
    props: ["data"],
    inject: ["__imgRoot"],
    components: { userAvatar },
    data: function () {
        return {
            sci: {},
            cover: {},
            seasons: {},
            year: [],
            filter: {
                year: null,
                season: 1,
            },
            users: {},
        };
    },
    watch: {
        data: {
            deep: true,
            immediate: true,
            handler: function ({ sci, cover, season }) {
                if (sci) {
                    const list = this.resultArray(sci);
                    this.loadUser(list);
                    this.sci = sci;
                    this.seasons = season.reduce((acc, cur) => {
                        const { power, icon } = cur;
                        if (!acc[icon]) {
                            acc[icon] = {};
                        }
                        acc[icon][power] = cur;
                        return acc;
                    }, {});
                    this.cover = cover.reduce((acc, cur) => {
                        acc[cur.title] = cur.img;
                        return acc;
                    }, {});
                    this.year = uniq(Object.keys(sci).sort((a, b) => b - a));
                    this.filter.year = this.year[0];
                }
            },
        },
        season: {
            immediate: true,
            deep: true,
            handler: function (list) {
                if (list.length) this.filter.season = list[0];
            },
        },
    },
    computed: {
        linkKey() {
            return this.$route.params.key;
        },
        season() {
            return (this.sci[this.filter.year] && Object.keys(this.sci[this.filter.year]).sort((a, b) => a - b)) || [];
        },
        list() {
            return this.filter.year ? this.sci[~~this.filter.year] : {};
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
                        };
                        return acc;
                    }, {});
                });
        },
        resultArray(obj) {
            return (
                flatMapDeep(obj, (value) => {
                    if (isObject(value) && !isArray(value)) {
                        return flatMapDeep(value);
                    } else {
                        console.log(value);
                        return value;
                    }
                }) || []
            );
        },
        showImg(key) {
            return this.cover[key] || "";
        },
        showLink(link) {
            return __Root + link;
        },
        showTitle(title, str) {
            title = title.split("$$$");
            const cover = title[1] ? `<span>${title[0]}</span><span>${title[1]}</span>` : title[0];
            const _title = title[1] ? title[1] : title[0];
            return str ? _title : cover;
        },
    },
};
</script>
<style lang="less">
.m-articles {
    .pb(20px);
    .m-content {
        padding: 0 20px;
        &-list {
            margin: 20px 0 40px 0;
            .flex;
            flex-wrap: wrap;
            gap: 20px;
            .m-item {
                .w(286px);
                box-sizing: border-box;

                .cover {
                    .pr;
                    .db;
                    .size(100%,300px);
                    &::before {
                        content: "";
                        .pa;
                        .lb(0);
                        .size(100%,230px);
                        background-color: rgba(0, 0, 0, 0.4);
                    }
                    .u-mark {
                        .pa;
                        .rt(10px);
                        .fz(36px,40px);
                        .size(40px);
                        .x;
                        font-style: normal;
                        color: #fff;
                        &.bbs {
                            background-color: #1b824a;
                        }
                        &.fb {
                            background-color: #2d2a3d;
                        }
                        &.tool {
                            background-color: #156772;
                        }
                        &.bps {
                            background-color: #9a305e;
                        }
                        &.macro {
                            background-color: #00b7c7;
                        }
                        &.pvp {
                            background-color: #b05600;
                        }
                    }
                    .u-title {
                        .pa;
                        .lb(0,10px);
                        .full;
                        .flex;
                        .fz(24px);
                        gap: 5px;
                        flex-direction: column;
                        padding: 10px 10px 0 10px;
                        box-sizing: border-box;
                        justify-content: flex-end;
                        color: #fff;
                        span:last-child {
                            .break(2);
                            .fz(18px);
                        }
                    }
                }
                .info {
                    .fz(12px);
                    color: rgba(0, 0, 0, 0.6);
                    .u-title {
                        .w(100%);
                        .flex;
                        .fz(16px);
                        .color(#000);
                        gap: 10px;
                        justify-content: space-between;
                        padding: 10px 0;
                        align-items: center;
                        span {
                            .nobreak;
                        }
                    }
                    .u-author {
                        .flex;
                        gap: 3px;
                        align-items: center;
                        color: rgba(0, 0, 0, 0.6);
                    }
                    .u-desc {
                        .mt(10px);
                        .break(4);
                        height: 52px;
                    }
                }
            }
        }

        &-header {
            .flex;
            .h(114px);
            gap: 20px;
            padding: 20px 0;
            border-top: 1px solid rgba(0, 0, 0, 0.1);
            .m-content-title {
                h2 {
                    .fz(20px);
                }
                h3 {
                    .fz(13px);
                }
                .u-desc {
                    .mt(10px);
                    .fz(12px);
                    .break(3);
                    color: rgba(0, 0, 0, 0.6);
                }
            }
        }
    }
}
</style>
