<template>
    <div>
        <button @click="goToWriting">
            <img class="writing-button" src="../assets/edit.png" alt="">
        </button>
    </div>
</template>
<script>
export default {
    name: 'ButtonView',
    methods:{
        goToWriting(){
            this.$router.push({name: 'Writing'})
        }
    }
}

</script>