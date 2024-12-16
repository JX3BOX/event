import { $cms, $pay } from "@jx3box/jx3box-common/js/https";

// 检查用户是否拥有该勋章
function medalCheck(params) {
    return $cms().get("/api/cms/user/medal/check", {
        params,
    });
}

// 领取生日勋章
function medalReceive(data) {
    return $cms().post("/api/cms/user/medal/receive", data);
}

// 检查用户是否拥有某装扮
function decorationCheck(params) {
    return $cms().get("/api/cms/user/decoration/check", {
        params,
    });
}

// 领取某个装扮
function decorationReceive(data) {
    return $cms().post("/api/cms/user/decoration/receive", data);
}

// 获取签约作者列表
function superAuthor(params) {
    return $cms().get("/api/cms/user/list/super_author", {
        params,
    });
}
// 获取用户信息
function getMyInfo() {
    return $cms().get(`/api/cms/user/my/info`, {
        params: {
            __no_cache: 1,
        },
    });
}
// ------------------------------------------------------------
// 获取地址列表
function getAddress(params) {
    return $pay().get(`/api/mall/ship-address`, params);
}
// 添加地址
function addAddress(data) {
    return $pay().post(`/api/mall/ship-address`, data);
}
// -------------------------------------------------
// 积分兑换会员
function pointsExchangeVip(id, params) {
    return $pay().get(`/api/jx3box/event/${id}/points-exchange-vip`, params);
}
// 活跃会员已领取VIP次数
function activityUserApplyVipChance(id, params) {
    return $pay().get(`/api/jx3box/event/${id}/activity-user/apply-vip/chance`, params);
}
// 活跃会员领取VIP
function activityUserApplyVipApplyVip(id, params) {
    return $pay().get(`/api/jx3box/event/${id}/activity-user/apply-vip`, params);
}
// 老用户已领取VIP次数
function oldUserApplyVipChance(id, params) {
    return $pay().get(`/api/jx3box/event/${id}/old-user/apply-vip/chance`, params);
}
// 老用户领取VIP
function oldUserApplyVip(id, params) {
    return $pay().get(`/api/jx3box/event/${id}/old-user/apply-vip`, params);
}

export {
    medalCheck,
    medalReceive,
    superAuthor,
    decorationCheck,
    decorationReceive,
    addAddress,
    getAddress,
    getMyInfo,
    pointsExchangeVip,
    activityUserApplyVipChance,
    activityUserApplyVipApplyVip,
    oldUserApplyVipChance,
    oldUserApplyVip,
};
