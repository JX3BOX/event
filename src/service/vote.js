import { $next } from "@jx3box/jx3box-common/js/https";
const api = "https://dev.next2.jx3box.com/api/next2";
// 【用户】获取最新的一个公开的投票活动详情
export function getNewProgram(params) {
    return $next().get(`${api}/vote-program/program/public/latest`, { params });
}
//获取公开投票的详情
export function getProgramDetail(id) {
    return $next().get(`${api}/vote-program/program/${id}/public`);
}
// /vote-program/program/{id}/public/vote-item/{voteItemId}

// 用户获取公开的投票活动【单项】详情
export function getProgramItem(id, voteItemId) {
    return $next().get(`${api}/vote-program/program/${id}/public/vote-item/${voteItemId}`);
}
