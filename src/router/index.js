import Vue from "vue";
import VueRouter from "vue-router";
import Nosotros from "../views/Nosotros.vue";
import Servicios from "../views/Servicios";
import Galería from "../views/Galería.vue";
import Contacto from "../views/Contacto.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Nosotros",
    component: Nosotros,
  },
  {
    path: "/Servicios",
    name: "Servicios",
    component: Servicios,
  },
  {
    path: "/Galería",
    name: "Galería",
    component: Galería,
  },
  {
    path: "/Contacto",
    name: "Contacto",
    component: Contacto,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
