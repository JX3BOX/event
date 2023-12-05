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

export { getTopic };