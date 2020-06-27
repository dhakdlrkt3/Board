<template>
    <div>
        <h1>{{ title }}</h1>
    </div>
</template>
<script>
export default {
    props:{
        title: {
            type: Object,
            required: true
        }
    }
}
</script>
<style scoped>

</style>