<template>
    <div>
        <button  v-for="i in btnLength" :key="i" @click="movePage(i-1)">
            {{ i }}
        </button>
    </div>
</template>
<script>
import { eventBus } from "../main"
import Data from '@/data'
export default {
    name: 'PageCountBtn',
    props:{
        btnLength: {
            type: Number,
            required: true
        }
    },
    data(){
        return{
            pageNum: 0,
            pageSize: 10,
            dataLeng: Data
        }
    },
    methods: {
        nextPage(){

        },
        prevPage(){

        },
        movePage(num){
            const startNum = num * this.pageSize;
            eventBus.$emit("movePage", startNum);
        }
    },
    computed:{
        // pageCount(){
        //     let pageCtn = Math.floor( ( this.dataLeng.length -1) / this.pageSize ) + 1;
        //     console.log(pageCtn);
        //     return pageCtn;
        // },
        //TODO: 페이지네이션 구현 완료하기
        // pageData(){
        //     const start = this.pageNum * this.pageSize,
        //             end = start + this.pageSize;

        // }
    }


}
</script>
<style lang="stylus" scoped>

</style>