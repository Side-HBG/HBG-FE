<template>
<!--  <header>
    <nav class="navbar">
      <div class="navbar__logo">
        <i class="fas fa-dog"></i>
        <a href="">HBG</a>
      </div>

      <ul ref="navMenu" class ="navbar__menu">
        <li><router-link class="menu" to="/main">Main</router-link></li>
        <li><router-link class="menu" to="/login">Login</router-link></li>
        <li><a href="https://github.com/Side-HBG" target="_blank">Github</a></li>
        <li><a href="">Velog</a></li>
        <li><a href="">Youtube</a></li>

      </ul>

      <ul ref="navIcons" class="navbar__icons">
        <li><i class="far fa-building"></i>OH</li>
        <li><i class="fas fa-home"></i>Home</li>
      </ul>
      <a class="navbar__toggleBtn" > &lt;!&ndash; #1 &ndash;&gt;
        <i class="fas fa-hamburger" @click="greet" >12</i>
      </a>
    </nav>

  </header>-->

  <!-- Navigation-->
  <nav class="navbar navbar-light bg-light static-top">
    <div class="container">
      <a class="navbar-brand" href="#!">Start Bootstrap</a>
      <a class="btn btn-primary" href="#signup">Sign Up</a>
    </div>
  </nav>
  헤더시작
  <header class="masthead">
    <div class="container position-relative">
      <div class="row justify-content-center">
        <div class="col-xl-6">
          <div class="text-center text-white">
            <!-- Page heading-->
            <h1 class="mb-5">Generate more leads with a professional landing page!</h1>
            <!-- Signup form-->
            <!-- * * * * * * * * * * * * * * *-->
            <!-- * * SB Forms Contact Form * *-->
            <!-- * * * * * * * * * * * * * * *-->
            <!-- This form is pre-integrated with SB Forms.-->
            <!-- To make this form functional, sign up at-->
            <!-- https://startbootstrap.com/solution/contact-forms-->
            <!-- to get an API token!-->
            <form class="form-subscribe" id="contactForm" data-sb-form-api-token="API_TOKEN">
              <!-- Email address input-->
              <div class="row">
                <div class="col">
                  <input class="form-control form-control-lg" id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required,email" />
                  <div class="invalid-feedback text-white" data-sb-feedback="emailAddress:required">Email Address is required.</div>
                  <div class="invalid-feedback text-white" data-sb-feedback="emailAddress:email">Email Address Email is not valid.</div>
                </div>
                <div class="col-auto"><button class="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button></div>
              </div>
              <!-- Submit success message-->
              <!---->
              <!-- This is what your users will see when the form-->
              <!-- has successfully submitted-->
              <div class="d-none" id="submitSuccessMessage">
                <div class="text-center mb-3">
                  <div class="fw-bolder">Form submission successful!</div>
                  <p>To activate this form, sign up at</p>
                  <a class="text-white" href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                </div>
              </div>
              <!-- Submit error message-->
              <!---->
              <!-- This is what your users will see when there is-->
              <!-- an error submitting the form-->
              <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </header>
  헤더끝
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
  @import url("../../css/styles.css");

}
</style>