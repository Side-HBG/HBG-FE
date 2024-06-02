<template>
  <header>
    <nav class="navbar">
      <div class="navbar__logo">
        <i class="fas fa-dog"></i>
        <a href="">HBG</a>
      </div>

      <ul ref="navMenu" class ="navbar__menu">
        <li><router-link class="menu" to="/Main">Main</router-link></li>
        <li><router-link class="menu" to="/login">Login</router-link></li>
        <li><a href="https://github.com/Side-HBG" target="_blank">Github</a></li>
        <li><a href="">Velog</a></li>
        <li><a href="">Youtube</a></li>

      </ul>

      <ul ref="navIcons" class="navbar__icons">
        <li><i class="far fa-building"></i>OH</li>
        <li><i class="fas fa-home"></i>Home</li>
      </ul>
      <a class="navbar__toggleBtn" > <!-- #1 -->
        <i class="fas fa-hamburger" @click="greet" >12</i>
      </a>
    </nav>

  </header>
</template>


<script>
//const toggleBtn = document.querySelector('.navbar__toggleBtn');
export default{
  data(){
    return{
      isActive: false
    }
  },
  methods:{
    greet(event){
      const menu = this.$refs.navMenu;
      const icons = this.$refs.navIcons;

      if(event){
        menu.isActive = !this.isActive;
        icons.isActive = !this.isActive;
        //안되잖아 젠장~~~~~~~~~~~~~~~~~~~~~~~~~~~~!
        //CSS 몰라 안해
      }
    }
  }
};


</script>

<style>
header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;

}

.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 16px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

body {
  margin: 0; /* #2 */
}
a{
  text-decoration: none; /* #3 */
  color: white /* #3 */
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: lightblue; /* #1 */
  padding: 8px 12px; /* #4 */
}
.navbar__logo{ /* #1 */
  font-size: 24px;
  color: white;
}

.navbar__logo i { /* #1 */
  color: #9dbbbb
}

.navbar__menu {
  display: flex; /* #2 */
  list-style: none; /* #3 */
  padding-left: 0;
}

.navbar__menu li {
  padding: 8px 12px; /* #4 */
}

.navbar__icons { /* #1 */
  list-style:none;
  color:white;
  display: flex;
  padding-left: 0;  /* #2   */
}

.navbar__icons li {
  padding: 8px 12px;
}
.navbar__menu li:hover {
  background-color: rgb(50, 80, 100); /* #1 */
  border-radius: 4px; /* #2 */
}
.navbar__toggleBtn {
  display: none; /* #1 */
  position: absolute;
  right: 32px;
  font-size: 24px;
  color: rgb(50, 80, 100);
}

@media screen and (max-width: 768px) {
  .navbar{
    flex-direction: column;  /* #1 */
    align-items: flex-start; /* #2 */
    padding: 8px 24px; /* #6 */
  }
  .navbar__menu {
    flex-direction: column; /* #2 */
    align-items:center; /* #2 */
    width: 100%; /* #3 */
  }
  .navbar__menu li { /* #5 */
    width: 100%;
    text-align : center;
  }
  .navbar__icons {
    justify-content: center; /* #1 */
    width: 100%; /* #1 */
    display: flex;  /* #1 */
  }
  .navbar__toggleBtn {
    display: block; /* #2 */
  }
  /*

  .navbar__menu:active{
    display: flex;
  }
  .navbar__icons:active {
    display: flex;
  }
  */


}
</style>