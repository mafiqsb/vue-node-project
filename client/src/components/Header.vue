<template>

    <div class="topnav">
        <a href="/home">Home</a>
        <a href="#">Blog</a>
        <a href="/about">About</a>
    </div>
   
</template>

<script>
export default {
     name: 'Header'
}
</script>

<style>

body {
font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.topnav {
  overflow: hidden;
  background-color: #333;
  z-index: 3;
  position: relative;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

</style>