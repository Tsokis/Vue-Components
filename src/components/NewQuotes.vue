<template>
    <div class="row">
        <form>
        <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6-col-md-offset-3 form-group">
            <label>Quote</label>
            <textarea class="form-control" rows="6" v-model="quote"></textarea>
<!--            <textarea class="form-control" rows="6" v-model="hint"></textarea>-->
            <label>Add your pic</label>
            <input type="text" placeholder="paste the url" v-model="urlLink">
            <button @click.prevent="addPicture" class="btn btn-primary">Add Picture</button>
        </div>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6-col-md-offset-3 form-group">
                <button class="btn btn-primary" @click.prevent="createNew">Add Quote</button>
<!--                <button class="btn btn-primary" @click.prevent="createNewHint">Add Hint</button>-->
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                quote: '',
                hint:'',
                urlLink:''
            }
        },
        methods:{
            createNew(){
                this.$emit('addQuoteToParent',this.quote);
                this.quote = '';
            },
            createNewHint(){
                this.$emit('addNewHint',this.hint);
                this.hint = '';
            },
            addPicture(){
                //console.log(this.urlLink)
                this.$emit('addPic',this.urlLink);
                this.urlLink = '';
            }
        }

    }
</script>

<style>

</style>