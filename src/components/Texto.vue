<template>
   <div class="jumbotron m-4">
      <h1 class="display-4">{{ $store.state.titulo }}</h1>
      <hr class="my-4" />
      <p>Formateo de texto:</p>
      Color: <input type="text" placeholder="Ingrese un color..." v-model="color" /> Fondo:
      <input type="text" placeholder="Ingrese un color de fondo..." v-model="background" /> Tamaño:
      <input type="text" placeholder="Ingrese un tamaño..." v-model="size" />
      <br /><br />
      <input
         type="text"
         :style="{ color: color, backgroundColor: background, fontSize: size }"
         placeholder="Ingrese un texto..."
         v-model="texto"
      />
      <p>{{ contarPalabras }}</p>
      <hr />
      <p>Respuestas:</p>
      <table class="table table-dark">
         <thead>
            <tr>
               <th scope="col">Pregunta Nº</th>
               <th scope="col">Respuestas</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <th>1</th>
               <th><b>B</b></th>
            </tr>
            <tr>
               <th>2</th>
               <th><b>C</b></th>
            </tr>
            <tr>
               <th>3</th>
               <th><b>B</b></th>
            </tr>
            <tr>
               <th>4</th>
               <th><b>D</b></th>
            </tr>
            <tr>
               <th>5</th>
               <th><b>D</b></th>
            </tr>
         </tbody>
      </table>
   </div>
</template>

<script>
export default {
   name: "Texto",
   data() {
      return {
         texto: "",
         color: "",
         background: "",
         size: "",
         textoTrim: "",
      };
   },
   methods: {},
   computed: {
      contarPalabras() {
         const textoSplit = this.texto.split(" ");
         let palabras = [];
         textoSplit.forEach((palabra) => {
            if (palabra != "") {
               palabras.push(palabra);
            }
         });
         return `Cantidad de Palabras: ${palabras.length}`;
      },
   },
};
</script>

<style scoped>
.jumbotron {
   background: #ad5389;
   background: -webkit-linear-gradient(to right, #3c1053, #ad5389);
   background: linear-gradient(to right, #3c1053, #ad5389);
}
::placeholder {
   color: grey;
   font-size: 0.8rem;
}
hr {
   background-color: white;
}
</style>
