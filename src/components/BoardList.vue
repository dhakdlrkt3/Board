<template>
  <table>
    <tr>
      <th>번호</th>
      <th>태그</th>
      <th>제목</th>
      <th>날짜</th>
      <th>글쓴이</th>
      <th>조회수</th>
    </tr>
    <tr v-for="content in startList()" :key="content.id" >
        <td>{{ content.id }}</td>
        <td>{{ content.tag }}</td>
        <td><a href="url">{{ content.title }}</a></td>
        <td>{{ content.date }}</td>
        <td>{{ content.writer }}</td>
        <td>{{ content.hit }}</td>
    </tr>
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
      // this.Contents.sort(function(a,b){
      //   return b['id'] - a['id'] ;
      // });

      let contents = this.Contents.sort(function(a,b){
        return b['id'] - a['id'] ;
      }).slice(this.startNum);
      
      if (contents.length  >= 10 ) contents.length = 10;
      let content =[];

      let i = Number;
      for( i = 0; i < contents.length; i++){
        content[i] =  contents[i];
      }
      return content;
    }
  },
  created(){
    eventBus.$on('movePage', (startNum) => {
      this.startNum = startNum;
    })
  },

}
</script>

<style scoped>

</style>
