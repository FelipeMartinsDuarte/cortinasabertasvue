<template>
    <div id="grid"></div>
</template>

<script>
</script>

<style scoped>
#grid {
    display: grid;
    height: 100vh;
    grid-template-columns: 4vmin, repeat(12,1fr), 4vmin;
    grid-gap: 2.5vmax;
}
</style>
