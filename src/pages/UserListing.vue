<template>
  <div>
    <Header @onSearch="search" @onSelect="sortSelect" />
    <div class="container">
      <div :key="post.id" v-for="post in posts?.items" class="card-wrapper">
        <Card
          :post="post"
          @handleDetails="handleDetails"
          :isSelected="post.login === selectedCard"
          @handleCollapse="handleCollapse"
          :userDetails="userDetails"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Header from '../components/Header.vue';
import Card from '../components/Card.vue';

export default {
  name: 'UserListing',
  components: {
    Header,
    Card,
  },
  data() {
    return {
      selectedCard: '',
      posts: {},
      searchValue: '',
      userDetails: [],
    };
  },
  methods: {
    async getData(userName) {
      try {
        const response = await axios.get(`https://api.github.com/search/users?q=${userName}`);
        this.posts = response.data;
      } catch (error) {
        console.log(error);
      }
    },

    async getUserDetails(userName) {
      try {
        const response = await axios.get(`https://api.github.com/users/${userName}/repos`);
        this.userDetails = response.data;
      } catch (error) {
        console.log(error);
      }
    },

    search(value) {
      this.searchValue = value;
      this.getData(value);
    },
    sortSelect(value) {
      console.log(value);
    },
    handleDetails(userName) {
      this.userDetails = [];
      this.getUserDetails(userName);
      this.selectedCard = userName;
    },
    handleCollapse() {
      this.selectedCard = '';
    },
  },
};
</script>

<style scoped>
.card-wrapper {
  margin-top: 20px;
}
</style>
