<template>
  <main id="app">
    <Header />
    <router-view />
  </main>
</template>

<script>
import Header from "./components/Header";

export default {
  components: {
    Header
  }
};
</script>

<style>
a,
a:visited,
a:hover,
a:active {
  color: inherit;
  text-decoration: none;
}
* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.container {
  max-width: 1400px;
  width: 80vw;
  margin: 0 auto;
}
</style>
