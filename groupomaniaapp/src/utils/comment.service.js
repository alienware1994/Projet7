import axios from "axios"
// Code qui permet la liaison entre front et back
export default new class commentService {
    postComment(comment, postId) {
        return axios
            .post("http://localhost:3000/api/posts/comment", {
                postComment: comment,
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