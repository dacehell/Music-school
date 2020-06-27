<template>
  
      <div>
  <b-container>
      <b-card-group deck v-for="course in courses" :key= "course.id">
                <b-card
                    title="Card Title"
                    :img-src="course.data.img"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                >
                    <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>

                    <b-button href="#" variant="primary">Go somewhere</b-button>
                </b-card>
    </b-card-group>
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
        }
  
 }



</script>



<style>

</style>