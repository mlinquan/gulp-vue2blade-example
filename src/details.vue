<template>
<div id="photoDetails">
<h2>Details #{{ this.$root.pageId }}</h2>
<p>
<router-link v-if="this.$root.pageId > 1" :to="['/details/', this.$root.pageId - 1].join('')">Prev Photo</router-link>
<span v-else>Prev Photo</span>
<router-link to="/list">Back to list</router-link>
<router-link v-if="this.$root.pageId < 9" :to="['/details/', this.$root.pageId + 1].join('')">Next Photo</router-link>
<span v-else>Next Photo</span>
</p>
<img :src="['/static/', this.$root.pageId, '.jpg'].join('')">
</div>
</template>

<script>
export default {
  name: 'details'
}
</script>

<style>
#photoDetails p{
  font-size: 18px;
  margin-bottom: 15px;
}
#photoDetails a, #photoDetails span{
  margin: 0 15px;
}
</style>