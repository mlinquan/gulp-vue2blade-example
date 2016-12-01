<template>
<div>
<h1>gulp-vue2blade-example</h1>
<p v-if="this.$root.username">Welcome, {{ this.$root.username }}</p>
<ul class="tnv">
  <router-link tag="li" to="/">
    <a>Home</a>
  </router-link>
  <li>
    <a href="/" v-if="this.$root.username" v-on:click="logout">Logout</a>
    <router-link to="/login" v-else>Login</router-link>
  </li>
</ul>
</div>
</template>

<script>
export default {
  name: 'header',
  methods: {
    logout: function (e) {
      e.preventDefault()
      this.$root.username = ''
      return false
    }
  }
}
</script>

<style>
.tnv{
  overflow: hidden;
  clear: both;
}
.tnv li{
  float: left;
  margin-right: 15px;
}
</style>
