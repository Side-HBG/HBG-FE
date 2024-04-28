
<template>
  <h1>이것은 메인페이지 입니다</h1>
  <h2>아까는 안됐는데 지금은 되는 이유가 뭐냐고요</h2>
  <h3>지대얼탱없는</h3>

  <div id="app">
    <button id="btnClick" name="btnClick" @click="call911()" >왜call안하냐고요</button>

    <p>{{ data }}</p>
    <p>{{id}}</p>
  </div>
</template>

<script>
  import axios from "axios";
  const URL="http://192.168.50.199:8081/price?item_id=1147560";
  //const URL="https://jsonplaceholder.typicode.com/todos/";
  export default{
    name:"App",
    data(){
      return{
        data: [],
        id: 1,
      };
    },
    methods:{
      call911(){
        axios.get(URL,{
          header:{
            "Content-Type": "multipart/form-data",
          }})
        //axios.get(URL + this.id)
          .then((result) => {
            // alert(result.data);
            const test = JSON.stringify(result.data);
            alert(test);
            this.data.push(result.data);
            // alert(JSON.parse(response.data));
            this.id++; // 나이스
          })
          .catch(function(error){
            alert(error);
          })
          .finally(() => {
            // console.log("Finally");
          });
      },
    },
  };
   /* axios.get('http://192.168.50.199:8081/price?item_id=1147560',{
      header:{
        "Content-Type": `application/json:charset=UTF-8`,
        "Accept": "application/json",
        "Access-Control-Allow-Origin":"http://10.10.10.1:443",
        "Access-Control-Allow-Credential":"true",
      }
    })*/




</script>


<style>

</style>