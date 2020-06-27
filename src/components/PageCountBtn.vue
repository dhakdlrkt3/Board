<template>
    <div>
        나와라
        {{ pageCount }}
    </div>
</template>
<script>

import Data from '@/data'
export default {
    name: 'PageCountBtn',
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

        }
    },
    computed:{
        pageCount(){
            let pageCtn = Math.floor( ( this.dataLeng.length -1) / this.pageSize ) + 1;
            console.log(pageCtn);
            return pageCtn;
        },
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