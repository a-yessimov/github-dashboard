<template>
  <li class="list-item">
    <font-awesome-icon class="book-icon" icon="book" />
    <div>
      <router-link
        class="list-item__title"
        :to="{ path: 'repo', query: { name: repData.full_name }}"
        @click.native="handleClick"
      >{{repData.full_name}}</router-link>
      <p class="list-item__text">{{repData.description}}</p>
      <div class="item-b">
        <span>
          <font-awesome-icon class="star-icon" :icon="['far', 'star']" />
          {{repData.stargazers_count}}
        </span>
        <span class="list-item__text">{{repData.language}}</span>
        <span class="list-item__text">Updated At {{new Date(repData.updated_at).toDateString()}}</span>
      </div>
      <div  class="item-b">
        <a  class="item-b__link" href="https://github.com/freeCodeCamp/freeCodeCamp.git" target="_blank">Github link</a>
        <span class="list-item__text">Have {{repData.open_issues_count}} issues</span>
      </div>
    </div>
  </li>
</template>

<script>
  import { library } from "@fortawesome/fontawesome-svg-core";
  import { faBook } from "@fortawesome/free-solid-svg-icons";
  import { faStar } from "@fortawesome/free-regular-svg-icons";

  library.add(faBook, faStar);

export default {
  methods: {
    handleClick() {
      this.$store.commit("setCurrentRepo", this.repData);
    }
  },
  props: ["repData"]
};
</script>

<style scoped>
.list-item {
  padding: 15px;
  margin-bottom: 20px;
  background: #24292e1c;
  border-radius: 5px;
  display: flex;
}
.book-icon {
  color: #586069;
  margin-right: 10px;
}
.star-icon {
  color: #586069;
  font-size: 16px;
}
.list-item__title {
  display: block;
  color: #0366d6;
  font-size: 18px;
  margin-bottom: 10px;
}

span {
  margin-right: 10px;
}

.item-b {
  margin: 5px 0;
}
.item-b__link {
  margin-right: 10px;
}

</style>