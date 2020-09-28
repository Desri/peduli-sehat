<template>

	<div class="bgDays">
		<b-row>
			<b-col class="pl-2 pr-2">
				<div class="listDays">
					<h3>Sen</h3>
					<p>10</p>
					<span>1</span>
				</div>
			</b-col>
			<b-col class="pl-2 pr-2">
				<div class="listDays">
					<h3>Sel</h3>
					<p>11</p>
					<span>2</span>
				</div>
			</b-col>
			<b-col class="pl-2 pr-2">
				<div class="listDays">
					<h3>Rab</h3>
					<p>12</p>
					<span>3</span>
				</div>
			</b-col>
			<b-col class="pl-2 pr-2">
				<div class="listDays">
					<h3>Kam</h3>
					<p>13</p>
					<span>4</span>
				</div>
			</b-col>
			<b-col class="pl-2 pr-2">
				<div class="listDays">
					<h3>Jum</h3>
					<p>14</p>
					<span>5</span>
				</div>
			</b-col>
			<b-col class="pl-2 pr-2">
				<div class="listDays">
					<h3>Sab</h3>
					<p>15</p>
					<span>6</span>
				</div>
			</b-col>
			<b-col class="pl-2 pr-2">
				<div class="listDays">
					<h3>Min</h3>
					<p>16</p>
					<span>7</span>
				</div>
			</b-col>
		</b-row>
	</div>

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
