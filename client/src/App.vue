<template>
<div id="#app">
  <router-view/>
</div>
</template>

<script>

export default {

  name: 'App',

}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.box {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-top: 60px;
}

.register, .Login {
    margin-left: auto;
    margin-right: auto;
}

.register input, .Login input {
    width: 300px;
    height: 40px;
    display: block;
    margin-bottom: 30px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
}
.register .logo {
    width: 120px;
}

.type {
    align-items: center;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
}

.register button, .Login button {
    width: 320px;
    height: 40px;
    border: 1px solid orange;
    background-color: orange;
    color: white;
    cursor: pointer;
    font-size: 20px;
}

</style>
