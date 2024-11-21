import { $next, $cms } from "@jx3box/jx3box-common/js/https";

function getVoteInfo(id){
    return $next().get(`/api/next2/vote-program/program/${id}/public`);
}


export { getVoteInfo }

