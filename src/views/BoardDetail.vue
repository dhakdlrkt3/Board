<template>
    <div>
        <Header :title="title"></Header>
        <button @click="goToBoard">돌아가기</button>
            
        <table>
            <tbody> 
                <tr>
                    <td colspan="2">{{ $route.params.tag }}</td>
                    <td colspan="4">{{ $route.params.title }}</td>
                </tr>

                <tr>
                    <td colspan="2">글쓴이 : {{ $route.params.writer }}</td>
                    <td colspan="2">날짜 : {{ $route.params.date }}</td>
                    <td colspan="2">조회수 : {{ $route.params.hit }}</td>
                </tr>
                <tr>
                    <td colspan="6">{{ $route.params.contents }}</td>
                </tr>
            </tbody>
        </table>
        <button @click="updateCtn">수정</button>
        <button @click="deleteCtn">삭제</button>
            

    </div>
</template>
<script>
import  Header from "../components/Header";

export default {
    name: 'BoardDetailView',
    components:{
        Header,
    },
    data(){
        return{
            title: '상세 게시판',

        }
    },
    methods:{
        goToBoard(){
             this.data = this.$route.params
             console.log(this.$route);
        },
        updateCtn(){
             this.data = this.$route.params
             console.log(this.$route);
        },
        deleteCtn(){
             this.data = this.$route.params
             console.log(this.$route);
        }
    }
}
</script>x