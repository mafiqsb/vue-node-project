<template>
<div>
    <Header></Header>
    <body v-cloak>
        <div class="container">
            <div class="profile-box">
                <div class="img-box">
                    <img src="../assets/profile.jpg" alt="profile image">
                </div>
                <div class="profile-desc">
                    <h1>I'm Afiq Sam</h1>
                    <p>Fullstack Programmer</p>
                </div>
            </div>
            <div class="content-box">
                <div class="content-desc">
                    <h1>Fullstack Programmer, Wedding Photographer, Gibson Les Paul user</h1>
                <p>Sollicitudin ac orci phasellus egestas tellus rutrum. Venenatis cras 
                    felis eget. Amet risus nullam eget felis eget nunc. 
                    Lacus vestibulum sed arcu non odio euismod. Consectetur adipiscing elit duis tristique.
                    Pharetra magna ac placerat vestibulum lectus mauris ultrices.
                    Sollicitudin ac orci phasellus egestas tellus rutrum. Venenatis cras 
                    felis eget. Amet risus nullam eget felis eget nunc. 
                    Lacus vestibulum sed arcu non odio euismod. Consectetur adipiscing elit duis tristique.
                    Pharetra magna ac placerat vestibulum lectus mauris ultrices.
                    Sollicitudin ac orci phasellus egestas tellus rutrum. Venenatis cras 
                    felis eget. Amet risus nullam eget felis eget nunc. 
                    Lacus vestibulum sed arcu non odio euismod. Consectetur adipiscing elit duis tristique.
                    Pharetra magna ac placerat vestibulum lectus mauris ultrices.
                    Sollicitudin ac orci phasellus egestas tellus rutrum. Venenatis cras 
                    felis eget. Amet risus nullam eget felis eget nunc. 
                    Lacus vestibulum sed arcu non odio euismod. Consectetur adipiscing elit duis tristique.
                    Pharetra magna ac placerat vestibulum lectus mauris ultrices.
                    Sollicitudin ac orci phasellus egestas tellus rutrum. Venenatis cras 
                    felis eget. Amet risus nullam eget felis eget nunc. 
                    Lacus vestibulum sed arcu non odio euismod.</p>
                <div class="socmed">
                    <a href="#" class="fab fa-facebook"></a>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-instagram"></a>
                </div>
                <div class="read-more">
                    <router-link to="/" class="rm-text">Read More</router-link>
                </div>
                </div>
                
            </div>
        </div>
        
    </body>
     <Footer/>
</div>
   
</template>

<script>
import Header from './Header'
import Footer from './Footer'
export default {
    name: 'about',
    components: {
        Header,
        Footer
    }
}
</script>

<style>

body {
    margin: 0;
    padding: 0;
    height: 80.7vh;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: block;
}
.container {
    display: flex;
    justify-content: center;
    height: 95vh;
    
}

.profile-box {
    width: 50%;
}

.profile-desc {
    text-align: center;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    font-size: 30px;

}

.profile-desc p {

    margin-top: -35px;
    font-size: 25px;

}

.content-box {
    width: 50%;
    background-color: orange;
    
}

.content-desc {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 9rem;

}

.content-desc p {

    margin-top: 50px;
    color: white;
}

.img-box {
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    padding-top: 15%;
    text-align: center;
}
img {
    width: 300px;
    border-radius: 50%;
    text-align: center;
    
}

.read-more {
    background-color: white;
    width: 20%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    padding: 10px;
    border-radius: 2%;
}


.rm-text {
    text-decoration: none;
    font-weight: bolder;
    color: #000;
}

@media (max-width: 960px) {
    .container {
        height: 97vh;
    }
    .img-box {
        width: 100%;
    }

    .read-more {
        width: 30%
    }
}

</style>