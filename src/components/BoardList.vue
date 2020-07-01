<template>
  <table>
    <thead>
      <tr>
        <th>번호</th>
        <th>태그</th>
        <th>제목</th>
        <th>날짜</th>
        <th>글쓴이</th>
        <th>조회수</th>
      </tr>
    </thead>
    <tbody> 
      <tr v-for="content in startList()" :key="content.id" >
          <td>{{ content.id }}</td>
          <td>{{ content.tag }}</td>
          <td><router-link :to="{
            name: 'board-detail',
            params: content
          }"> {{ content.title }} </router-link></td>
          <td>{{ content.date }}</td>
          <td>{{ content.writer }}</td>
          <td>{{ content.hit }}</td>
      </tr>
    </tbody>
</table>
</template>

<script>
import Data from '@/data'
import { eventBus } from "../main"

export default {
  name: 'BoardListView',
  components:{
  },
  variables:{
    url:'',
  },
  
  data(){
    return{
      Contents : Data,
      startNum: 0,
      pageSize: 10,
    }
  },
  methods:{
    startList(){
      return this.Contents.slice(this.startNum, this.startNum + this.pageSize);
    },
    detailView(){
      return 'naver.com'
    }
  },
  created(){
    eventBus.$on('movePage', (startNum) => {
      this.startNum = startNum;
    })
    this.Contents.sort(function(a,b){
        return b['id'] - a['id'] ;
    });
  },

}
</script>

<style scoped>

</style>
