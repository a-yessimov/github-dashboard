<template>
  <header>
    <nav class="container">
      <router-link class="link" to="/">
        <font-awesome-icon class="icon" :icon="['fab', 'github']" />
        GitHub Dashboard
      </router-link>
    </nav>
  </header>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(faGithub);

export default {};
</script>

<style scoped>
header {
  background-color: #24292e;
}
nav {
  padding: 10px;
  display: flex;
  align-items: center;
}

.link {
  font-size: 24px;
  color: #fff;
  display: flex;
  align-items: center;
}
.icon {
    font-size: 36px;
    color: #fff;
    margin-right: 5px;
}
</style>