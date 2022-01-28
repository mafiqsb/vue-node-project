<template>
   <div class="box" v-cloak>
<div class="Login">
        <img class="logo" src="../assets/logo-stb.png"/>

    <h1>Login</h1>

    <div class="type">
    <input type="email" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button>Login</button>
    <p>
        <router-link to="/signup">Sign Up now!</router-link>
    </p>
    </div>
</div>
    
</div>

</template>

<script>
export default {
    name: "Login"
}
</script>