import { $cms } from "@jx3box/jx3box-common/js/https";

function getTopic(topic) {
    return $cms().get("/api/cms/topic", {
        params: {
            type: topic,
            status: 1,
            _no_cache: 1
        },
    });
}

function getUsers(params) {
    return $cms().get("/api/cms/user/list/info", {
        params
    });
}
export { getTopic, getUsers };