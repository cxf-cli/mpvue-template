<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ countt }}</p>
    <p>
      <button @click="increment">+</button>
       <button @click="decrement">-</button>
    </p>

    <a href="/pages/new/index" class="home">去往首页</a>
  </div>
</template>

<script>
// Use Vuex
// import store from './store'
import { mapGetters, mapActions } from 'vuex';
export default {
	computed: {
		...mapGetters(['count']),
		countt() {
			return this.count;
		},
	},
	methods: {
		increment() {
			this.$store.commit('increment');
		},
		decrement() {
			this.$store.commit('decrement');
		},
	},
	mounted() {
		console.log(this.$route.query);
	},
};
</script>

<style lang="scss" scoped >
.counter-warp {
  text-align: center;
  margin-top: 100px;
  .home {
    display: inline-block;
    margin: 100px auto;
    padding: 5px 10px;
    color: blue;
    border: 1px solid blue;
  }
}

</style>
