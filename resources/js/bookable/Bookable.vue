<template>
  <div v-if="!bookable">
    Loading data...
  </div>
  <div v-else class="container">
    <div class="row">
      <div class="col-md-8">
        <div class="card">
          <div class="card-body">
            <h2>
              {{ bookable.title }}
            </h2>
            <hr />
            <article>{{ bookable.description }}</article>
          </div>
        </div>
      </div>
      <!-- / .col-md-8 -->
      <div class="col-md-4">
        Availability & Prices
      </div>
      <!-- / .col-md-4 -->
    </div>
  </div>
</template>

<script>
import BookableListItem from '../bookables/BookableListItem'
export default {
  components: { BookableListItem },
  data: () => ({
    bookable: null
  }),
  async created() {
    const { id } = this.$route.params
    const response = await axios.get(`/api/bookables/${id}`)
    this.bookable = response.data.data
  }
}
</script>
