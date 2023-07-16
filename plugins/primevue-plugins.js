import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Image from "primevue/image";
import Dropdown from "primevue/dropdown";
import ConfirmationService from "primevue/confirmationservice";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.component("Button", Button);
  nuxtApp.vueApp.component("InputText", InputText);
  nuxtApp.vueApp.component("Image", Image);
  nuxtApp.vueApp.component("Dropdown", Dropdown);
  nuxtApp.vueApp.use(ConfirmationService);
});
