<template>
  <div v-if="this.contributors.length" class="contributors">
    <div v-for="contributor in contributors" :key="contributor.id">
      <a :href="contributor.html_url" target="_blank">
        <img :src="contributor.avatar_url" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contributors: []
    };
  },
  props: ["contributorsUrl"],
  mounted() {
    fetch(this.contributorsUrl)
      .then(res => res.json())
      .then(data => {
        return (this.contributors = data.slice(0, 10));
      });
  }
};
</script>

<style scoped>
.contributors {
  display: flex;
  flex: 1 1 50px;
  margin: 10px 0;
}
img {
  max-width: 50px;
  max-height: 50px;
  width: 100%;
  border-radius: 50%;
}
</style>