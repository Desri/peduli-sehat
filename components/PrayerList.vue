<template>

	<b-row>
		<b-col sm="12" lg="6" v-for="data in getListPrayer" :key="data.id" class="mb-3 pl-2 pr-2">
			<div class="listPrayer">
				<div class="listLeft float-left">
					<p>{{data.name}}</p>
				</div>
				<div class="listRight float-right">
					<p>{{data.time_formated}}</p>
				</div>
			</div>
		</b-col>
	</b-row>

</template>

<script>
	import {mapGetters} from 'vuex'
	export default {
		data() {
			return {

			}
		},
		computed: {
			...mapGetters({
        		getListPrayer: 'listPrayer/listPrayer',
			}),
		},
		async mounted() {
			await this.$store.dispatch('listPrayer/GET_LIST_PRAYER');
		},
		methods: {

		},
	}
</script>

<style scoped>

</style>
