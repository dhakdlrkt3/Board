<template>
    <div>
        <span v-if="showPreBtn">
            <button :class="{bold : boldBtn(-100)}" @click="prevPage">&#60;</button>
        </span>
        <button :class="{bold : boldBtn(i)} " v-for="i in btnControl" :key="i" @click="movePage(i)"> {{ i+1 }}</button>
        <span v-if="showNextBtn">
            <button :class="{bold : boldBtn()}" @click="nextPage">></button>
        </span>
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
            thisPage: 0,
            startRange: 0,
            endRange: 5,
            bntSize: 5,
        }
    },
    methods: {
        prevPage(){
            eventBus.$emit("movePage", this.bntSize / 10 );
            this.startRange = this.startRange - this.bntSize
            this.endRange = this.endRange - this.bntSize
            this.thisPage = this.startRange;
        },
        movePage(num){
            this.thisPage = num;
            const startNum = num * this.pageSize;
            eventBus.$emit("movePage", startNum);
        },
        nextPage(){
            eventBus.$emit("movePage", this.bntSize * 10 );
            this.startRange = this.startRange + this.bntSize
            this.endRange = this.endRange + this.bntSize
            this.thisPage = this.startRange;
        },
        boldBtn(num){
            return this.thisPage === num
        }
    },
    computed:{
        btnControl(){
            let i;
            let btnRange = [];
            for(i = this.startRange; i < this.btnLength; i++){
                btnRange.push(i);
            }
            if(this.startRange !== 0){
                // 데이터 많아졌을때 버그고치기
                return btnRange
            }
            //    console.log(this.startRange);
            //    console.log(this.endRange);
            return btnRange.slice(this.startRange, this.endRange);
        },
        showPreBtn(){
            return (( this.startRange-1 ) > 0);
        },
        showNextBtn(){
            return this.endRange  < this.btnLength;
        }
    }
}
</script>
<style scoped>
    .bold{
        font-weight: 900;
    }
</style>