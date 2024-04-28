
<template>
  <h1>이것은 메인페이지 입니다</h1>

  <div id="app">
    <button id="btnClick" name="btnClick" @click="call911()" >왜call안하냐고요</button>

    <p>{{data}}</p>
  </div>
</template>

<script>
import axios from "axios";


    axios.get('http://192.168.50.199:8081/price?item_id=1147560',{
      header:{
        "Content-Type": `application/json:charset=UTF-8`,
        "Accept": "application/json",
        "Access-Control-Allow-Origin":"http://10.10.10.1:443",
        "Access-Control-Allow-Credential":"true",
      }
    })
    // axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(function(response) {
          alert(response.data);
        })
        .catch(function(error){
          alert(error);
        })
        .finally(() => {
          // console.log("Finally");
        });


</script>


<style>

</style>