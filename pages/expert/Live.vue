<template>
	<div class="container">
		<br />
		<NuxtLink to="/" class="btn btn-dark">Index page</NuxtLink>
		<NuxtLink to="/main" class="btn btn-dark">Main Page</NuxtLink>
		<br />
		<br />

		<p>Console에서 확인</p>


		<div class="p-grid button-demo">
			<div class="p-col-12 p-md-6">
				<div class="card">
					<b-button type="button" class="p-mr-2 p-mb-2" @click="fnAxiosAsyncTest()">Axios Test - Call 5 API (Request step by step)</b-button>
					<br />
					<b-button type="button" class="p-mr-2 p-mb-2" @click="fnAxiosAsyncChainTest()">Axios Test - Call 5 API (Request all with Async)</b-button>
					<br />
					<b-button type="button" class="p-mr-2 p-mb-2" @click="fnAxiosSyncTest()">Axios Test - Call 5 API (Request all)</b-button>
				</div>
			</div>
		</div>

		<div class="axios-body">
			{{axiosData}}
		</div>

		<div class="block-ui" v-show="blockShow">
			<b-spinner label="Spinning"></b-spinner>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return ({
			axiosData : null,
			blockShow : false
		})
	},
	mounted(){
		this.fnAxiosAsyncTest()
	},
	methods: {
		async fnAxiosAsyncTest(){
			this.blockShow = true;
			console.time('posts')
			await this.$axios.get('/posts').then((data) => {
				console.log('%c posts response : ', 'background: #222; color: #bada55' , data)
				console.timeEnd('posts')
			})

			console.time('comments')
			await this.$axios.get('/comments').then((data) => {
				console.log('%c comments response : ', 'background: #222; color: #bada55' , data)
				console.timeEnd('comments')
			})

			console.time('albums')
			await this.$axios.get('/albums').then((data) => {
				console.log('%c albums response : ', 'background: #222; color: #bada55' , data)
				console.timeEnd('albums')
			})

			console.time('photos')
			await this.$axios.get('/photos').then((data) => {
				console.log('%c photos response : ', 'background: #222; color: #bada55' , data)
				console.timeEnd('photos')
			})

			console.time('todos')
			await this.$axios.get('/todos').then((data) => {
				console.log('%c todos response : ', 'background: #222; color: #bada55' , data)
				console.timeEnd('todos')

				this.axiosData = JSON.stringify(data);
			}).then(() => {
				console.log('aa')
			}).then(() => {
				console.log('bb')
			}).then(() => {
				console.log('cc')
			}).then(() => {
				console.log('dd')
				this.blockShow = false;
			})
		},
		async fnAxiosAsyncChainTest(){
			this.blockShow = true;

			var api = [
				this.$axios.get('/posts'),
				this.$axios.get('/comments'),
				this.$axios.get('/albums'),
				this.$axios.get('/photos'),
				this.$axios.get('/todos')
			];

			console.time('GetAllAsync')
			Promise.all(api).then((values) => {
				this.blockShow = false;
				console.log('%c GetAllAsync response : ', 'background: #222; color: #bada55' , values)
				console.timeEnd('GetAllAsync')
			})
			console.log('end GetAllAsync')
		},
		fnAxiosSyncTest(){
			this.blockShow = true;

			var api = [
				this.$axios.get('/posts'),
				this.$axios.get('/comments'),
				this.$axios.get('/albums'),
				this.$axios.get('/photos'),
				this.$axios.get('/todos')
			];

			console.time('GetAllSync')
			Promise.all(api).then((values) => {
				this.blockShow = false;
				console.log('%c GetAllSync response : ', 'background: #222; color: #bada55' , values)
				console.timeEnd('GetAllSync')
			})
			console.log('end GetAllSync')
		}
	}
}
</script>

<style lang="scss" scoped>
.axios-body {
	word-break: break-all;
}

.block-ui {
	 position:fixed;
	 top:0;
	 left:0;
	 width:100%;
	 height:100%;
	 background-color:rgba(0,0,0,0.5);

	 .spinner-border {
		 position:absolute;
		 top:50%;
		 left:50%;
		 width:4rem;
		 height:4rem;
		 color:#d9230f !important;
		 margin:-2rem 0 0 -2rem;
	 }
}

</style>