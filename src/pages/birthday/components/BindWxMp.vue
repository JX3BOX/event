<template>
    <el-dialog
            title="绑定微信公众号"
            :visible="visible"
            :width="isPhone ? '95%' : '400px'"
            custom-class="m-notice-wechat__dialog"
            :before-close="handleClose"
        >
            <div class="m-wechat-content" v-loading="loading">
                <el-image class="u-qr" v-if="ticket" :src="qrcodeValue" lazy>
                    <div slot="error" class="u-error">
                        <i class="el-icon-picture-outline"></i>
                    </div>
                </el-image>
                <i class="u-tip">打开微信扫一扫，关注公众号</i>
                <!-- <small class="u-tip-small">关注之后需要重新登陆方可生效</small> -->
                <div class="u-bind" v-show="success">
                    <i class="el-icon-success" style="color: #67c23a; margin-right: 5px"> </i>
                    <span class="u-bind-text">绑定成功</span>
                </div>
            </div>
        </el-dialog>
</template>

<script>
import { getWechatQrcode } from "@/service/birthday";
import { SSE } from "@jx3box/jx3box-common/js/https";
import User from "@jx3box/jx3box-common/js/user";
import { __cms } from "@jx3box/jx3box-common/data/jx3box.json";
const base = `https://mp.weixin.qq.com/cgi-bin/showqrcode`;
export default {
    name: 'BindWxMp',
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        isWechatVerified: {
            type: Boolean,
            default: false
        }
    },
    model: {
        prop: 'visible',
        event: 'update:visible'
    },
    data() {
        return {
            ticket: "",
            sse: null,
            success: false,
            loading: false,

            isPhone: window.innerWidth < 768,
        }
    },
    computed: {
        token() {
            return User.getToken();
        },
        url() {
            return __cms + "api/cms/wechat/mp/bind/result?token=" + this.token;
        },
        qrcodeValue() {
            return `${base}?ticket=${encodeURIComponent(this.ticket)}`;
        },
    },
    watch: {
        visible(val) {
            if (val) {
                this.loadQrcode();
            }
        }
    },
    methods: {
        handleClose() {
            this.$emit('update:visible', false);

            if (this.sse) {
                this.sse.disconnect();
            }
        },
        loadQrcode() {
            this.loading = true;
            getWechatQrcode()
                .then((res) => {
                    this.ticket = res.data.data?.ticket;
                    if (!this.isWechatVerified && this.ticket) {
                        if (this.sse) {
                            this.sse.disconnect();
                        }
                        this.initSSE();
                    }
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        initSSE() {
            this.sse = new SSE(this.url);
            this.sse.connect();
            this.sse.on("open", (e) => {
                console.log("SSE Initialization");
            });
            this.sse.on("bind_wx_mp", this.onMessage);
            this.sse.on("error", (e) => {
                console.log("SSE Error", e);
            });
        },
        onMessage() {
            this.success = true;

            setTimeout(() => {
                this.$emit('update:visible', false);
                this.$emit('bind-success');
            }, 1000);
        },
    }
}
</script>

<style lang="less">
.m-notice-wechat {
    .flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

}
.m-notice-wechat__dialog {
    .m-wechat-content {
        .flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        .u-qr {
            .flex;
            align-items: center;
            justify-content: center;
            .size(180px);
            .el-image__inner {
                .full;
            }
        }
        .u-error {
            .fz(120px);
        }
    }

    .u-tip-small {
        font-size: 13px;
        color: #F56C6C;
        font-weight: 600;
    }
}
@media screen and (max-width: @phone) {
    .m-notice-wechat {
        .u-value {
            font-size: 12px;
        }
        .u-bind-button {
            span {
                .none;
            }
        }
    }
}
</style>
