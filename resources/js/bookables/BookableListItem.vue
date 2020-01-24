<template>
  <div class="card w-100">
    <router-link
      :to="{ name: 'bookable', params: { id } }"
      tag="div"
      class="card-body clickable"
    >
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">
        {{ description }}
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    id: {
      type: Number
    }
  }
}
</script>
