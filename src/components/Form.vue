<template>
  <form class="search-form" @submit.prevent="handleSubmit">
    <input
      class="search-form__input"
      type="text"
      name="search-input"
      v-model="inputValue"
      id="search-input"
      placeholder="Find a repository..."
    />
    <button class="search-form__submit" type="submit">Search</button>
  </form>
</template>

<script>
export default {
  data: function() {
    return { inputValue: this.$route.query.q };
  },
  methods: {
    handleSubmit() {
      if (this.inputValue !== this.$route.query.q) {
        this.$router.replace({
          path: "/",
          query: { q: this.inputValue, page: 1 }
        });
      }
    }
  },
  mounted() {
    this.inputValue = this.$route.query.q ? this.$route.query.q : "";
  },
  watch: {
    $route() {
      this.inputValue = this.$route.query.q ? this.$route.query.q : "";
    }
  }
};
</script>

<style>
.search-form {
  margin-bottom: 20px;
  display: flex;
}
.search-form__input {
  outline: none;
  padding: 10px;
  max-width: 250px;
  width: 100%;
  border: 1px solid #24292e;
  border-radius: 5px 0 0 5px;
  font-size: 16px;
  color: #24292e;
  border-right: none;
  background: inherit;
}
.search-form__submit {
  outline: none;
  padding: 5px 10px;
  border-radius: 0 5px 5px 0;
  border: none;
  background: #24292e;
  color: #fff;
  font-size: 16px;
  line-break: 16px;
  cursor: pointer;
}
</style>