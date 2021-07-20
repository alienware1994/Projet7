 <!--code pour la création de post -->
<template>
  <div class="mypost">
    <form @submit="postMyMessage($event)" method="post" id="postmsg">
      <h2>Bonjour, {{ getAuthor() }}</h2>
      
        <b-form-input
          v-model="postContent.title"
          placeholder="Mettez un titre à votre post ! :)"
        ></b-form-input>
      
      <div class="flex-row d-flex">
        <b-form-textarea
          v-model="postContent.content"
          class="mx-auto"
          id="textarea-large"
          placeholder="Qu'avez-vous à nous partager?"
          no-resize
        ></b-form-textarea>
       
        <b-button class="btnsend" variant="info" type="submit"
          >Envoyer</b-button
        >
      </div>     
       <b-form-file v-model="postContent.image" class="postimg" style="content:'choisir'"  placeholder="Choisissez une image"></b-form-file>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "mypost",
  data() {
    return {
      postContent: {
        title: "",
        content: "",
        image: null,
      },
    };
  },
  methods: {
    // permet de récupère l'username de la personne connecté pour l'afficher dans l'accueil
    getAuthor: function () {
      let username = localStorage.getItem("username");
      return username;
    },
// Code pour la récupération des champs du post et pour l'envoie au backend ( BDD )
    postMyMessage(e) {
      e.preventDefault();
      const fd = new FormData();
      if (this.postContent.image !== null) {
        fd.append("image", this.postContent.image, this.postContent.image.name);
      } 
      
      fd.set("content", this.postContent.content);
      fd.set("title", this.postContent.title);
      console.log(fd.get("title"));
      console.log(fd.get("image"));
      console.log(fd.get("content"));
      const config = { headers: { "Content-Type": "multipart/form-data" } };
      axios
        .post("http://localhost:3000/api/posts/", fd, config)

        .then((resp) => {
          console.log("dds", resp.data.post);
          this.postContent = {
            title: "",
            content: "",
            image: null,
          };
          this.$store.dispatch("ADDPOST", resp.data.post);
        })
        .catch((error) => {
          console.error(error);
          alert("Veuillez insérer un titre, un post et une image !")
        });
    },
  },
};
</script>

<style scoped>
.custom-file-input ~ .custom-file-label::after {
  content: "Choisir...";
}
.btnsendimg {
  background: #FD4821;
}
h2 {
  margin: 0;
  padding: 7px 0 7px 0;
  background-color: #FD4821;
  color: white;
  font-style: italic;
}
/* .custom-file-input ~ .custom-file-label[data-browse]::after {
  content: "fefe"  !important;
  z-index: 9999;

}
.custom-file-label{
  cursor: pointer;
  content: "dddd";
}
.custom-file-input:lang(en) ~ .custom-file-label::after {
  content: 'dsds'  !important;
}
  */
#postmsg {
  padding-bottom: 0;
}
.postimg {
  width: 40%;
  flex-direction: column;
  text-align: left;
}
label {
  height: 100px;
  cursor: pointer;
}
.mypost {
  background-color: #eeeeee;
  width: 57%;
  text-align: center;
  margin: auto;
  margin-top: 150px;
  border-radius: 30px;
}
form {
  flex-direction: column;
  background-color: rgb(209, 206, 206);
  padding-bottom: 5px;
}
textarea {
  width: 100%;
  min-height: 100px;
  resize: none;

  padding: 0.5rem;
}
textarea :focus {
  outline-width: 0;
}
textarea[placeholder],
input[placeholder] {
  font-style: italic;
  font-size: 1.2rem;
}
.btnsend {
  font-weight: 700;
  font-size: 1.2rem;
  background-color: #d1515a;
}
.btnsend:hover {
  background-color: #d1515a;
}
@media screen and (max-width: 1000px) {
  .mypost {
    width: 80%;
  }
}
</style>