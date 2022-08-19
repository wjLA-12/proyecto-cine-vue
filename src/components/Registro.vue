<template>
  <v-app>
    <v-container class="imagen">
      <v-row>
        <v-col>
          <v-card class="elevation-14">
            <v-toolbar center flat dark color="primary">
              <v-toolbar-title p class="text-md-center"
                >Registrarse</v-toolbar-title
              >
            </v-toolbar>

            <v-form>
              <v-text-field
                background-color=""
                v-model="nombre"
                label="Nombre"
                type="text"
              ></v-text-field>
              <v-text-field
                background-color=""
                v-model="apellidos"
                label="Apellidos"
                type="text"
              ></v-text-field>
              <v-text-field
                background-color=""
                v-model="email"
                id="email"
                name="email"
                label="Email"
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
              <v-btn color="grey lighten-2" to="/login" @click="registrar()"
                >Acceder</v-btn
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
          <v-col cols="6" align-center justify-center> </v-col>
          <v-col cols="6" align-center justify-center dark="cyan accent-1">
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  name: "PageRegistro",

  data: () => ({
    checkbox: null,
    registro: [],
  }),

  methods: {
    submit() {
      this.$refs.observer.validate();
    },
    clear() {
      this.Nombre = "";
      this.Apellidos = "";
      this.email = "";
      this.password = "";

      this.$refs.observer.reset();
    },
  },
};
</script>
<style>
.imagen {
  opacity: 0.5;
  filter: alpha(opacity=50);
  background-image: url(https://as01.epimg.net/meristation/imagenes/2022/01/15/noticias/1642238725_301426_1642238820_noticia_normal.https://i.pinimg.com/236x/c2/29/f1/c229f187263ddafb14e95a658aacfed9.jpg);
  height: 1000px;
  background-repeat: repeat;
}
.login {
  border: 1px;
  border-radius: 5px;
  padding: 100px;
}
