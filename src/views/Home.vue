<template>
  <section class="home container">
    <Form />
    <List v-if="repsList.items && repsList.items.length" />
    <Pagination v-if="repsList.items && repsList.items.length" />
  </section>
</template>

<script>
import Form from "@/components/Form";
import List from "@/components/List";
import Pagination from "@/components/Pagination";
import { mapGetters } from "vuex";

export default {
  components: {
    Form,
    List,
    Pagination
  },
  computed: mapGetters({
    repsList: "getRepsList"
  }),
  mounted() {
    this.$store.dispatch("requestSearch");
  },
  watch: {
    $route() {
      this.$store.dispatch("requestSearch");
    }
  }
};
</script>

<style scoped>
.home {
  padding: 25px;
}
</style>