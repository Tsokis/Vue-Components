<template>
    <div class="quo">
        <p>A quote!</p>
        <p> placeholder for html quote bellow</p>
        {{ prof }}
        <slot></slot>
        <slot name="title"></slot>
        <hr>
        <slot name="content"></slot>
    </div>
</template>
<script>
    export default {
        props:['prof']
    }

</script>
<style scoped>
    .quo{
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }
    h2{
        background-color: green;
    }
    ul{
        list-style: none;
    }
</style>