<template>
<body>
    <div class="home-title">
        <h1 class="title">{{Home}}</h1>
        <div class="search">
            <input type="text" placeholder="Searching for...">
            <button>Search</button>
        </div>
            <a href="#" class="fab fa-facebook"></a>
            <a href="#" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-instagram"></a>
        <div>

        </div>
    </div>
    
</body>
</template>
<script>

export default {
    data(){
    return {
        name: "Home",
        Home: "Welcome to the Home Pages",
    }

}
    
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Merienda&display=swap');


body {
    margin: 0;
    padding: 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: url(../assets/b.jpg) no-repeat center center/cover;
  height: 80.7vh;
 
}

body::after {
    content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	background: rgba(0, 0, 0, 0.2);
	box-shadow: inset 50px 10px 250px #000000, inset -50px -10px 250px #000000;
}
.home-title {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    z-index: 2;
    position: relative;
}

.title {
    padding-top: 13rem;
    color: white;
    font-size: 3rem;
    font-weight: bolder;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.search {
    display: flex;
    height: 30px;
    justify-content: center;
    text-align: center;
    font-weight: bolder;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

    
}
.search input {
    width: 300px;
    display: block;
    text-align: center;
    border: none;
}

.search button {
    width: 100px;
    border: 1px solid orange;
    background-color: orange;
    color: white;
    cursor: pointer;
    font-size: 15px;
    text-align: center;
    border: none;
    font-weight: 700;
    
}

.search button:hover {
    background-color: rgb(255, 94, 0);
    color: black;
}
@media (max-width: 960px) {
    body {
       height: 96.55vh; 
    }
.home-title {
    width: 50%;
}
}
</style>
