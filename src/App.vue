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

           <TestComp>
               <h2>Welcome</h2>
               <p>To our app</p>
               <strong>{{ message }}</strong>
           </TestComp>
           <p v-html=" '<strong>dasda</strong>' "></p>
<!--           <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'-->
<!--                      :tooltip='tooltip' :chartArea='chartArea' :width='width'>-->
<!--               <e-series-collection>-->
<!--                   <e-series :dataSource='seriesData' type='Line' xName='x' yName='y' name='Germany' width=2 :marker='marker'> </e-series>-->
<!--                   <e-series :dataSource='seriesData1' type='Line' xName='x' yName='y' name='England' width=2 :marker='marker'> </e-series>-->
<!--                   <e-series :dataSource='seriesData2' type='Line' xName='x' yName='y' name='India' width=2 :marker='marker'> </e-series>-->
<!--&lt;!&ndash;                   <e-series :dataSource='seriesData3' type='Line' xName='cx' yName='cy' name='Greece' width=2 :marker='marker'> </e-series>&ndash;&gt;-->
<!--               </e-series-collection>-->
<!--           </ejs-chart>-->

        <Quote :prof="prof">
            <h2>passed h2</h2>
            <p>passed paragraph</p>
            <strong>passed strong {{ prof }}</strong>
            <h3 slot="title">Title</h3>
                <div slot="content">
                    <p>paragraph</p>
                    <ul>
                        <li>list item 1 <strong>{{ prof }}</strong></li>
                        <li>list item 2 <i>{{ prof }}</i></li>
                        <li>list item 3 <u>{{ prof }}</u></li>
                    </ul>
                </div>
        </Quote>
           <h3>Quotes App</h3>
           <Header :quoteCount="quotes.length" :maxQuotes="maxQuotes"/>
           <new-quotes @addQuoteToParent="newQuote" @addNewHint="newHint" @addPic="addLink"></new-quotes>
           <QuoteGrid :quotes="quotes" @quoteDeleted="deleteQuote"/>
           <div class="row">
               <div class="col-sm-12 text-center">
                   <div class="alert alert-info">Hint: Click on a Quote to delete it!!</div>
               </div>
           </div>
           <img :src="urlPic" @click="deletePic"/>
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
import TestComp from './components/TestComp';
// import { Browser } from '@syncfusion/ej2-base';
// import { ChartPlugin, LineSeries, Legend, Tooltip, DateTime } from "@syncfusion/ej2-vue-charts";


export default {
    data(){
        return{
            message:'not as a prop but as data of parent comp',
            testVal:'Welcome to test comp',
            prof:'software developer',
            selectedComponent: 'Quote',
            quotes:['just a test quote'],
            maxQuotes: 10,
            hints:[],
            urlPic:''
        };
    },
  components: {
    Quote,
    Author,
    New,
    QuoteGrid,
    NewQuotes,
    Header,
    TestComp
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
        },
        addLink(link){
            this.urlPic = link;
        },
        deletePic(){
            this.urlPic = '';
        }
    }
}
// let selectedTheme = location.hash.split("/")[1];
// selectedTheme = selectedTheme ? selectedTheme : "Material";
// let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

// export default {
//     mounted(){
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//             this.seriesData3 = data;
//             data.map(val => {
//                 this.x = val.name;
//                 console.log(this.x)
//                 this.y = val.address;
//             });
//         }).catch(err => console.log(err))
//     },
//     data: function () {
//         return {
//             theme: theme,
//             x:'',
//             y:'',
//             seriesData: [
//                 {x: new Date(2005, 0, 1), y: 21},
//                 {x: new Date(2006, 0, 1), y: 24},
//                 {x: new Date(2007, 0, 1), y: 36},
//                 {x: new Date(2008, 0, 1), y: 38},
//                 {x: new Date(2009, 0, 1), y: 54},
//                 {x: new Date(2010, 0, 1), y: 57},
//                 {x: new Date(2011, 0, 1), y: 70}
//             ],
//             seriesData1: [
//                 {x: new Date(2005, 0, 1), y: 28},
//                 {x: new Date(2006, 0, 1), y: 44},
//                 {x: new Date(2007, 0, 1), y: 48},
//                 {x: new Date(2008, 0, 1), y: 50},
//                 {x: new Date(2009, 0, 1), y: 66},
//                 {x: new Date(2010, 0, 1), y: 78},
//                 {x: new Date(2011, 0, 1), y: 84}
//             ],
//             seriesData2: [
//                 {x: new Date(2012, 0, 1), y: 28},
//                 {x: new Date(2013, 0, 1), y: 44},
//                 {x: new Date(2014, 0, 1), y: 48},
//                 {x: new Date(2015, 0, 1), y: 50},
//                 {x: new Date(2016, 0, 1), y: 66},
//                 {x: new Date(2017, 0, 1), y: 78},
//                 {x: new Date(2018, 0, 1), y: 84}
//             ],
//             seriesData3:[
//                 {cx:this.x,cy:this.y}
//             ],
//             //Initializing Primary X Axis
//             primaryXAxis: {
//                 valueType: "DateTime",
//                 labelFormat: "y",
//                 intervalType: "Years",
//                 edgeLabelPlacement: "Shift",
//                 majorGridLines: {width: 0}
//             },
//             //Initializing Primary Y Axis
//             primaryYAxis: {
//                 labelFormat: "{value}%",
//                 rangePadding: "None",
//                 minimum: 0,
//                 maximum: 100,
//                 interval: 20,
//                 lineStyle: {width: 0},
//                 majorTickLines: {width: 0},
//                 minorTickLines: {width: 0}
//             },
//             chartArea: {
//                 border: {
//                     width: 0
//                 }
//             },
//             width: Browser.isDevice ? '100%' : '60%',
//             marker: {
//                 visible: true,
//                 height: 10,
//                 width: 10
//             },
//             tooltip: {
//                 enable: true
//             },
//             title: "Inflation - Consumer Price"
//         };
//     },
//     provide: {
//         chart: [LineSeries, Legend, Tooltip, DateTime]
//     },
//     methods: {}
//
// }
</script>

<style>

</style>
