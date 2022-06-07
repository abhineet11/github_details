<template>
  <form class="add-form">
    <div>
      <label for="search">
        <input
          :type="type"
          id="search"
          class="input"
          :placeholder="placeholder"
          @input="$emit('onSearch', $event.target.value)"
        />
      </label>
    </div>
  </form>
</template>

<script>
export default {
  name: 'InputComponent',
  props: {
    type: String,
    placeholder: String,
    inputValue: String,
  },
  emit: ['onSearch'],
};
</script>

<style scoped>
.input {
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #eee;
}
</style>
