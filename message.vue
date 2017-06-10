<template>
	<div>
		<h1>{{}message}<h1>
		<app-input:msg='message' v-on 	messageChanged='message'=$event></app-input>
	</div
</template>
<script>
	export default{
		data(){
			message:'Hello from this side'
		}
	import input from './input.vue'
		components:{
			'app-input':input
		}
	}
	</script>