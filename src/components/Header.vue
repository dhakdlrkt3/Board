<template>
    <div>
        <h1>{{ title }}</h1>
    </div>
</template>
<script>
export default {
    name: 'HeaderView',
    props:{
        title: {
            type: String,
            required: true
        }
    }
}
</script>
<style scoped>

</style>