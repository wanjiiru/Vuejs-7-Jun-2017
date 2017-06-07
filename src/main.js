// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

new Vue({
  el: '#app',

  data :{
  	message: "Welcome to Vuejs learning point",
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
  		Fontsize : 30,
  		activeColor:'maroon',
  		 liveBoxName: [],

  	},


     methods : {

           clickMe : function(){
              alert('Hey there, ' + this.first_name)
          },
              login: function(){
              this.isLoggedIn = !this.isLoggedIn;
          }
        
      },
  	
     computed: {
				getName : function(){
					    return this.first_name + ' ' + this.last_name;
				}
			},
		})