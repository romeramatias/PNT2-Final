import { createStore } from "vuex";

const vocales = { A: "U", E: "O", O: "E", U: "A" };

export default createStore({
   state() {
      return {
         titulo: "Examen Final PNT2 | Romera Matías",
         texto: "",
      };
   },
   actions: {
      cambiarVocales({ commit }, textoComponent) {
         commit("cambiarVocales", textoComponent);
      },
   },
   mutations: {
      cambiarVocales(state, textoComponent) {
         let textoMayus = textoComponent.toUpperCase();
         state.texto = textoMayus.replace(/A|E|O|U/g, (letra) => vocales[letra]);
      },
   },
});
