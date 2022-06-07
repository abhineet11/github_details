<template>
  <paginate
    :value="page"
    :page-count="perPage"
    :page-range="3"
    :margin-pages="2"
    :click-handler="onPaginate"
    :prev-text="'Prev'"
    :next-text="'Next'"
    :container-class="'pagination'"
    :page-class="'page-item'"
  >
  </paginate>
</template>

<script>
import Paginate from 'vuejs-paginate-next';

export default {
  name: 'PaginationComponent',
  components: {
    paginate: Paginate,
  },
  emit: ['onPaginate'],
  props: ['row', 'page', 'perPage'],
  methods: {
    onPaginate(pageNum) {
      this.$emit('onPaginate', pageNum);
    },
  },
};
</script>

<style scoped>
@import 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css';
</style>
