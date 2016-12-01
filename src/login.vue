<template>
<div>
<h2>Login</h2>
<form action="/login" method="post" class="loginForm" v-on:submit="loginForm">
  <p><label for="username">Username</label><input type="text" name="username" id="username" v-model="username"></p>
  <p><label for="password">Password</label><input type="password" name="password" id="password"></p>
  <p><button type="submit">Login</button></p>
</form>
</div>
</template>

<script>
export default {
  name: 'login',
  data: function () {
    return {
      username: ''
    }
  },
  beforeDestroy: function () {
    this.stop = 1
  },
  methods: {
    loginForm: function (e) {
      console.log(this.$root)
      e.preventDefault()
      this.$root.username = this.username
      this.$router.replace('/')
      return false
    }
  }
}
</script>

<style>
.loginForm p{
  padding: 5px 0;
}
.loginForm label{
  width: 80px;
  display: inline-block;
}
</style>