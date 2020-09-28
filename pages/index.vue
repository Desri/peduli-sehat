<template>
  <div>

    <section id="banner">
      <b-container class="customeContainer">
        <banner/>
      </b-container>
    </section>

    <section id="heading">
      <b-container>
        <div class="titleHeading float-left">
          <h2>{{title}}</h2>
        </div>
        <div class="dateHeading float-right">
          <p>{{date_title}}</p>
        </div>
      </b-container>
    </section>

    <section id="listDay">
      <b-container class="customeContainer">
        <listDays/>
      </b-container>
    </section>

    <section id="list">
      <b-container class="customeContainer">
        <listPrayer/>
      </b-container>
    </section>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import banner from '@/components/banner'
  import listDays from '@/components/ListDays'
  import listPrayer from '@/components/PrayerList'
  export default {
    components:{
      banner,
      listDays,
      listPrayer
    },
    data() {
      return {
        title: 'Muharram 1442',
        date_title: 'September 2020',
      }
    },
    computed: {
			...mapGetters({
				
			}),
		},
    async mounted() {
      
    },
    methods: {
      
    }

  }
</script>
