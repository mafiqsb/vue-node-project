<template>
<div class="box">
<div class="register">
        <img class="logo" src="../assets/logo-stb.png"/>

    <h1>Sign Up</h1>

    <div class="type">
    <input type="text" v-model="name" placeholder="Enter Name" />
    <input type="email" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button v-on:click="signUp">Sign Up</button>
    </div>
</div>
    
</div>

</template>

<script>

import axios from 'axios'
export default {
name: 'SignUp',
data() {
    return {
        name: '',
        email: '',
        password: '',
    }
},

methods: {
   async signUp()
    {
        let result = await axios.post("http://localhost:3000/users", {
            email : this.email,
            password : this.password,
            name : this.name
        });

     console.warn(result);
     if (result.status==201)
     {
        //  alert("sign up done");
         localStorage.setItem("user-info", JSON.stringify(result.data))
         this.$router.push({name:'Home'})
     }
    }
}
}
</script>

<style>
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

.register {
    margin-left: auto;
    margin-right: auto;
}

.register input {
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

.register button {
    width: 320px;
    height: 40px;
    border: 1px solid orange;
    background-color: orange;
    color: white;
    cursor: pointer;
    font-size: 20px;
}

</style>