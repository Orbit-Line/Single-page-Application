<template>
 <div id="app">
  <header>
            <nav>
                <a> <router-link to="/">Nosotros</router-link></a>
                <a><router-link to="../servicios">Servicios</router-link></a> 
                <a><router-link to="../galería">Galería</router-link></a> 
                <a> <router-link to="../contacto">Contacto</router-link></a>
             </nav>  
              <router-view/>
      </header>
 </div>
</template>
<style scoped lang="stylus">

/*---Header----*/
header {
  width: 100%;
  height: 400px;
 position: relative; 
  z-index:2 
}

nav {
   position:absolute;
    z-index 3
    top 50px
    right 0px
    padding: 0px 30px
}
 a{
   text-align rigt 
   color: #642a73; 
   font-weight: 500;
    text-decoration: none;
    margin-right: 30px;
}
nav a:hover{
  text-decoration: underline;
} 

@media screen and (max-width:500px){
    nav{
       text-align: center;
    }
     a {
       margin-right: 3px;
        font-weight: 500;
   }
}
  
</style>