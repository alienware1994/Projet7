import axios from 'axios'


export class axiosPost {
    getPosts() {
        axios.get("http://localhost:3000/api/posts").then((resp) => {
            this.postList = resp.data.posts;console.log("resp", resp.data.posts);
        });
    }
    postContent() {
        axios
        .post("http://localhost:3000/api/posts", {
            postContent: this.postContent,
        })
        .then((resp) => {
            console.log("dd", resp.data.content);
            this.postContent = {
                title: "",
                content: "",
            };
        })
        .catch((error) => {
            console.error(error);
        });
    }
}