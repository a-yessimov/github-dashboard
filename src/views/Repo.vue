<template>
  <section class="container repo" v-if="Object.keys(currentRepo).length">
    <header class="header">
      <a class="header__title" :href="currentRepo.html_url" target="_blank">{{currentRepo.name}}</a>
      <span>
        <font-awesome-icon class="star-icon" :icon="['far', 'star']" />
        {{currentRepo.stargazers_count}}
      </span>
      <span>Last updated at {{new Date(currentRepo.updated_at).toDateString()}}</span>
    </header>
    <div class="repo-b">
      <img :src="currentRepo.owner.avatar_url" alt />
      <a :href="currentRepo.owner.html_url" target="_blank">{{currentRepo.owner.login}}</a>
    </div>
    <p>{{currentRepo.description}}</p>
    <Contributors v-bind:contributorsUrl="currentRepo.contributors_url" />
    <Languages v-bind:languagesUrl="currentRepo.languages_url" />
  </section>
</template>

<script>
import Contributors from "@/components/Contributors";
import Languages from "@/components/Languages";
import { mapGetters } from "vuex";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-regular-svg-icons";

library.add(faStar);

export default {
  computed: mapGetters({
    currentRepo: "getCurrentRepo"
  }),
  components: {
    Contributors,
    Languages
  },
  mounted() {
    if (!Object.keys(this.currentRepo).length) {
      this.$store.dispatch("requestRepo");
    }
  }
};
</script>

<style scoped>
img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.repo {
  padding: 25px;
}

.header__title {
  font-size: 32px;
  color: #0366d6;
  margin-right: 10px;
}

.star-icon {
  color: #586069;
  font-size: 18px;
}

.repo-b {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.repo-b img {
  margin-right: 10px;
}
.repo-b a{
  font-size: 24px;
}
</style>