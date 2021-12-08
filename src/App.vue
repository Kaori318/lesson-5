<template>
  <div id="app">
    <header class="header">
      <nav>
<!--      <nav @click="pushHistory($event)">-->
<!--        <a class="router-link" href="#dashboard">Dashboard</a>-->
<!--        <a class="router-link" href="#about">About</a>-->
<!--        <a class="router-link" href="#404">Not found</a>-->
<!--        <a class="router-link" href="dashboard">Dashboard</a>-->
<!--        <a class="router-link" href="about">About</a>-->
<!--        <a class="router-link" href="404">Not found</a>-->
        <router-link class="router-link" to="dashboard">Dashboard</router-link>
        <router-link class="router-link" to="about">About</router-link>
      </nav>
    </header>
    <main>
<!--      <Dashboard v-if="page === 'dashboard'"/>-->
<!--      <About v-if="page === 'about'"/>-->
<!--      <NotFound v-if="page === '404'"/>-->
<!--      <component :is="page"/>-->
      <router-view/>
    </main>
    <div @click="goToPage('404')">go to</div>
  </div>
</template>

<script>
// import Dashboard from './pages/Dashboard.vue';
// import About from './pages/About.vue';
// import NotFound from './pages/404.vue';

export default {
  name: 'App',
  // components: { NotFound, About, Dashboard },
  data: () => ({
    page: '',
  }),
  methods: {
    // setPage() {
    //   // this.page = window.location.hash.slice(1);
    //   this.page = window.location.pathname.slice(1);
    // },
    // pushHistory(event) {
    //   event.preventDefault();
    //   if (!event.target.classList.contains('router-link')) return;
    //
    //   window.history.pushState({}, '', event.target.href);
    //   this.setPage();
    // },
    goToPage(pageName) {
      this.$router.push(pageName);
      // this.$router.push({
      //   name: pageName,
      //   // path: '/404',
      //   params: {
      //     id: 124,
      //   },
      // });
    },
  },
  mounted() {
    // this.setPage();
    // window.addEventListener('hashchange', this.setPage);
    // window.addEventListener('popstate', this.setPage);
  },
  beforeDestroy() {
    // window.removeEventListener('hashchange', this.setPage);
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.router-link {
  margin: 0 5px;
}
</style>
