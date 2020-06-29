<template>
    <div>
        <button @click="prevPage">&#60;</button>
        <button  v-for="i in btnControl" :key="i" @click="movePage(i)"> {{ i+1 }}</button>
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
            startRange: 0,
            endRange: 5,
            bntSize: 5,
        }
    },
    methods: {
        prevPage(){
            this.startRange = this.startRange - this.bntSize
            this.endRange = this.endRange - this.bntSize
        },
        movePage(num){
            const startNum = num * this.pageSize;
            eventBus.$emit("movePage", startNum);
        },
        nextPage(){
            this.startRange = this.startRange + this.bntSize
            this.endRange = this.endRange + this.bntSize
        },
    },
    computed:{
        btnControl(){
            let i;
            let btnRange = [];
            for(i = this.startRange; i < this.btnLength; i++){
                btnRange.push(i);
            }
            if(this.startRange !== 0){
                return btnRange
            }
            return btnRange.slice(this.startRange, this.endRange);
        },
        btnControl_(){
            let dada = Math.floor(  this.btnLength / 5 ) + 1;
            return dada
        }
    }
}
</script>