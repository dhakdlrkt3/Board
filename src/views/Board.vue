<template>
  <div id="app">
    <Header :title="title"/>
    <Button/>
    <BoardList/>
    <PageCountBtn 
      :btnLength="btnLength"
      :pageSize="pageSize"
      />
  </div>
</template>

<script>
import  Header from "../components/Header";
import  BoardList from "../components/BoardList";
import PageCountBtn from "../components/PageCountBtn"
import Button from "../components/Button"
import Data from '@/data'

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
      pageSize: 10,
      dataLeng: Data
    }
  },
  computed:{
    btnLength(){
        let Length = Math.floor( ( this.dataLeng.length -1) / this.pageSize ) + 1; // math.floor = 가장 큰 값을 반환
        return Length;
    },
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
</style>