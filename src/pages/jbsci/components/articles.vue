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
                <span
                    v-for="item in season"
                    :key="item"
                    :class="{ active: filter.season === item }"
                    @click="filter.season = item"
                >
                    {{ item }}
                </span>
            </div>
        </div>
        <div class="m-content">
            <div class="m-content-title">
                <h2>ARTICLES</h2>
                <h3>精选文章</h3>
            </div>
            <div class="m-content-list">
                <div class="m-item" v-for="(item, i) in list" :key="i">
                    <div class="cover">
                        <img :src="showImg(item.type)" />
                        <div class="u-title">{{ item.title }}</div>
                    </div>
                    <div class="info">
                        <a :href="showLink(item.link)" class="u-title">
                            <span>{{ item.title }}</span>
                            <img :src="`${__imgRoot}arr.svg`" />
                        </a>
                        <a :href="users[item.author].link" v-if="users[item.author]" class="u-author">
                            <Avatar class="u-avatar" :uid="item.author" :url="users[item.author].avatar" size="15" />
                            <span>{{ users[item.author].name }}</span>
                        </a>
                        <span class="u-desc">{{ item.desc || "暂无介绍" }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Avatar from "@jx3box/jx3box-common-ui/src/author/Avatar.vue";
import { getUsers } from "@/service/topic";
import { uniq, flatMapDeep, isObject, isArray } from "lodash";
import { __Root } from "@jx3box/jx3box-common/data/jx3box.json";
export default {
    name: "articles",
    props: ["data"],
    inject: ["__imgRoot"],
    components: { Avatar },
    data: function () {
        return {
            sci: {},
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
            handler: function (sci) {
                if (sci) {
                    const list = this.resultArray(sci);
                    this.loadUser(list);
                    this.sci = sci;
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
        season() {
            return (this.sci[this.filter.year] && Object.keys(this.sci[this.filter.year]).sort((a, b) => a - b)) || [];
        },
        list() {
            const { year, season } = this.filter;
            let list = year ? this.sci[~~year][season] : [];
            if (list.length)
                list = list.map((item) => {
                    const type = item.link.split("/")[0];
                    console.log(item);
                    return {
                        ...item,
                        type,
                    };
                });
            return list;
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
                        return value;
                    }
                }) || []
            );
        },
        showImg(key) {
            return key ? this.__imgRoot + key + ".jpg" : "";
        },
        showLink(link) {
            return __Root + link;
        },
    },
    components: { Avatar },
};
</script>
<style lang="less">
.m-articles {
    .pb(20px);
    .m-content {
        padding: 20px;
        &-list {
            .mt(20px);
            .flex;
            flex-wrap: wrap;
            gap: 20px;
            .m-item {
                .w(286px);
                box-sizing: border-box;

                .cover {
                    .pr;
                    .size(100%,300px);
                    &::before {
                        content: "";
                        .pa;
                        .lb(0);
                        .size(100%,230px);
                        background-color: rgba(0, 0, 0, 0.5);
                    }
                    .u-title {
                        .pa;
                        .lb(0,10px);
                        .full;
                        .flex;
                        .fz(32px);
                        .break(2);
                        padding: 10px 10px 0 10px;
                        box-sizing: border-box;
                        justify-content: flex-end;
                        align-items: flex-end;
                        color: #fff;
                    }
                }
                .info {
                    .fz(10px);
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
    }
}
</style>
