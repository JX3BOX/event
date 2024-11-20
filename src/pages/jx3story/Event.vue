<template>
    <div class="jx3story-event-content">
        <div class="content__lanterns">
            <Lantern
                to="/event"
                :top="68"
                :left="44"
                lanternPath="/main/main__lantern1.png"
                textPath="/main/main__texttrans_event.png"
                alt="灯笼1"
                textAlt="内容活动"
            />
            <Lantern
                to="/article"
                :top="274"
                :left="136"
                lanternPath="/main/main__lantern2.png"
                textPath="/main/main__texttrans_article.png"
                alt="灯笼2"
                textAlt="文字赏析"
            />
        </div>

        <router-link class="router-link-wrapper" to="/" @click.native="handleClick">
            <img
                class="event__sign"
                :src="getImgUrl('/eventcontent/eventc__sign.png')"
                alt="活动标志"
            />
        </router-link>

        <div class="m-content">
            <div class="content__section">
                <div class="section__text section__text-1">
                    <span>2024年茶馆风月录</span>
                </div>
                <img :src="getImgUrl('/eventcontent/eventc__preface.png')" alt="前言" />
                <div class="section__text section__text-2">
                    <span
                        >惊风飘白日，光景西驰流。<br />
                        我们又来到一年的末尾，凛冽的北风卷起雪花，将年末的气息深深地烙在记忆里，滚烫又清晰。<br />
                        2023年末，「茶馆」举办了第一届「茶馆风月录」，<br />
                        南来北往的侠士都在此暂做停留，用各具特色的笔触记录下了自己的故事，
                        有人记录自己脑洞大开的奇思异闻，有人记录自己聚少离多的无奈半生，
                        有人记录自己平淡普通的点滴日常......<br />
                        世人惊惧于时间的洪流轰鸣作响， 又被裹挟其中无法脱身。<br />
                        身年又悄悄地快要走到尽头，在此，年第二届「茶馆风月录」再次拉开帷幕，<br />
                        诚邀各位侠士再次在匆匆旅途中稍作片刻停留，<br />
                        携一壶酒、<br />
                        捧一杯茶，<br />
                        来新版「论坛」坐一坐吧！</span
                    >
                </div>
            </div>

            <div class="content__section">
                <img :src="getImgUrl('/eventcontent/eventc__particiways.png')" alt="参与方式" />
                <div class="section__text section__text-3">
                    <span
                        >在「论坛」的「故事」分区发布你的作品，可以是树洞、可以是回忆录、可以是故事或小说可以是随感甚至可以是<br />
                        情感，并在标题带上茶馆风月录」，即视为参与成功。<br /><br />
                        参赛作品需要与剑网（剑网缘起）或者魔盒有关。<br /><br />
                        传送门：https://www.jx3box.com/community?category=%E6%95%85%E4%BA%8B&pag...</span
                    >
                </div>
            </div>

            <div class="content__section">
                <img :src="getImgUrl('/eventcontent/eventc__time.png')" alt="活动时间" />
                <div class="section__text section__text-4">
                    <span
                        >2024年12月02日~2024年12月22日：征稿期(3周)<br />
                        2024年12月23日：魔盒运营组将推选出十篇推荐作品, 录入专题页<br />
                        2024年12月23日~2024年12月29日：投票期(1周)<br />
                        2024年12月30日~2025年1月5日：获奖公示(1周)</span
                    >
                </div>
            </div>

            <div class="content__section">
                <img :src="getImgUrl('/eventcontent/eventc__reward.png')" alt="活动奖励" />
                <div class="section__text section__text-5">
                    <span>
                        1.发布后每一篇作品根据质量,可获得500~5000不等的盒币打赏。<br />
                        2.活动期间会有首页头条推送,作品可获得流量曝光。<br />
                        3.投票期结束后,会根据作品投票数排名,排名第1的作品可获得海量通宝奖励、专属社区称号、特<br />
                        殊实物奖励;排名第2-第10的作品可获得通宝奖励及专属社区称号。<br /><br />
                        注:如有票数相同情况,将按照发布时间排序,发布时间靠前的获胜。<br />
                    </span>
                    <img :src="getImgUrl('/eventcontent/eventc__rewardcontent.png')" alt="奖励内容" />
                </div>
            </div>

            <div class="content__section">
                <img :src="getImgUrl('/eventcontent/eventc__participrocess.png')" alt="参与流程" />
                <div class="section__text section__text-6">
                    <span>
                        ●基础评选阶段<br />
                        所有参赛作品默认可被魔盒茶馆编辑进行品鉴（常规品鉴）。<br />
                        其他侠士可以对作品进行评论、点赞等互动。<br />
                        此阶段仅供编辑进行常规品鉴操作与促进大家交流和互动，不直接影响最终评选结果。<br /><br />
                        ●编辑初选阶段<br />
                        魔盒茶馆风月录运营组将审阅所有参赛作品，将根据作品的创意、文学性、主题契合度等因素进行评判，并优选<br />
                        至多10个优秀作品收录入专题页。<br />
                        注：分篇写长篇类文章在专题页不会重复录入，视为一篇，默认为第一篇或评委推选的最佳一篇，如有特殊要<br />
                        求，请及时通过魔盒首页反馈入口或者私信联系管理。<br /><br />
                        ●玩家投票阶段<br />
                        12月23日至12月29日开放投票通道，用户可前往专题页/小程序投票。单个账号限制三票，且单个账号对单个作<br />
                        品仅可投票一次。<br /><br />
                        ●结果公示阶段<br />
                        于12月30日至1月5日在专题页面公示获奖作品及作者。 </span
                    ><!-- 参与流程文字内容 -->
                </div>
            </div>

            <div class="content__section">
                <img :src="getImgUrl('/eventcontent/eventc__tips.png')" alt="注意事项" />
                <div class="section__text section__text-7">
                    <span>
                        1、参赛作品需为原创作品且符合《魔盒创作公约》。<br />
                        （https://www.jx3box.com/notice/21022）<br />
                        2、作品一经发布需要保持公开状态，否则视为放弃参赛。<br />
                        3、最终解释权归魔盒茶馆风月录运营组所有。
                    </span>
                </div>
            </div>

            <div class="content__section">
                <img :src="getImgUrl('/eventcontent/eventc_appealmechanism.png')" alt="申诉机制" />
                <div class="section__text section__text-8">
                    <span>
                        1、参赛作品需为原创作品且符合《魔盒创作公约》。（https://www.jx3box.com/notice/21022）<br />
                        2、作品一经发布需要保持公开状态，否则视为放弃参赛。<br />
                        3、最终解释权归魔盒茶馆风月录运营组所有。
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Lantern from "@/components/Lantern.vue";

export default {
    name: "jx3storyEvent",
    inject: ["__imgRoot"],
    components: {
        Lantern,
    },
    data() {
        return {};
    },
    methods: {
        getImgUrl(name) {
            return this.__imgRoot + name;
        },
        handleClick() {
            this.$router.push('/').catch(err => {
                if (err.name !== 'NavigationDuplicated') {
                    throw err;
                }
            });
        }
    },
    mounted() {},
};
</script>

<style lang="less">
@import "../../assets/css/jx3story/event.less";
</style>
