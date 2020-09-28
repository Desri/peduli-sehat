<template>

	<div class="bgBanner">
		<b-row>
			<b-col>
				<div class="boxBanner">
					<img :src="urlBanner" alt="Banner" @error="onImageError">
					<div class="boxTimer">
						<div class="timer">
							<p id="timerCountdown"></p>
						</div>
						<div class="nextTimer">
							<p>Next Prayer <strong>{{nextTimer}}</strong></p>
						</div>
					</div>
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
				urlBanner: '../../assets/banner.png',
				nextTimer: 'Ashar 16:34'
			}
		},
		computed: {
			...mapGetters({
        		
			}),
		},
		async mounted() {
			var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

			var x = setInterval(function() {
				var now = new Date().getTime();
				var distance = countDownDate - now;

				var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
				var seconds = Math.floor((distance % (1000 * 60)) / 1000);

				document.getElementById("timerCountdown").innerHTML = hours + " : "
				  + minutes + " : " + seconds;
				if (distance < 0) {
				    clearInterval(x);
				    document.getElementById("timerCountdown").innerHTML = "Solat dulu yuk";
				}
			}, 1000);
		},
		methods: {
			onImageError: function(e) {
      			e.target.src = require('@/static/assets/no-image.png');
    		},
		},
	}
</script>

<style scoped>

</style>
