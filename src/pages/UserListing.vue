<template>
  <div>
    <Header @onSearch="search" @onSelect="sortSelect" />
    <div class="container">
      <div :key="post.id" v-for="post in getUserPosts?.items" class="card-wrapper">
        <Card
          :post="post"
          @handleDetails="handleDetails"
          :isSelected="post.login === selectedCard"
          @handleCollapse="handleCollapse"
          :userDetails="getUserDetails"
        />
      </div>
    </div>
    <div v-if="getUserPosts" class="pagination-container">
      <PaginationComponent
        :page="getPaginationDetails.page"
        :perPage="getPaginationDetails.perPage"
        :row="posts?.total_count"
        @onPaginate="onPaginate"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import PaginationComponent from '../components/shared/PaginationComponent.vue';
import Header from '../components/Header.vue';
import Card from '../components/Card.vue';

export default {
  name: 'UserListing',
  components: {
    Header,
    Card,
    PaginationComponent,
  },
  data() {
    return {
      selectedCard: '',
    };
  },

  computed: mapGetters(['getUserPosts', 'getUserDetails', 'getPaginationDetails']),

  methods: {
    ...mapActions(['setSearch', 'setPagniation', 'fetchUserDetails']),
    search(value) {
      this.setSearch(value);
    },
    sortSelect(value) {
      console.log(value);
    },
    handleDetails(userName) {
      this.fetchUserDetails(userName);
      this.selectedCard = userName;
    },
    handleCollapse() {
      this.selectedCard = '';
    },
    onPaginate(page) {
      this.setPagniation(page);
    },
  },
};
</script>

<style scoped>
.card-wrapper {
  margin-top: 20px;
}

.pagination-container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
}
</style>
