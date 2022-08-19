<template>
  <v-app id="inspire">
    <v-container class="imagen">
      <v-row>
        <v-col> </v-col>

        <v-col class="login" >
          <v-card class="elevation-14">
            
            <v-toolbar center flat dark color="primary">
              <v-toolbar-title p class="text-md-center"
                >Login form</v-toolbar-title
              >
            </v-toolbar>

            <v-form>
              
              <v-text-field
                background-color=""
                v-model="email"
                name="login"
                label="Login"
                type="text"
              ></v-text-field>
              <v-text-field
                background-color=""
                v-model="password"
                id="password"
                name="password"
                label="Password"
                type="password"
              ></v-text-field>
            </v-form>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="grey lighten-2" to="/" @click="login()"
                >Login</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col> </v-col>
      </v-row>
    </v-container>

    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md8>
        <v-row>
          <v-col cols="6" align-center justify-center>
           
          </v-col>
          <v-col cols="6" align-center justify-center dark="cyan accent-1">
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  name: "PageLogin",

  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    login() {
      axios
        .get(
          "http://localhost:4500/api/persona/login/user?email=afzambrano7@misena.edu.co&password=1234567"
        )

        .then((response) => {
          console.log(response);
          this.response = response.data;
          this.$store.dispatch("setToken", response.data.token);
          console.log(this.$store.state.token);
          this.$router.push("/home");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style>
.imagen {
  background-image: url(https://as01.epimg.net/meristation/imagenes/2022/01/15/noticias/1642238725_301426_1642238820_noticia_normal.jpg);
  height: 1000px;
  background-repeat: repeat;
}
.login {
  border: 1px;
  border-radius: 5px;
  padding: 100px;

}
</style>
