<template>
  <ul class="pagination">
    <li>
      <button
        :disabled="!this.$route.query.page || this.$route.query.page === 1"
        @click="handleClick(currentPage - 1)"
      >
        <font-awesome-icon icon="chevron-left" />
      </button>
    </li>
    <li v-if="currentPage > 10">
      <button @click="handleClick(1)">1</button>
    </li>
    <li v-if="currentPage > 10">
      <button @click="handleClick(Math.floor(currentPage / 10) * 10)">
        <font-awesome-icon icon="ellipsis-h" />
      </button>
    </li>
    <li v-for="page in pages" :key="page">
      <button :disabled="+currentPage === page" @click="handleClick(page)">{{page}}</button>
    </li>
    <li v-if="currentPage <= Math.floor((totalCount - 1)/10) * 10 ">
      <button @click="handleClick(Math.ceil(currentPage / 10) * 10 + 1)">
        <font-awesome-icon icon="ellipsis-h" />
      </button>
    </li>
    <li>
      <button
        v-if="currentPage <= Math.floor((totalCount - 1)/10) * 10 "
        :disabled="+currentPage === +totalCount"
        @click="handleClick(totalCount)"
      >{{totalCount}}</button>
    </li>
    <li>
      <button :disabled="+currentPage === +totalCount" @click="handleClick(+currentPage + 1)">
        <font-awesome-icon icon="chevron-right" />
      </button>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight, faChevronLeft, faEllipsisH } from "@fortawesome/free-solid-svg-icons";

library.add(faChevronRight, faChevronLeft, faEllipsisH);

export default {
  methods: {
    handleClick(page) {
      this.$router.replace({
        path: "/",
        query: {
          q: this.$route.query.q,
          page
        }
      });
    }
  },
  computed: mapGetters({
    repsList: "getRepsList",
    totalCount: "getTotalCount",
    currentPage: "getCurrentPage",
    pages: "getPages"
  })
};
</script>

<style scoped>
.pagination {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
button {
  outline: none;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #e5e8eb;
  background: inherit;
}
</style>