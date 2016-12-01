<template>
  <div id="app">
    <headerVue></headerVue>
    <ul class="nav">
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/list">Photo List</router-link></li>
    </ul>
    <router-view></router-view>
    <footerVue></footerVue>
  </div>
</template>

<script>
import headerVue from './include/header'
import footerVue from './include/footer'

export default {
  name: 'app',
  components: {
    headerVue,
    footerVue
  }
}
</script>

<style>
@charset "utf-8";
/* Your Name 20131030 */

/* Reset */
html,body{width:100%;height:100%}
html{overflow-x:hidden}
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,form,fieldset,p,button,input,table,tr,td,th,tbody,thead{margin:0;padding:0}
body,h1,h2,h3,h4,input,button{font-family:'微软雅黑','Microsoft YaHei',Arial,Helvetica,sans-serif;font-size:12px;color:#666}
body{background-color:#fff;text-align:center;*word-break:break-all;-ms-word-break:break-all}
img,fieldset,iframe{border:0 none}
li{list-style:none}
input,select,button{vertical-align:top}
input::-ms-clear{display:none}
img{vertical-align:top}
i,em,address{font-style:normal}
button{cursor:pointer;vertical-align:top}
button{margin:0;padding:0}
a{color:#666;text-decoration:none}
a:hover{color:#fa6458;text-decoration:none}
button *{position:relative}
button img{left:-3px;*left:auto}
html:first-child select{height:20px;padding-right:6px}
option{padding-right:6px}
hr{display:none}
legend{*width:0}
table{border-collapse:collapse;border-spacing:0}

.blind{
    clip: rect(1px,1px,1px,1px);
    clip: rect(1px 1px 1px 1px);
    position: absolute;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 800px;
  margin: 0 auto;
}

a{
  color: #60afff;
  text-decoration: underline;
}

h1{
  font-size: 36px;
  line-height: 1.5;
  padding: 15px 0 14px;
}

h2{
  font-size: 24px;
  line-height: 1.5;
  padding: 15px 0 14px;
}

ul.nav{
  display: block;
  overflow: hidden;
  text-align: center;
}
ul.nav li{
  display: inline-block;
  width: 200px;
  text-align: center;
}
ul.nav li a{
  font-size: 18px;
}
#footer{
  font-size: 18px;
  padding: 15px 0;
}
</style>
