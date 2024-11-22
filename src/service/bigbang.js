import { $next, $cms } from "@jx3box/jx3box-common/js/https";

function getVoteInfo(id) {
    return $next().get(`/api/next2/vote-program/program/${id}/public`);
}

function getUserVoteStatus(eventId) {
    return $next().get(`/api/next2/vote-program/user/votes/${eventId}`);
}

function submitVote(eventId, itemId) {
    return $next().post(`/api/next2/vote-program/vote`, {
        event_id: eventId,
        item_id: itemId,
    });
}

export { getVoteInfo, getUserVoteStatus, submitVote };
