<template>
  <ul>
    <li v-for="(count, lang) of languages" :key="lang">{{ lang }}: {{ count }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      languages: []
    };
  },
  props: ["languagesUrl"],
  mounted() {
    fetch(this.languagesUrl)
      .then(res => res.json())
      .then(data => (this.languages = data));
  }
};
</script>

<style>
</style>