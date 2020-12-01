<template>
   <div>
      <Texto />
   </div>
</template>

<script>
import Texto from "./components/Texto.vue";

export default {
   name: "App",
   components: {
      Texto,
   },
};
</script>

<style>
#app {
   color: white;
}
</style>
