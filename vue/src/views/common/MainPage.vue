
<template >
  <body>
    <h1 >게임 가격 조회</h1>

    <div id="app">
      <input type="text" v-model="txtSearchGameName" @keyup.enter="searchGame()" placeholder="게임 검색하기">
      <button id="btnClick" name="btnClick" @click="searchGame()" >검색</button>

      <li v-for="game in gameList" v-bind:key="game.gameName">
        <p>게임명: {{game.name}}</p>
        <p>정가: {{game.initial}}</p>
        <p>할인율: {{game.discount_percent}} %</p>
        <p>판매가격: {{game.price}}</p>
      </li>
    </div>
  </body>
</template>

<script>
  import axios from "axios";
   // let URL = process.env.VUE_APP_API_URL+`api/v1/steam/pricev2?item_id=`;
   let URL = process.env.VUE_APP_API_URL;
  //const URL="https://jsonplaceholder.typicode.com/todos/";

  /*{"result":true,"statusCode":200,"responseMessage":"OK","data":{"name":"Neurotypical","initial":"₩ 21,500","discount_percent":"0","price":"₩ 21,500"}}
  *
  *  */

  export default{
    name:"App",
    data(){
      return{
        gameList:[
          /*{
            gameName: "name",
            gamePrice: 0,
            gameDisCountPercent: 0,
            gameTotalPrice: 0,
          }*/
        ]
      };
    },
    methods:{
      searchGame(){
        let sendUrl = URL + this.txtSearchGameName;
        //URL += this.txtSearchGameName;
        axios.get(sendUrl)
          .then((result) => {
            // alert(typeof result);
            // const game = result.data.data[0];

            // const game = result.data.data[0];

            //alert(JSON.stringify(result));
            // alert(JSON.stringify(result.data.data[0]));
            // alert(result);
            if(result.data.result === true && result.data.statusCode === 200){
              this.gameList = result.data.data;
              /*
              this.gameName = game.name;
              this.gamePrice = game.initial;
              this.gameDisCountPercent = game.discount_percent + "%";
              this.gameTotalPrice = game.price;*/

            }else if(result.data.statusCode === 500){
              // alert("500Error");
              /*this.gameName = "검색된 게임이 존재하지 않습니다.";
              this.gamePrice = null;
              this.gameDisCountPercent = null;
              this.gameTotalPrice = null;*/
              this.$router.push("/500").catch(() => {});
            }else{
              this.gameList = result.data.data;
              // this.gameName = JSON.stringify(game);
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