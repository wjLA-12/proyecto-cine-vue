import home from '../components/Home.vue'
import login from '../components/Login.vue'
import registro from '../components/Registro.vue'
import usuario from '../components/Usuario.vue'
import pelicula from '../components/Pelicula.vue'
import newMovie from '../components/Newmovie.vue'
import faviritaMovie from '../components/Favorita.vue'
import actor from '../components/Actor'
import newActor from '../components/Newactor.vue'


export const routes = [
    {path:'/login',component:login},
    {path:'/',component:home},
    {path:'/registro',component:registro},
    {path:'/usuario',component:usuario},
    {path:'/pelicula',component:pelicula},
    {path:'/newMovie',component:newMovie},
    {path:'/favoritaMovie',component:faviritaMovie},
    {path:'/actor',component:actor},
    {path:'/newActor',component:newActor},

]

