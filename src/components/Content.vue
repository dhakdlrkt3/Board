<template>
    <div>
        <td>{{ content.id }}</td>
        <td>{{ content.tag }}</td>
        <td><a href="url">{{ content.title }}</a></td>
        <td>{{ content.date }}</td>
        <td>{{ content.writer }}</td>
        <td>{{ content.hit }}</td>
    </div>
</template>
<script>
export default {
    name: 'ContentView',
    props:{
        content:{
            type: Object,
            required: true,
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>