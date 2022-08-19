<template>
  <div>
    <v-carousel class="mb-16">
      <v-carousel-item
        v-for="(item, i) in action"
        :key="i"
        :src="item.poster"
        reverse-transition="fade-transition"
        transition="fade-transition"
        @click="detallePelicula(item)"
      ></v-carousel-item>
    </v-carousel>
    <v-container class="mt-16">
      <v-row>
        <v-col cols="3" v-for="(p, i) in action" :key="i">
          <v-card :loading="loading" class="mx-auto my-12" max-width="374">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img height="250" :src="p.poster"></v-img>

            <v-card-title>{{ p.titulo }}</v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ms-4">4.5 (413)</div>
              </v-row>

              <div class="my-4 text-subtitle-1">
                {{ p.subtitulo }}
              </div>

              <div>{{ p.estado }}.</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="deep-purple lighten-2" text> </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
 
<script>
import axios from "axios";
export default {
  name: "PageHome",

  data: () => ({
    items: [
      {
        src: "https://www.gndiario.com/sites/default/files/styles/noticia_detalle_noticia_2_1/public/noticias/mejores-peliculas-2022%20%281%29.jpg?h=bf005dea&itok=nNcL1zx7",
      },
      {
        src: "https://cdn.superaficionados.com/imagenes/7-peliculas-de-accion-spider-man-no-way-home-cke.jpg",
      },
      {
        src: "https://t1.uc.ltmcdn.com/es/posts/7/3/7/como_conseguir_caratulas_para_peliculas_1737_600.jpg",
      },
      {
        src: "https://diamondfilms.com/img/galeria/crop/58ae056c4c077994eb33e2feb.jpg",
      },
    ],
    action: [],
  }),
  methods: {
    traerPeliculas() {
      let header = { headers: { "x-token": this.$store.state.token } };

      axios
        .get("http://localhost:4500/api/pelicula", header)

        .then((response) => {
          console.log(response);
          this.action = response.data.peliculas;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    detallePelicula(item) {
      this.$router.push("/pelicula");
      this.$store.dispatch("setDatos", item);
      console.log(this.$store.state.datos);
    },
  },
  created() {
    this.traerPeliculas();
  },
};
</script>
