<template>
  <div>
    <h2>Please Log In</h2>
    <div id="loginForm">
      <form @submit.prevent="fnLogin">
        <p>
          <input type="text" name="txtUserId" placeholder="Enter your ID" v-model="user_id"><br>
        </p>
        <p>
          <input type="password" name="txtPassword" placeholder="Enter your password" v-model="user_pw">
        </p>
        <p>
          <button @click="fnLogin">로그인</button>
          <button @click="fnSignUp">회원가입</button>
        </p>
      </form>
    </div>
  </div>

  <a href="/main" > 일단메인이동</a>
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
    fnLogin() {
      if (this.user_id === '') {
        alert("ID를 입력하세요.");
        return false;
      }

      if (this.user_pw === '') {
        alert("비밀번호를 입력하세요.");
        return false;
      }

      /*
      여기서 로그인 메소드 구현
       */

      alert("로그인 되었습니다.");
      this.$router.push("/main").catch(()=>{});
    } //fnLogin
    ,
    fnSignUp(){
      this.$router.push("/signUp").catch(() => {});
    }
  }
}
</script>

<style>

</style>