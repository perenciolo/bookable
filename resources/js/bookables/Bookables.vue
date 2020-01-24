<template>
  <div v-if="loading">
    Loading content...
  </div>

  <div v-else>
    <div class="row mb-4" v-for="row in rows" :key="`row-${row}`">
      <div
        class="col"
        v-for="(bookable, idx) in bookablesInRow(row)"
        :key="`col-${idx}-${row}`"
      >
        <bookable-list-item
          :title="`${bookable.title} ${++idx}`"
          :content="`${bookable.content} ${idx}`"
        ></bookable-list-item>
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
    bookables: [
      {
        title: 'Cheap Villa',
        content: 'A very cheap villa'
      },
      {
        title: 'Cheap Villa',
        content: 'A very cheap villa'
      },
      {
        title: 'Cheap Villa',
        content: 'A very cheap villa'
      },
      {
        title: 'Cheap Villa',
        content: 'A very cheap villa'
      },
      {
        title: 'Cheap Villa',
        content: 'A very cheap villa'
      },
      {
        title: 'Cheap Villa',
        content: 'A very cheap villa'
      },
      {
        title: 'Cheap Villa',
        content: 'A very cheap villa'
      },
      {
        title: 'Cheap Villa',
        content: 'A very cheap villa'
      }
    ],
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
  created() {
    this.loading = true

    const self = this

    setTimeout(function() {
      self.loading = false
    }, 3000)
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
