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
export default {
  components:{
    // Content,
  },
  variables:{
    url:'',
  },
  data(){
    return{
      Contents :[
        { id: 32124, tag: '사회', title: '코로나 바이러스 확진자 추이', contents: '미국 :\n 한국 : ', date:'2020-06-26(금) 07:30', writer: '아무개', hit: 42},
        { id: 32123, tag: '유머', title: '장마철 습기제거 꿀팁', contents: '내용1', date:'2020-06-23(화) 17:52', writer: '김요환', hit: 101},
        { id: 32122, tag: '엽기', title: '아침 물 한 잔이 우리 몸에 미치는 영향', contents: '내용2', date:'2020-06-22(월) 22:59', writer: '이효리', hit: 20},
        { id: 32121, tag: '공지', title: '악성댓글 및 비방댓글 안내', contents: '내용3', date:'2020-06-21(일) 17:37', writer: '후츠', hit: 33},
        { id: 32120, tag: '연예인', title: '강혜원 미모.gif', contents: '내용4', date:'2020-06-20(토) 20:20', writer: 'poorboy', hit: 69},
        { id: 32119, tag: '감동', title: '마스크가 없는 할머니를 위해', contents: '내용5', date:'2020-06-19(금) 00:30', writer: '밥통', hit: 99},
        { id: 32118, tag: '동물', title: '보더콜리의 지능 수준', contents: '내용6', date:'2020-06-18(목) 08:36', writer: '최대10자', hit: 205},
        { id: 32117, tag: '기타', title: '택시 아저씨 스웩', contents: '내용7', date:'2020-06-17(수) 23:14', writer: '소공녀미소', hit: 377},
        { id: 32116, tag: '사회', title: '인국공 사태를 바라보는 청년', contents: '내용8', date:'2020-06-16(화) 04:29', writer: 'prisen', hit: 52},
        { id: 32115, tag: '연예인', title: '트와이스 다현 웃음 모음', contents: '내용9', date:'2020-06-15(월) 19:44', writer: 'HelloWorld', hit: 67},
        { id: 32114, tag: '감동', title: '남편 장난의 최후', contents: '내용 10', date:'2020-06-14(일) 15:49', writer: '사나미나', hit: 89},
        { id: 32113, tag: '기타', title: '멕시코와 한국의 차이', contents: '내용 11', date:'2020-06-13(토) 21:27', writer: '샌프란시스코', hit: 73},
        { id: 32112, tag: '유머', title: '키위국 근황', contents: '내용 12', date:'2020-06-12(금) 05:23', writer: '스파레시피', hit: 65},
        { id: 32111, tag: '공지', title: '블래리스트 처벌 안내', contents: '내용 13', date:'2020-06-11(목) 15:58', writer: 'loopy', hit: 72},
        { id: 32110, tag: '공지', title: '게시판 주의사항', contents: '내용 14', date:'2020-06-10(수) 12:23', writer: '포이에마', hit: 84},
      ]
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
