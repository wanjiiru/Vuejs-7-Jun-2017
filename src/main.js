// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false

Vue.directive('rainbow',{
   bind(el, binding, vnode){
    el.style.color  = "#"+ Math.random().toString().slice(2,8);
}
});

Vue.component('create-new-post', {
  template: '#create-template'
});

Vue.component('greeting', {
    template: '<h1>{{message}}</h1>',
    props: {
        message: {
            type: String,
            required: true,
        }
    }
});

new Vue({
    el: '#app',

 data:{
        message: "Welcome to Vuejs blog",
        items:[
  		          'Instances',
  		          'Installation',
                'Template Syntax',
                'Event Handling',
                'Form Input Bindings'
  		],
  		  dataselect :" ",
  		  isLoggedIn: false,
  		  first_name :'Liz',
  		  last_name :'Wanjiiru',
  		  activeColor:'maroon',
        fontsize : 20,
  		  liveBoxName: [],
        km2: 0,
        cm: 0,
        mm: 0,
        fontSize:null,
        clicked: false,
        notClicked:true,
  	},

    watch: {
        km2: function(val){
            this.km2 = val;
            this.cm = val * 100000;
            this.mm = val * 1000000;
        },
        cm: function(val){
            this.km2 = val / 100000;
            this.cm = val;
            this.mm = val * 10;
        },
        mm: function(val){
            this.km2 = val / 1000000;
            this.cm = val / 10;
            this.mm = val;
        },
    },

    methods : {

           clickMe : function(){
              alert('Hey there, ' + this.first_name)
          },
           login: function(){
              this.isLoggedIn = !this.isLoggedIn;
          },

          changeFontSizeLarger: function() {
            this.clicked = true;
            this.notClicked = false;
        },
        changeFontSizeSmaller: function() {
            this.notClicked = true;
            this.clicked = false;
        }
      },
  	
    computed: {
				getName : function(){
					    return this.first_name + ' ' + this.last_name;
				}
			},
		})

Vue.mixin({
 created: function () {
  var myOption = this.$options.myOption
    if (myOption) {
      alert(myOption);
    }
  }
})

new Vue({
  myOption: 'hey there!'
})

export default{
  components:{
    'form-helper':formHelper
  }
}
const MyPlugin = {
  install(Vue, options) {
    Vue.mixin({
      mounted() {
        console.log('Mounted  plugin!');
      }
    });
  }
};




