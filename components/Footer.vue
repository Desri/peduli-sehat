<template>
	<footer>
		<section id="menu-bottom">
			<b-container>
				<b-row>
					<b-col xs="3" >
						<div class="boxIcon">
							<img src="@/static/assets/icon1.png">
						</div>
					</b-col>
					<b-col xs="3" >
						<div class="boxIcon">
							<img src="@/static/assets/icon2.png">
						</div>
					</b-col>
					<b-col xs="3" >
						<div class="boxIcon">
							<img src="@/static/assets/icon3.png">
						</div>
					</b-col>
					<b-col xs="3" >
						<div class="boxIcon">
							<img src="@/static/assets/icon4.png">
						</div>
					</b-col>
				</b-row>
			</b-container>
			<!-- <div v-if="isShow" class="colSearchMobile">
				<searchLoker/>
			</div>
			<div class="btnSearchMobile">
				<span v-if="!isShow" @click="isShow = !isShow">Search</span>
				<span v-else @click="isShow = !isShow">Close</span>
			</div> -->
		</section>

	</footer>
</template>

<script>
  import {mapGetters} from 'vuex'
  //import searchLoker from '@/components/searchLoker'
  export default {
    components:{
		//searchLoker,
    },
    data() {
      return {
        visible: false,
				isShow:false,
      }
    },
    computed: {

		},
    async mounted() {

    },
    methods: {


    },

  }
</script>
