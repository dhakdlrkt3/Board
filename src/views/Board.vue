<template>
  <div id="app">
    <header>
      <h1>게시판</h1>
    </header>
    <div>
      <Button>
        <img class="writing-button" src="../assets/edit.png" alt="">
      </Button>
    </div>
    <div>
      <BoardList/>
    </div>

  </div>
</template>

<script>
import  BoardList from "../components/BoardList";
export default {
  components:{
    BoardList,
  },

}
</script>
<style>

  #app {
    text-align: center;
  }
  .writing-button {
    width: auto; height: auto;
    max-width: 35px;
    max-height: 35px;
    margin: 4px 2px;
    cursor: pointer;
  }
  .BoardContents{
    text-align: center;
  }
</style>