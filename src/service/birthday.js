import { $cms } from "@jx3box/jx3box-common/js/https";

// 获取勋章列表
function medalList(params) {
    return $cms().get("/api/cms/config/medal", {
        params,
    });
}

// 检查用户是否拥有该勋章
function medalCheck(params) {
    return $cms().get("/api/cms/user/medal/check", {
        params,
    });
}

export { medalCheck, medalList };
