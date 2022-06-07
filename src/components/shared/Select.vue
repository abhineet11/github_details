<template>
  <form class="add-form">
    <div>
      <label for="select">
        <select class="select" id="select" @change="$emit('onSelect', $event.target.value)">
          <option :key="option.label" v-for="option in options" v-bind:value="option?.value">
            {{ option?.label }}
          </option>
        </select>
      </label>
    </div>
  </form>
</template>

<script>
export default {
  name: 'SelectComponent',
  props: {
    options: Array,
  },
  emit: ['onSelect'],
};
</script>

<style scoped>
.select {
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #eee;
}
</style>
