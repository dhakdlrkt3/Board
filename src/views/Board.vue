<template>
  <div id="app">
    <Header :title="title"/>
    <Button/>
    <BoardList/>
    <PageCountBtn/>
  </div>
</template>

<script>
import  Header from "../components/Header";
import  BoardList from "../components/BoardList";
import PageCountBtn from "../components/PageCountBtn"
import Button from "../components/Button"
export default {
  components:{
    Header,
    Button,
    BoardList,
    PageCountBtn
  },
  data(){
    return {
      title: '게시판',
    }
  }

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