<template>
	<div class="m-box">
        <pc></pc>
        <!-- <mobile v-if="show=='mobile'"></mobile> -->
    </div>
</template>

<script>
import pc from  './pc'
export default {
	name: "Index",
    components:{
        pc
    },
	data: function () {
		return {
            show:null,

		};
	},
	methods: {
        browserRedirect() {
            var sUserAgent = navigator.userAgent.toLowerCase();
            var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
            var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
            var bIsMidp = sUserAgent.match(/midp/i) == "midp";
            var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
            var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
            var bIsAndroid = sUserAgent.match(/android/i) == "android";
            var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
            var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
            if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
                //跳转移动端页面
                return  'mobile'
            } else {
                //跳转pc端页面
                return 'pc'
            }
        }
	},
	filters: {},
	created: function () {
        // this.show=this.browserRedirect()
    },
	mounted: function () {},
};
</script>
