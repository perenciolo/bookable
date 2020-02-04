<template>
  <div v-if="loading">
    Loading content...
  </div>

  <div v-else>
    <div
      class="row mb-4 d-flex align-items-stretch"
      v-for="row in rows"
      :key="`row-${row}`"
    >
      <div
        class="col d-flex align-items-stretch"
        v-for="(bookable, idx) in bookablesInRow(row)"
        :key="`col-${idx}-${row}`"
      >
        <bookable-list-item v-bind="bookable"></bookable-list-item>
      </div>
      <div
        class="col"
        v-for="placeholder in placeholdersInRow(row)"
        :key="`plac-${row + placeholder}`"
      ></div>
    </div>
  </div>
</template>

<script>
import BookableListItem from './BookableListItem'
export default {
  components: { BookableListItem },
  data: () => ({
    bookables: [],
    columns: 3,
    loading: false
  }),
  computed: {
    rows() {
      return this.bookables
        ? Math.ceil(this.bookables.length / this.columns)
        : 0
    }
  },
  async created() {
    this.loading = true
    const response = await axios.get('/api/bookables')
    this.bookables = response.data.data
    this.loading = false
  },
  methods: {
    bookablesInRow(row) {
      return this.bookables.slice((row - 1) * this.columns, row * this.columns)
    },
    placeholdersInRow(row) {
      if (this.bookablesInRow(row)) {
        return this.columns - this.bookablesInRow(row).length
      }
      return this.columns
    }
  }
}
</script>
