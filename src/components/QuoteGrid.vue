<template>
    <div class="row">
        <single-quote v-for="(val,index) in quotes" :key="index" @click.native="deleteQuote(index)">{{ val }}</single-quote>
    </div>
</template>

<script>
  import SingleQuote from './SingleQuote';

  export default {
      props:['quotes','hints'],
      components: {
          singleQuote: SingleQuote
      },
      methods:{
          deleteQuote(index){
            this.$emit('quoteDeleted',index);
          }
      }
  }
</script>

<style>
    .panel-body{
        font-family: 'Arizonia', cursive;
        font-size: 24px;
        color:#6e6e6e;
    }

    .quote {
        cursor: pointer;
    }

    .quote:hover{
        background-color: #ffe2e2;
    }
</style>