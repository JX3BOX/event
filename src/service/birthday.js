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

// ------------------------------------------------------------
// 获取地址列表
function getAddress(params) {
    return $pay().get(`/api/mall/ship-address`, params);
}
// 添加地址
function addAddress(data) {
    return $pay().post(`/api/mall/ship-address`, data);
}

export { medalCheck, medalReceive, superAuthor, decorationCheck, decorationReceive, addAddress, getAddress };
