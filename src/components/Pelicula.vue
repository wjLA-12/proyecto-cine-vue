<template>
  <v-app>
    <v-container class="mt-16">
      <v-row>
        <v-col>
          <v-img
            :src="this.detallePelicula.poster"
            max-height="600"
            max-width="400"
            
          ></v-img>
        </v-col>
        <v-col>
          <h1>{{ this.detallePelicula.titulo }}</h1>
          <br />

          <h2>{{ this.detallePelicula.subtitulo }}</h2>
          <br />
          <h3 class="font-italic">{{ this.detallePelicula.sinopsis }}</h3>

          <h5>{{this.detallePelicula.duracion}}</h5>
          <h4>{{this.detallePelicula.genero}}</h4>
          <h5>{{this.detallePelicula.estado}}</h5>
          <h5>{{this.detallePelicula.idioma}}</h5>
          <h4>{{this.detallePelicula.director}}</h4>

        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
  name: "PagePelicula",
  data() {
    return {
      detallePelicula: [],
    };
  },
  methods: {
    traerPeli() {
      this.detallePelicula = this.$store.state.datos;
    },
  },
  created() {
    this.traerPeli();
  },
};
</script>

