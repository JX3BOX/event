import axios from 'axios'

function getEventAc(id) {
    return axios.get(`https://cms.jx3box.com/api/cms/post/${id}`).then((res) => {
        return res?.data?.data?.post_content
    })
}

export { getEventAc }
