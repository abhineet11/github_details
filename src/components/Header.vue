<template>
  <div class="top-header">
    <div class="container top-header-layout">
      <SelectComponent :options="options" @onSelect="sortSelect" />
      <InputComponent type="text" placeholder="Search" @onSearch="search" />
    </div>
  </div>
</template>

<script>
import InputComponent from './shared/Input.vue';
import SelectComponent from './shared/Select.vue';

import sortMapping from '../utils/mapping';
import debounce from '../helper/debouncing';

export default {
  name: 'Header',
  components: {
    InputComponent,
    SelectComponent,
  },
  methods: {
    search: debounce(function (value) {
      this.$emit('onSearch', value);
    }, 1000),
    sortSelect(selection) {
      this.$emit('onSelect', selection);
    },
  },
  emit: ['onSearch', 'onSelect'],
  data() {
    return {
      options: [
        {
          isSelected: false,
          label: sortMapping.ASC_ALPHA,
          value: sortMapping.ASC_ALPHA,
        },
        {
          isSelected: false,
          label: sortMapping.DESC_ALPHA,
          value: sortMapping.DESC_ALPHA,
        },
        {
          isSelected: false,
          label: sortMapping.ASC_RANK,
          value: sortMapping.ASC_RANK,
        },
        {
          isSelected: false,
          label: sortMapping.DESC_RANK,
          value: sortMapping.DESC_RANK,
        },
      ],
    };
  },
};
</script>

<style scoped>
.top-header {
  width: 100%;
  padding: 20px 0px;
  background-color: #157abc;
}
.top-header-layout {
  display: flex;
  justify-content: space-between;
}
</style>
