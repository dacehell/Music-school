<template>
  <div class="home">
    
    <course-card></course-card>
    
  </div> 
</template>

<script>
// @ is an alias to /src

import CourseCard from '../components/CourseCard.vue'

export default {
  name: 'Home',
  components: {
    
    CourseCard
  }
}
</script>