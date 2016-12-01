<template>
<div id="photoList">
<h2>Photo List</h2>
<ul class="lst_photo">
<li v-for="(photo, index) in photoList"><router-link :to="['/details/', index + 1].join('')"><img :src="['/static/', index + 1, '.jpg'].join('')"></router-link></li>
</ul>
</div>
</template>

<script>
export default {
  name: 'photo_list',
  data: function () {
    return {
      photoList: new Array(9)
    }
  }
}
</script>

<style>
#photoList{
  text-align: center;
}
.lst_photo{
  width: 620px;
  margin: 0 auto;
}
.lst_photo li{
  width: 200px;
  height: 300px;
  display: inline-block;
}
.lst_photo li img{
  width: 200px;
}
</style>
