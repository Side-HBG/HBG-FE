
<template >
  <body>
    <h1 >게임 가격 조회</h1>

    <div id="app">
      <input type="text" v-model="txtSearchGameName" @keyup.enter="searchGame()" placeholder="게임 검색하기">
      <button id="btnClick" name="btnClick" @click="searchGame()" >검색</button>


      <p>{{gameName}}</p>
      <p>{{gamePrice}}</p>
      <p>{{gameDisCountPercent}}</p>
      <p>{{gameTotalPrice}}</p>
    </div>
  </body>
</template>

<script>
  import axios from "axios";
  // const URL="http://192.168.50.199:8081/price?item_id=1147560";
  //let URL = "http://10.10.10.2:81/api/v1/steam/price?item_id="; //Neurotypical
   let URL = "http://192.168.50.199:8081/api/v1/steam/price?item_id=";
  //const URL="https://jsonplaceholder.typicode.com/todos/";

  /*{"result":true,"statusCode":200,"responseMessage":"OK","data":{"name":"Neurotypical","initial":"₩ 21,500","discount_percent":"0","price":"₩ 21,500"}}
  *
  *  */

  export default{
    name:"App",
    data(){
      return{
        gameName: "name",
        gamePrice: 0,
        gameDisCountPercent: 0,
        gameTotalPrice: 0,
      };
    },
    methods:{
      searchGame(){
        let sendUrl = URL + this.txtSearchGameName;
        //URL += this.txtSearchGameName;
        axios.get(sendUrl)
          .then((result) => {
            const game = result.data.data;

            if(result.data.result === true && result.data.statusCode === 200){
              this.gameName = game.name;
              this.gamePrice = game.initial;
              this.gameDisCountPercent = game.discount_percent + "%";
              this.gameTotalPrice = game.price;

            }
            if(result.data.statusCode === 500){
              this.gameName = "검색된 게임이 존재하지 않습니다.";
              this.gamePrice = null;
              this.gameDisCountPercent = null;
              this.gameTotalPrice = null;
             // this.$router.push("/500").catch(() => {});
            }
          })
          .catch(function(error){
            alert("error: " + error);
          })
          .finally(() => {
          });
      },
    },
  };





</script>


<style>
body{
  padding-top: 10px;
}
</style>