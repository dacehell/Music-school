<template>
  
      <div>
  <b-container>
      <b-row>
          <b-col sm="6" md="4" lg="12">
              <b-card-group columns deck v-for="course in courses" :key= "course.id">
                <b-card
                    :title="course.data.name"
                    :img-src="course.data.img"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                >
                    <b-card-text>
                    {{course.data.description}}
                    </b-card-text>

                    <b-button href="#" variant="primary">Description</b-button>
                </b-card>
    </b-card-group>


          </b-col>
      </b-row>
      
</b-container>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
        name:'CourseCard',
        methods:{
        ...mapActions(['getCourses'])
        },

        computed: {
        ...mapState(['courses']),
        // cardList() {
        // console.log(this.courses)
        // return this.courses
        // }
        },
  created() {
    this.$store.dispatch('getCourses')
  },
 }



</script>



<style>

</style>