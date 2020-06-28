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
    <!-- <tr v-for="i in pageSize" :key="i" >
        <td>{{ Contents[i].id }}</td>
        <td>{{ Contents[i].tag }}</td>
        <td><a href="url">{{ Contents[i].title }}</a></td>
        <td>{{ Contents[i].date }}</td>
        <td>{{ Contents[i].writer }}</td>
        <td>{{ Contents[i].hit }}</td>
        </tr> -->
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
  methods:{
    startList(){
      return this.Contents.slice(this.startNum);
    }
  },
  data(){
    return{
      Contents : Data,
      startNum: 0,
      pageSize: 10,
    }
  },
  created(){
    eventBus.$on('movePage', (startNum) => {
      console.log(startNum);
      this.startNum = startNum;
    })
  },

}
</script>

<style scoped>

</style>
