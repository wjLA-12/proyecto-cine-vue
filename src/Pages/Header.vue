<template>
  <v-container-fluid>
    <v-app-bar color="deep-purple" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title class="white--text">
        <router-link style="text-decoration: none; color: inherit" to="/"
          >Repelis</router-link
        >
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn class="primary white--text" to="/registro"> Registrar </v-btn>
      <v-btn class="primary white--text ml-4" to="/login">iniciar</v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title to="/iniciar">inicio</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-pistol</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Accion</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-reddit</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Animados</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-sunglasses</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Comedia</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-heart-broken</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Drama</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-ghost</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Terror</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-container-fluid>
</template>

<script>
export default {
  name: "PageHeader",
  data: () => ({
    drawer: false,
    group: null,
  }),
};