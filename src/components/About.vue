<template>
    <div class="about">
        <h1>Hello {{ name }}, <br>This is an About Page</h1>
        <p>My name is {{ name }}, I am a Software Developer. Basically I worked on Javascript and Javascript Framework such as Angular and Vue.
            On Vue I started today to learn and working pratical project of Adding Skill and I must say Vue.js is an amazing framwork.
        </p>
    </div>
</template>

<script>
export default {
    name: 'About',
    data() {
        return {
            name: this.$route.params.name
        }
    }
}
</script>

<style scoped>
p {
    text-align: justify;
    line-height: 25px;
}
</style>