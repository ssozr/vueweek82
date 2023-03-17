<template>
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item bg-secondary" :class="{ disabled : !pages.has_pre}">
      <a class="page-link bg-secondary btn border-secondary"  @click="changePage(pages.current_page - 1)" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li v-for="(page, i) in pages.total_pages" :key="i" :class="{ active: pages.current_page === page }" class=" page-item">
    <a @click="changePage(page)" class="page-link bg-secondary btn border-secondary text-white">{{ page }}</a></li>
    <li class="page-item" :class="{ disabled : !pages.has_next}">
      <a class="page-link bg-secondary btn border-secondary" aria-label="Next"  @click="changePage(pages.current_page + 1)">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
</template>

<script>
export default {
  props: ['pages', 'getOrders'],
  methods: {
    changePage (page) {
      this.$emit('changePage', page)
    }
  }
}
</script>
