<template>
    <div>
        <!-- passing html or whatever with slots -->
        <slot>{{ test }}</slot>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                test:'some test'
            }
        },
    }
</script>

<style scoped>

</style>