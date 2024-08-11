<template>
  <div>
    <div>


      <h2>Sign Up</h2>
      <div id="loginForm">
        <form @submit.prevent="fnSignUp">
          <p>
            <input class="w3-input" name="uid" placeholder="Enter your ID" v-model="user_id"><br>
          </p>
          <p>
            <input name="password" class="w3-input" placeholder="Enter your password" v-model="user_pw" type="password">
          </p>
          <p>
            <button type="submit" class="w3-button w3-green w3-round" @click="fnLogin">로그인</button>
            <button type="submit" class="w3-button w3-green w3-round" @click="fnJoin">회원가입</button>
          </p>
        </form>
      </div>
    </div>
  </div>

  <a href="/main" > 이동</a>
</template>

<script>

export default {
  data() {
    return {
      user_id: '',
      user_pw: ''
    }
  },
  methods: {
    fnSignUp(){
      //this.$router.push("/join").catch(() => {});
      alert("회원가입되었습니다. ")
      this.$router.push("/").catch(() => {});
    }
  }
}
</script>

<style>
#loginForm {
  width: 500px;
  margin: auto;
}
@import url("../../css/styles.css");
</style>