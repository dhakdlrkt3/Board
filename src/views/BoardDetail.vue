<template>
    <div>
        <Header :title="title"></Header>
        <button @click="goToBoard">돌아가기</button>
        <table>
            <tbody> 
                <tr>
                    <td colspan="2">{{data.tag }}</td>
                    <td colspan="4">{{ data.title }}</td>
                </tr>

                <tr>
                    <td colspan="2">글쓴이 : {{ data.writer }}</td>
                    <td colspan="2">날짜 : {{ data.date }}</td>
                    <td colspan="2">조회수 : {{ data.hit }}</td>
                </tr>
                <tr>
                    <td colspan="6">{{ data.contents }}</td>
                </tr>
            </tbody>
        </table>
        <button @click="goToWriting">수정</button>
        <button @click="goToDelete">삭제</button>
    </div>
</template>
<script>
import  Header from "../components/Header";
import Data from '@/data';

export default {
    name: 'BoardDetailView',
    components:{
        Header,
    },
    data(){
        return{
            title: '상세 게시판',
            data: null,
            Content: Data,
        }
    },
    methods:{
        goToBoard(){
             this.$router.push({name: 'Board'});
        },
        goToWriting(){
             this.$router.push({name: 'Writing', params: this.data});
        },
        goToDelete(){
             this.data = this.$route.params
             console.log(this.$route);
        }
    },
    created(){
        if(this.$route.params.id == undefined){
            this.data = this.Content.find(item => item.id == this.$route.params.ContentsId);
        }
        else{
            this.data = this.$route.params;
        }
    }
}
</script>x