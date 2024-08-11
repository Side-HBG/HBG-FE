
<template >
  <body>
  <h1 >게임 상세보기</h1>

  <div id="app">
    <p>게임명</p>
    <p>정가</p>
    <p>할인율</p>
    <p>판매가격</p>

    <button id="btnBuy" name="btnBuy" >구매하기?</button>
  </div>
  </body>
</template>

<script>
import axios from "axios";
let URL = process.env.VUE_APP_API_URL;

/**
 * {"result":true,"statusCode":200,"responseMessage":"OK","data":{"name":"Neurotypical","initial":"₩ 21,500","discount_percent":"0","price":"₩ 21,500"}}
 * */

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
  padding-top: 30px;
}
</style>