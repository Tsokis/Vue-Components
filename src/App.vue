<template>
  <div class="container">
     <div class="row">
       <div class="col-md-12">
           <div style="text-align: center">
               <button @click="selectedComponent = 'Quote' ">Quote</button>
               <button @click="selectedComponent = 'Author' ">Author</button>
               <button @click="selectedComponent = 'New' ">New</button>
           </div>

           <p>let's see if it's working {{ selectedComponent }}</p>
           <keep-alive>
               <component :is="selectedComponent">
                   <p>Default Content</p>
               </component>
           </keep-alive>

<!--        <Quote :prof="prof">-->
<!--            <h2>passed h2</h2>-->
<!--            <p>passed paragraph</p>-->
<!--            <strong>passed strong {{ prof }}</strong>-->
<!--            <h3 slot="title">Title</h3>-->
<!--                <div slot="content">-->
<!--                    <p>paragraph</p>-->
<!--                    <ul>-->
<!--                        <li>list item 1 <strong>{{ prof }}</strong></li>-->
<!--                        <li>list item 2 <i>{{ prof }}</i></li>-->
<!--                        <li>list item 3 <u>{{ prof }}</u></li>-->
<!--                    </ul>-->
<!--                </div>-->
<!--        </Quote>-->
           <h3>Quotes App</h3>
           <Header :quoteCount="quotes.length" :maxQuotes="maxQuotes"/>
           <new-quotes @addQuoteToParent="newQuote" @addNewHint="newHint"></new-quotes>
           <QuoteGrid :quotes="quotes" @quoteDeleted="deleteQuote"/>
           <div class="row">
               <div class="col-sm-12 text-center">
                   <div class="alert alert-info">Hint: Click on a Quote to delete it!!</div>
               </div>
           </div>
       </div>
     </div>
  </div>
</template>

<script>
import Quote from './components/Quote';
import Author from './components/Author';
import New from './components/New';
import QuoteGrid from './components/QuoteGrid';
import NewQuotes from './components/NewQuotes';
import Header from './components/Header';

export default {
    data(){
        return{
            prof:'software developer',
            selectedComponent: 'Quote',
            quotes:['just a test quote'],
            maxQuotes: 10,
            hints:[]
        };
    },
  components: {
    Quote,
    Author,
    New,
    QuoteGrid,
    NewQuotes,
    Header
  },
    methods:{
        newQuote(quote){
            if(this.quotes.length <= 9){

                this.quotes.push(quote);
            }else{
                alert('Stop right Now!!');
            }

        },
        newHint(hint){
            this.hints.push(hint);
        },
        deleteQuote(index) {
            this.quotes.splice(index,1);
        }
    }
}
</script>

<style>

</style>
