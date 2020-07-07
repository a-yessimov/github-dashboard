<template>
  <div>
    <article class="sort-block">
      <h3>Showing {{repsList.total_count}} available repository results</h3>
    </article>
    <ul>
      <ListItem v-for="item in repsList.items" :key="item.id" v-bind:repData="item" />
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListItem from "@/components/ListItem";
export default {
  computed: mapGetters({
    repsList: "getRepsList",
    searchQuery: "getSearchQuery"
  }),
  components: {
    ListItem
  }
};
</script>

<style scoped>
.sort-block {
  margin-bottom: 20px;
}
.sort-block h3 {
  font-size: 18px;
  font-weight: 500;
  color: #24292e;
}
</style>