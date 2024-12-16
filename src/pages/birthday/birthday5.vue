<template>
    <div class="m-content">
        <div class="m-page-tabs">
            <div class="u-slider"></div>
            <div
                class="m-item"
                v-for="(item, index) in pageTabsColor"
                :key="index"
                :data-gradient="item"
                @click="scrollToSection(index)"
            >
                <img class="u-img" :src="imgSrc(`nav/${index + 1}.svg`)" alt="" />
            </div>
            <div class="m-item" @click="scrollToSection(-1)">
                <img class="u-img" :src="imgSrc(`nav/8.svg`)" alt="" />
            </div>
        </div>
        <div class="m-page-0">
            <div class="u-top__bg"></div>
            <div class="m-img-box">
                <div v-for="(item, index) in 12" :key="index">
                    <img class="u-img" :src="imgSrc(`0/${index}.png`)" alt="" @mouseover="playAudio(item)" />
                </div>
            </div>
            <img class="u-top-kv" :src="imgSrc(`0/top_kv.png`)" alt="" />
        </div>
        <div class="m-page-1 m-page-layout">
            <img class="u-mark" :src="imgSrc(`1/1.svg`)" alt="" />
            <img class="u-bg" :src="imgSrc(`1/bg.jpg`)" alt="" />
            <div class="m-main">
                <img class="u-title" :src="imgSrc(`1/title.svg`)" alt="" />
                <iframe
                    class="u-video"
                    src="//player.bilibili.com/player.html?isOutside=true&aid=113604586113129&bvid=BV1dxiiYtEnC&cid=27204256360&p=1"
                    scrolling="no"
                    border="0"
                    frameborder="no"
                    framespacing="0"
                    allowfullscreen="true"
                ></iframe>
                <div class="u-author">
                    魔盒团队&签约作者<br />
                    “年度巨献”
                </div>
            </div>
            <div class="u-face" :class="`u-face-${item}`" v-for="(item, index) in 4" :key="item">
                <img class="u-img" :src="imgSrc(`1/Ellipse${index}.png`)" alt="" />
                <img class="u-code" :src="imgSrc(`miniprogram.jpg`)" alt="" />
            </div>
        </div>
        <div class="m-page-2 m-page-layout">
            <img class="u-mark" :src="imgSrc(`2/2.svg`)" alt="" />
            <img class="u-bg" :src="imgSrc(`2/bg.jpg`)" alt="" />
            <div class="m-main">
                <img class="u-title" :src="imgSrc(`2/title.svg`)" alt="" />

                <div class="m-medal-box">
                    <!-- !TODO 更换线上勋章地址和发光图 -->
                    <img class="u-medal" src="" alt="" />
                    <img class="u-medal__mask" src="" alt="" />
                </div>
                <img
                    class="u-get"
                    v-if="!birthdayMedalCheck"
                    style="cursor: pointer"
                    :src="imgSrc(`get.png`)"
                    alt=""
                    @click="getBirthdayMedal"
                />
                <img class="u-get" v-else style="cursor: no-drop" :src="imgSrc(`get1.png`)" alt="" />
            </div>
            <div class="u-face" :class="`u-face-${item}`" v-for="(item, index) in 3" :key="item">
                <img class="u-img" :src="imgSrc(`2/Ellipse${index}.png`)" alt="" />
                <img class="u-code" :src="imgSrc(`miniprogram.jpg`)" alt="" />
            </div>
        </div>
        <div class="m-page-3 m-page-layout">
            <img class="u-mark" :src="imgSrc(`3/3.svg`)" alt="" />
            <img class="u-bg" :src="imgSrc(`3/bg.jpg`)" alt="" />
            <div class="m-main">
                <img class="u-title" :src="imgSrc(`3/title.svg`)" alt="" />
                <div class="m-plate">
                    <img class="u-plate-bg" :src="imgSrc(`3/line.svg`)" alt="" />
                    <div
                        class="m-item u-calendar"
                        @mouseover="page3ClassType = 'calendar'"
                        :class="{
                            'u-hover': page3ClassType == 'calendar',
                        }"
                    >
                        <div class="m-info m-calendar">
                            <div
                                class="m-plate__content"
                                :style="{
                                    backgroundImage: `url(${imgSrc('3/calendar.png')})`,
                                }"
                            ></div>
                            <div class="m-info-hover">
                                <div class="u-plate__title">魔盒5周年限定主题·日历</div>
                                <div class="u-plate__sub">实装位置：魔盒官网-首页-最新动态上方</div>
                                <div class="m-plate__tip">
                                    <div>
                                        <div class="u-tip__title">仅限魔盒会员领取</div>
                                        <div class="u-tip__time">领取时间：2024.12.28~2025.2.28</div>
                                    </div>
                                    <div>
                                        <img
                                            v-if="!userDecorationList.includes('calendar')"
                                            class="u-tip__get"
                                            @click="getDecoration('calendar')"
                                            :src="imgSrc(`get.png`)"
                                            alt=""
                                        />
                                        <img
                                            class="u-tip__get"
                                            v-else
                                            style="cursor: no-drop"
                                            :src="imgSrc(`get1.png`)"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="m-plate__title">
                            <div class="u-plate__title">魔盒5周年限定主题·日历</div>
                        </div>
                    </div>

                    <div
                        class="m-item u-sidebar"
                        @mouseover="page3ClassType = 'sidebar'"
                        :class="{
                            'u-hover': page3ClassType == 'sidebar',
                        }"
                    >
                        <div class="m-info m-sidebar">
                            <div
                                class="m-plate__content"
                                :style="{
                                    backgroundImage: `url(${imgSrc('3/sidebar.png')})`,
                                }"
                            ></div>
                            <div class="m-info-hover">
                                <div class="u-plate__title">魔盒5周年限定主题·侧边栏</div>
                                <div class="u-plate__sub">实装位置：魔盒帖子-页面左侧</div>
                                <div class="m-plate__tip">
                                    <div>
                                        <div class="u-tip__title">仅限魔盒会员领取</div>
                                        <div class="u-tip__time">领取时间：2024.12.28~2025.2.28</div>
                                    </div>
                                    <div>
                                        <img
                                            class="u-tip__get"
                                            v-if="!userDecorationList.includes('sidebar')"
                                            @click="getDecoration('sidebar')"
                                            :src="imgSrc(`get.png`)"
                                            alt=""
                                        />
                                        <img
                                            class="u-tip__get"
                                            v-else
                                            style="cursor: no-drop"
                                            :src="imgSrc(`get1.png`)"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="m-plate__title">
                            <div class="u-plate__title">魔盒5周年限定主题·侧边栏</div>
                        </div>
                    </div>

                    <div
                        class="m-item u-people__card"
                        @mouseover="page3ClassType = 'people__card'"
                        :class="{
                            'u-hover': page3ClassType == 'people__card',
                        }"
                    >
                        <div class="m-info m-people__card">
                            <div
                                class="m-plate__content"
                                :style="{
                                    backgroundImage: `url(${imgSrc('3/atcard.png')})`,
                                }"
                            ></div>
                            <div class="m-info-hover">
                                <div class="u-plate__title">魔盒5周年限定主题·圈人卡</div>
                                <div class="u-plate__sub">实装位置：创作中心-魔盒资源-@人</div>
                                <div class="m-plate__tip">
                                    <div>
                                        <div class="u-tip__title">仅限魔盒会员领取</div>
                                        <div class="u-tip__time">领取时间：2024.12.28~2025.2.28</div>
                                    </div>
                                    <div>
                                        <img
                                            class="u-tip__get"
                                            v-if="!userDecorationList.includes('atcard')"
                                            @click="getDecoration('atcard')"
                                            :src="imgSrc(`get.png`)"
                                            alt=""
                                        />
                                        <img
                                            class="u-tip__get"
                                            v-else
                                            style="cursor: no-drop"
                                            :src="imgSrc(`get1.png`)"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="m-plate__title">
                            <div class="u-plate__title">魔盒5周年限定主题·圈人卡</div>
                        </div>
                    </div>

                    <div
                        class="m-item u-personal"
                        @mouseover="page3ClassType = 'personal'"
                        :class="{
                            'u-hover': page3ClassType == 'personal',
                        }"
                    >
                        <div class="m-info m-personal">
                            <div
                                class="m-plate__content"
                                :style="{
                                    backgroundImage: `url(${imgSrc('3/homebg.png')})`,
                                }"
                            ></div>
                            <div class="m-info-hover">
                                <div class="u-plate__title">魔盒5周年限定主题·个人主页</div>
                                <div class="u-plate__sub">
                                    实装位置：<br />
                                    1.魔盒官网-个人主页<br />
                                    2.剑三魔盒小程序-我的
                                </div>
                                <div class="m-plate__tip">
                                    <div>
                                        <div class="u-tip__title">仅限魔盒会员领取</div>
                                        <div class="u-tip__time">领取时间：2024.12.28~2025.2.28</div>
                                    </div>
                                    <div>
                                        <img
                                            class="u-tip__get"
                                            v-if="!userDecorationList.includes('homebg')"
                                            @click="getDecoration('homebg')"
                                            :src="imgSrc(`get.png`)"
                                            alt=""
                                        />
                                        <img
                                            class="u-tip__get"
                                            v-else
                                            style="cursor: no-drop"
                                            :src="imgSrc(`get1.png`)"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="m-plate__title">
                            <div class="u-plate__title">魔盒5周年限定主题·个人主页</div>
                        </div>
                    </div>

                    <div
                        class="m-item u-comment"
                        @mouseover="page3ClassType = 'comment'"
                        :class="{
                            'u-hover': page3ClassType == 'comment',
                        }"
                    >
                        <div class="m-info m-comment">
                            <div
                                class="m-plate__content"
                                :style="{
                                    backgroundImage: `url(${imgSrc('3/comment.png')})`,
                                }"
                            ></div>
                            <div class="m-info-hover">
                                <div class="u-plate__title">魔盒5周年限定主题·评论</div>
                                <div class="u-plate__sub">实装位置：创作中心-魔盒资源-@人</div>
                                <div class="m-plate__tip">
                                    <div class="u-tip__box">
                                        <div class="u-tip__title">仅限魔盒会员领取</div>
                                        <div class="u-tip__time">领取时间：2024.12.28~2025.2.28</div>
                                    </div>
                                    <div>
                                        <img
                                            class="u-tip__get"
                                            v-if="!userDecorationList.includes('comment')"
                                            @click="getDecoration('comment')"
                                            :src="imgSrc(`get.png`)"
                                            alt=""
                                        />
                                        <img
                                            class="u-tip__get"
                                            v-else
                                            style="cursor: no-drop"
                                            :src="imgSrc(`get1.png`)"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="m-plate__title">
                            <div class="u-plate__title">魔盒5周年限定主题·评论</div>
                        </div>
                    </div>

                    <div
                        class="m-item u-card"
                        @mouseover="page3ClassType = 'card'"
                        :class="{
                            'u-hover': page3ClassType == 'card',
                        }"
                    >
                        <div class="m-info m-card">
                            <div
                                class="m-plate__content"
                                :style="{
                                    backgroundImage: `url(${imgSrc('3/palu.png')})`,
                                }"
                            ></div>
                            <div class="m-info-hover">
                                <div class="u-plate__title">魔盒5周年限魔卡</div>
                                <div class="u-plate__sub">实装位置：魔盒论坛（魔吧）</div>
                                <div class="m-plate__tip">
                                    <div class="u-tip__box">
                                        <div class="u-tip__title">仅限魔盒会员领取</div>
                                        <div class="u-tip__time">领取时间：2024.12.28~2025.2.28</div>
                                    </div>
                                    <div>
                                        <img
                                            class="u-tip__get"
                                            v-if="!userDecorationList.includes('palu')"
                                            @click="getDecoration('palu')"
                                            :src="imgSrc(`get.png`)"
                                            alt=""
                                        />
                                        <img
                                            class="u-tip__get"
                                            v-else
                                            style="cursor: no-drop"
                                            :src="imgSrc(`get1.png`)"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="m-plate__title">
                            <div class="u-plate__title">魔盒5周年限魔卡</div>
                        </div>
                    </div>

                    <div
                        class="m-item u-avatar"
                        @mouseover="page3ClassType = 'avatar'"
                        :class="{
                            'u-hover': page3ClassType == 'avatar',
                        }"
                    >
                        <div class="m-info m-avatar">
                            <div class="m-plate__content">
                                <img class="u-user__avatar" :src="userInfo.user_avatar" alt="" />
                                <!-- !TODO 更换cdn头像框地址 -->
                                <img class="u-user__avatar-border" src="" alt="" />
                            </div>
                            <div class="m-info-hover">
                                <div class="u-plate__title">五周年限定头像框</div>
                                <div class="u-plate__sub">实装位置：魔盒帖子-头像</div>
                                <div class="m-plate__tip">
                                    <div class="u-tip__box">
                                        <div class="u-tip__title">仅限魔盒会员领取</div>
                                        <div class="u-tip__time">领取时间：2024.12.28~2025.2.28</div>
                                    </div>
                                    <div>
                                        <img
                                            class="u-tip__get"
                                            v-if="!userDecorationList.includes('avatar')"
                                            @click="getDecoration('avatar')"
                                            :src="imgSrc(`get.png`)"
                                            alt=""
                                        />
                                        <img
                                            class="u-tip__get"
                                            v-else
                                            style="cursor: no-drop"
                                            :src="imgSrc(`get1.png`)"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="m-plate__title">
                            <div class="u-plate__title">五周年限定头像框</div>
                        </div>
                    </div>

                    <img
                        class="u-getAll"
                        v-if="userDecorationList.length < 7"
                        :src="imgSrc(`gets.png`)"
                        @click="getDecoration('atcard,homebg,sidebar,calendar,comment,avatar,palu')"
                        alt=""
                    />
                    <img class="u-getAll" v-else style="cursor: no-drop" :src="imgSrc(`get1.png`)" alt="" />
                </div>
            </div>
            <div class="u-face" :class="`u-face-${item}`" v-for="(item, index) in 4" :key="item">
                <img class="u-img" :src="imgSrc(`3/Ellipse${index}.png`)" alt="" />
                <img class="u-code" :src="imgSrc(`miniprogram.jpg`)" alt="" />
            </div>
        </div>
        <div class="m-page-4 m-page-layout">
            <img class="u-mark" :src="imgSrc(`4/4.svg`)" alt="" />
            <img class="u-bg" :src="imgSrc(`4/bg.jpg`)" alt="" />
            <div class="m-main">
                <img class="u-title" :src="imgSrc(`4/title.svg`)" alt="" />
                <div class="m-fun">
                    <div class="m-item" v-for="(item, index) in page4Arr" :key="index">
                        <img class="u-fun__img" :src="imgSrc(`4/V${index + 1}.svg`)" alt="" />
                        <div class="u-fun__label">{{ item }}</div>
                    </div>
                </div>
                <div class="m-tips" style="visibility: hidden">
                    <div class="u-tips__title">这一次，普通用户也能体验</div>
                    <div class="u-tips__sub">[ 每项功能可试用X次 ]</div>
                </div>
            </div>
            <div class="u-face" :class="`u-face-${item}`" v-for="(item, index) in 2" :key="item">
                <img class="u-img" :src="imgSrc(`4/Ellipse${index}.png`)" alt="" />
                <img class="u-code" :src="imgSrc(`miniprogram.jpg`)" alt="" />
            </div>
        </div>
        <div class="m-page-5 m-page-layout">
            <img class="u-mark" :src="imgSrc(`5/5.svg`)" alt="" />
            <img class="u-bg" :src="imgSrc(`5/bg.jpg`)" alt="" />
            <div class="m-main">
                <img class="u-title" :src="imgSrc(`5/title.svg`)" alt="" />
                <div class="m-info">
                    <img class="u-top" :src="imgSrc(`5/page-title.png`)" alt="" />
                    <div class="u-top__tip">[ 非活动时期 ]</div>
                    <img class="u-points" @click="openNewWindow('/vip/premium')" :src="imgSrc(`5/points.png`)" alt="" />
                    <div class="u-points__tip" style="visibility: hidden">错过再等一整年！</div>
                    <img class="u-box__logo" :src="imgSrc(`5/box-logo.png`)" alt="" />
                </div>
            </div>
            <div class="u-face" :class="`u-face-${item}`" v-for="(item, index) in 2" :key="item">
                <img class="u-img" :src="imgSrc(`5/Ellipse${index}.png`)" alt="" />
                <img class="u-code" :src="imgSrc(`miniprogram.jpg`)" alt="" />
            </div>
        </div>
        <div class="m-page-6 m-page-layout">
            <img class="u-mark" :src="imgSrc(`6/6.svg`)" alt="" />
            <img class="u-bg" :src="imgSrc(`6/bg.png`)" alt="" />
            <div class="m-main">
                <img class="u-title" :src="imgSrc(`6/title.svg`)" alt="" />
                <div class="m-info">
                    <div class="u-top">B5 40P横线本 4选1</div>
                    <div class="m-book">
                        <el-image
                            class="u-book"
                            v-for="item in 4"
                            :key="item"
                            :src="imgSrc(`gift/gift-${item}.jpg`)"
                            :preview-src-list="[imgSrc(`gift/gift-${item}.jpg`)]"
                        >
                        </el-image>
                    </div>
                    <div class="u-book__tip">活动期间购买年费会员（可重复），即可领取一套精美笔记本（4选1）</div>
                    <img class="u-open" @click="openNewWindow('/vip/premium')" :src="imgSrc(`6/open.svg`)" alt="" />
                    <div class="u-time">[ 活动时间：2024.12.28~2025.2.28 ]</div>
                    <img class="u-get" style="cursor: pointer" @click="openGetGift" :src="imgSrc(`get.png`)" alt="" />
                </div>
            </div>
            <div class="u-face" :class="`u-face-${item}`" v-for="(item, index) in 5" :key="item">
                <img class="u-img" :src="imgSrc(`6/Ellipse${index}.png`)" alt="" />
                <img class="u-code" :src="imgSrc(`miniprogram.jpg`)" alt="" />
            </div>
        </div>
        <div class="m-page-7 m-page-layout">
            <img class="u-mark" :src="imgSrc(`7/7.svg`)" alt="" />
            <img class="u-bg" :src="imgSrc(`7/bg.png`)" alt="" />
            <div class="m-main">
                <img class="u-title" :src="imgSrc(`7/title.svg`)" alt="" />
                <div class="m-info">
                    <div class="m-item">
                        <img class="u-get__title" :src="imgSrc(`7/get_1.png`)" alt="" />
                        <div class="m-text">
                            <div class="u-text__title">使用200积分兑换1个月会员</div>
                            <div class="u-text__sub">我的积分：{{ getVipInfo.points }}</div>
                            <div class="u-text__tip">（剩余领取次数：{{ pointCashNum }}）</div>
                        </div>
                        <!-- TODO测试用 -->
                        <img class="u-get" @click="pointCash" :src="imgSrc(`get.png`)" alt="" />
                        <!-- <img class="u-get" v-else style="cursor: no-drop" :src="imgSrc(`get1.png`)" alt="" /> -->
                    </div>
                    <div class="m-item">
                        <img class="u-get__title" :src="imgSrc(`7/get_2.png`)" alt="" />
                        <div class="m-text">
                            <div class="u-text__title">于2021年12月28日之前注册的用户<br />可以领取3个月会员</div>
                            <div class="u-text__sub">我的注册时间：2021年12月27日</div>
                            <div class="u-text__tip">（剩余领取次数：1）</div>
                        </div>
                        <img class="u-get" :src="imgSrc(`get.png`)" alt="" />
                    </div>
                    <div class="m-item">
                        <img class="u-get__title" :src="imgSrc(`7/get_3.png`)" alt="" />
                        <div class="m-text">
                            <div class="u-text__title">
                                Lv4可领取1个月
                                <br />
                                Lv5可领取2个月
                                <br />
                                Lv6及以上可领取3个月
                            </div>
                            <div class="u-text__sub">我的等级：{{ getVipInfo.level }}</div>
                            <div class="u-text__tip">（剩余领取次数：1）</div>
                        </div>
                        <img class="u-get" :src="imgSrc(`get.png`)" alt="" />
                    </div>
                </div>
                <div class="u-time">[ 活动时间：2024.12.28~2025.2.28 ]</div>
            </div>
        </div>
        <div class="m-page-8 m-page-layout">
            <div class="m-author">
                <div class="m-author__list" v-for="(item, index) in authorList" :key="index">
                    <img class="u-author" v-for="author in item" :src="author.user_avatar" :key="author.ID" alt="" />
                </div>
                <img class="u-center__title" :src="imgSrc(`8/center-title.svg`)" alt="" />
            </div>
            <img class="u-bottom" :src="imgSrc(`8/bottom.jpg`)" alt="" />
        </div>

        <!--领取礼品弹窗-->
        <el-dialog title="领取福利" :visible.sync="getGiftVisible">
            <el-form :model="getGiftForm">
                <el-form-item label="选择福利" prop="">
                    <el-radio-group class="m-get-gift" v-model="getGiftForm.giftId">
                        <el-radio class="m-get__radio" v-for="item in 4" :key="item" :label="item">
                            <el-image class="u-book" :src="imgSrc(`gift/gift-${item}.jpg`)"> </el-image>
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="收货地址">
                    <div class="m-get-gift-address">
                        <el-select placeholder="请选择收货地址" v-model="getGiftForm.region">
                            <el-option
                                v-for="item in userAddress"
                                :key="item.id"
                                :label="`${item.contact_name}-${item.contact_phone}-${item.province}${item.city}${item.area}${item.address}`"
                                :value="item.id"
                            ></el-option>
                        </el-select>
                        <el-button
                            @click="openAddAddress"
                            type="primary"
                            icon="el-icon-add-location"
                            circle
                        ></el-button>
                    </div>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="getGiftVisible = false">取 消</el-button>
                <el-button type="primary" @click="getGiftVisible = false">确 定</el-button>
            </div>
        </el-dialog>

        <!-- 地址表单 -->
        <el-dialog custom-class="m-address-dialog" :visible.sync="addAddressVisible" title="我的地址" width="750px">
            <el-form :model="addAddressForm" :rules="addAddressRules" ref="addAddressRef" label-position="top">
                <el-form-item label="联系人" prop="contact_name">
                    <el-input placeholder="请输入名称" v-model="addAddressForm.contact_name"></el-input>
                </el-form-item>
                <el-form-item label="手机号" prop="contact_phone">
                    <el-input placeholder="请输入手机号" v-model="addAddressForm.contact_phone"></el-input>
                </el-form-item>
                <el-form-item label="联系地址" prop="address">
                    <div class="m-line">
                        <el-cascader
                            class="u-address"
                            v-model="address"
                            :options="addressList"
                            @change="addAddressCascaderChange"
                        ></el-cascader>
                        <el-input placeholder="详细地址" v-model="addAddressForm.address"></el-input>
                    </div>
                </el-form-item>
            </el-form>
            <span slot="footer" class="m-footer">
                <el-button @click="addAddressVisible = false">取 消</el-button>
                <el-button type="primary" @click="addAddressSubmit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import _ from "lodash";
import {
    medalCheck,
    superAuthor,
    medalReceive,
    decorationCheck,
    decorationReceive,
    addAddress,
    getAddress,
    getMyInfo,
    pointsExchangeVip,
} from "@/service/birthday";
import User from "@jx3box/jx3box-common/js/user";
import addressList from "@/assets/data/address.json";

export default {
    components: {},
    inject: ["__imgRoot", "__Links", "__imgPath"],
    data() {
        const checkPhone = (rule, value, callback) => {
            if (value) {
                const num = /^[1][3,4,5,7,8][0-9]{9}$/;
                if (!num.test(value)) {
                    callback(new Error("请输入正确的手机号"));
                } else {
                    callback();
                }
            }
        };
        const checkAddress = (rule, value, callback) => {
            if (value) {
                if (this.addAddressForm.province) {
                    callback();
                } else {
                    callback(new Error("请选择省市区"));
                }
            } else {
                callback(new Error("请输入具体地址"));
            }
        };
        return {
            pageTabsColor: [
                "linear-gradient(180deg, rgba(151, 71, 255, 0.50) 0%, rgba(151, 71, 255, 0.00) 100%)",
                "linear-gradient(180deg, rgba(206, 0, 0, 0.50) 0%, rgba(206, 0, 0, 0.00) 100%)",
                "linear-gradient(180deg, rgba(239, 98, 22, 0.50) 0%, rgba(239, 98, 22, 0.00) 100%)",
                "linear-gradient(180deg, rgba(239, 206, 22, 0.50) 0%, rgba(239, 206, 22, 0.00) 100%)",
                "linear-gradient(180deg, rgba(48, 236, 89, 0.50) 0%, rgba(48, 236, 89, 0.00) 100%)",
                "linear-gradient(180deg, rgba(64, 128, 255, 0.50) 0%, rgba(64, 128, 255, 0.00) 100%)",
                "linear-gradient(180deg, rgba(64, 128, 255, 0.50) 0%, rgba(64, 128, 255, 0.00) 100%)",
            ],
            page4Arr: [
                "新功能提前体验",
                "团队应用高级功能",
                "个人战斗数据仓库",
                "魔盒助手高级功能",
                "专属虚拟装扮",
                "亲友名单无上限",
                "专属昵称尾巴标识",
                "签到双倍积分",
            ],
            page3ClassType: "",
            pageElements: [], // 存储所有页面的元素
            lastActiveElement: null, // 用于存储上一个活跃的元素
            halfViewportHeight: 0, // 窗口一半的高度

            // ----------交互数据-----------
            birthdayMedalCheck: false,
            authorList: [],
            getGiftVisible: false,
            isLogin: User.isLogin(),
            login_url: this.__Links.account.login + "?redirect=" + location.href,
            userDecorationList: [],

            getGiftForm: {
                giftId: "",
            },
            userAddress: [],
            address: "",
            addressList,
            addAddressVisible: false,
            addAddressForm: {
                contact_name: "",
                contact_phone: "",
                province: "",
                city: "",
                area: "",
                address: "",
            },
            addAddressRules: {
                contact_name: [{ required: true, message: "请输入联系人名称", trigger: "blur" }],
                contact_phone: [{ required: true, validator: checkPhone, trigger: "blur" }],
                address: [{ required: true, validator: checkAddress, trigger: "blur" }],
            },

            userInfo: {
                uid: 8,
                name: "匿名",
                user_avatar: `${this.__imgPath}/image/common/avatar.png`,
                user_avatar_frame: "default",
                bio: "-",
                sign: 0,
            },
            getVipInfo: {
                points: 0,
                created_time: "",
                level: 0,
            },
        };
    },
    computed: {
        pointCashNum: function () {
            return Math.floor(this.getVipInfo.points / 200);
        },
    },
    watch: {},
    created() {
        this.checkMedal();
        this.checkDecoration();
        this.getUserAddress();
        this.loadUserInfo();
        // 获取所有签约作者
        superAuthor().then((res) => {
            const tempList = res.data.data;
            const result = [];
            for (let i = 0; i < tempList.length; i += 16) {
                const item = tempList.slice(i, i + 16);
                if (item.length === 16) {
                    result.push(item);
                } else {
                    break;
                }
            }
            this.authorList = result;
        });
    },

    mounted() {
        this.halfViewportHeight = window.innerHeight / 2;
        this.pageElements = Array.from(document.querySelectorAll(`.m-page-layout:not(.m-page-8)`));
        const scrollableElement = document.querySelector(".birthday");
        this.handleScrollThrottled = _.throttle(this.handleScroll, 500);
        scrollableElement.addEventListener("scroll", this.handleScrollThrottled, { passive: true });
        setTimeout(() => {
            this.moveSliderToItem(1);
        }, 500);
    },
    beforeDestroy() {
        const element = document.querySelector(".birthday");
        element.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        Init() {},
        // 检查是否领取了勋章
        checkMedal() {
            this.checkLogin(true).then(() => {
                medalCheck({
                    medal_name: "jx3box-birthday-5",
                }).then((res) => {
                    this.birthdayMedalCheck = res.data.data;
                });
            });
        },
        // 领取生日勋章
        getBirthdayMedal() {
            this.checkLogin().then(() => {
                medalReceive({
                    medal_name: "jx3box-birthday-5",
                }).then((res) => {
                    this.$message({
                        message: "恭喜你，领取成功",
                        type: "success",
                    });
                    this.checkMedal();
                });
            });
        },
        // 检查限定装扮领取状态
        checkDecoration() {
            this.checkLogin(true).then(() => {
                decorationCheck({
                    key: "jx3box-birthday-5",
                    type: `atcard,homebg,sidebar,calendar,comment,avatar,palu`,
                }).then((res) => {
                    this.userDecorationList = res.data.data;
                });
            });
        },
        // 领取装扮
        getDecoration(type) {
            this.checkLogin().then(() => {
                decorationReceive({
                    key: "jx3box-birthday-5",
                    type,
                }).then((res) => {
                    this.$message({
                        message: "恭喜你，领取成功",
                        type: "success",
                    });
                    this.checkDecoration();
                });
            });
        },
        // 打开新窗口
        openNewWindow(url) {
            window.open(url, "_blank");
        },
        // 打开领取礼品弹窗
        openGetGift() {
            this.getGiftVisible = true;
        },
        // 检查用户的登录状态
        checkLogin(noTip = false) {
            return new Promise((resolve, reject) => {
                if (User.isLogin()) {
                    resolve();
                } else {
                    if (!noTip) {
                        this.$confirm("登录后才可领取，是否前往登录", "您还未登录", {
                            confirmButtonText: "确定",
                            cancelButtonText: "取消",
                            type: "warning",
                        }).then(() => {
                            window.location.href = this.login_url;
                        });
                    }
                }
            });
        },
        // 获取用户地址列表
        getUserAddress() {
            this.checkLogin(true).then(() => {
                getAddress().then((res) => {
                    this.userAddress = res.data.data.list;
                });
            });
        },
        loadUserInfo() {
            this.checkLogin(true).then(() => {
                User.getAsset().then((data) => {
                    this.getVipInfo.points = data.points;
                    this.getVipInfo.created_time = data.created_time;
                });
                getMyInfo().then((res) => {
                    let userInfo = res.data.data;
                    this.getVipInfo.level = User.getLevel(userInfo?.experience || 0);
                });
            });
        },
        // 使用积分兑换会员
        pointCash() {
            this.checkLogin().then(() => {
                this.$confirm("是否使用200积分兑换一个月会员?", "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning",
                }).then(() => { 
                    pointsExchangeVip(1).then((res) => {
                        console.log(res);
                    });
                });
            });
        },
        // 打开添加地址弹窗
        openAddAddress() {
            this.addAddressVisible = true;
            this.addAddressForm = {
                contact_name: "",
                contact_phone: "",
                province: "",
                city: "",
                area: "",
                address: "",
            };
            this.address = "";
        },
        // 添加地址 地址变更
        addAddressCascaderChange(list) {
            this.addAddressForm.province = list[0];
            this.addAddressForm.city = list[1];
            this.addAddressForm.area = list[2];
        },
        // 添加地址
        addAddressSubmit() {
            this.$refs.addAddressRef.validate((valid) => {
                if (valid) {
                    addAddress(this.addAddressForm).then((res) => {
                        this.addAddressVisible = false;
                        this.$message({
                            message: "添加成功",
                            type: "success",
                        });
                        this.getUserAddress();
                    });
                }
            });
        },
        handleScroll(event) {
            let activeElement = null;
            for (const element of this.pageElements) {
                const elementTop = element.getBoundingClientRect().top + event.target.scrollTop;
                if (event.target.scrollTop + this.halfViewportHeight >= elementTop) {
                    activeElement = element;
                }
            }
            if (activeElement && activeElement !== this.lastActiveElement) {
                this.lastActiveElement = activeElement;
                let classArr = activeElement.classList[0].split("-");
                let domIndex = classArr[classArr.length - 1];
                this.moveSliderToItem(domIndex);
            }
        },
        moveSliderToItem(index) {
            if (index < 1 || index > document.querySelectorAll(".m-page-tabs .m-item").length) {
                console.error("Invalid index");
                return;
            }
            const items = document.querySelectorAll(".m-page-tabs .m-item");
            const item = items[index - 1]; // 索引是从1开始的，而数组索引是从0开始的
            const itemRect = item.getBoundingClientRect();
            const itemWidth = itemRect.width;
            const itemLeft = itemRect.left;
            const gradient = item.getAttribute("data-gradient");
            const slider = document.querySelector(".m-page-tabs .u-slider");
            slider.style.width = `${itemWidth}px`;
            slider.style.transform = `translateX(${itemLeft}px)`;
            slider.style.backgroundImage = gradient;
        },
        scrollToSection(index) {
            const scrollableElement = document.querySelector(".birthday");
            let scrollNum = 0;
            if (index != -1) {
                const element = document.querySelector(`.m-page-${index + 1}`);
                scrollNum = element.offsetTop;
            }
            scrollableElement.scrollTo({
                top: scrollNum,
                behavior: "smooth",
            });
        },
        playAudio(itemData) {
            const audio = new Audio(this.imgSrc(`music/C4_${itemData}.mp3`));
            audio.play();
        },
        imgSrc(src) {
            return this.__imgRoot + src;
        },
    },
};
</script>

<style lang="less">
@import "~@/assets/css/birthday/birthday5.less";
</style>
