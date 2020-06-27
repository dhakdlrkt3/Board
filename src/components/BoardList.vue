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
    <tr v-for="content in Contents" :key="content.id" >
        <td>{{ content.id }}</td>
        <td>{{ content.tag }}</td>
        <td><a href="url">{{ content.title }}</a></td>
        <td>{{ content.date }}</td>
        <td>{{ content.writer }}</td>
        <td>{{ content.hit }}</td>
     <!-- <Content :content="content"/> -->
    </tr>
</table>
</template>

<script>
// import Content from "./Content";
import Data from '@/data'

export default {
  name: 'BoardListView',
  components:{
    // Content,
  },
  variables:{
    url:'',
  },
  data(){
    return{
      Contents : Data,
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
