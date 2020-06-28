<template>
    <div>
        <button @click="prevPage">&#60;</button>
        <button  v-for="i in btnLength" :key="i" @click="movePage(i-1)">
            {{ i }}
        </button>
        <button @click="nextPage">></button>
    </div>
</template>
<script>


import { eventBus } from "../main"


export default {
    name: 'PageCountBtn',
    props:{
        btnLength: {
            type: Number,
            required: true
        },
        pageSize: {
            type: Number,
            required: true
        }
    },
    data(){
        return{
            pageNum: 0,
        }
    },
    methods: {
        prevPage(){

        },
        nextPage(){

        },
        movePage(num){
            const startNum = num * this.pageSize;
            eventBus.$emit("movePage", startNum);
        }
    },
}
</script>