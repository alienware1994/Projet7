import axios from "axios"
export default new class axiosComment {
    axiosPost(comment, postId) {
        return axios.post("http://localhost/3000/api/posts/comment", {
            axiosComment: comment,
            postId: postId,
        })
        .then((resp) => {
            console.log("dd", resp.data.comment);
            return resp
        })
        .catch((error) => {
            console.error(error);
        });
    }
}