<template>
    <div class="footer-container">
        <div class="footer">{{text}}</div>
    </div>
</template>

<script>
export default {
    name: 'Footer',

    data () {
        return {
            text : "Powered by Afiq Sam 2022"
        }
    }
}
</script>

<style>

.footer-container {
   
    background: #2c3e50;
     bottom: 0;
  position: fixed;
  z-index: 3;
  border: none;
  width: 100%;
}
.footer{
    
    color: white;
    font-weight: bold;
    text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
}
</style>