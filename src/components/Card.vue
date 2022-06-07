<template>
  <div class="card">
    <div class="card-section">
      <div class="card-left-section">
        <img :src="post.avatar_url" :alt="`${post?.login}`" class="user-image" />
        <div class="user-details">
          <h5>{{ post?.login }}</h5>
          <p>Profile Url: {{ post?.html_url }}</p>
          <p>User Type: {{ post?.type }}</p>
          <p>Score: {{ post?.score }}</p>
        </div>
      </div>
      <div class="card-right-section">
        <div v-if="!isSelected">
          <button class="btn btn-secondary" @click="$emit('handleDetails', post?.login)">
            Details
          </button>
        </div>
        <div v-else>
          <button class="btn btn-secondary" @click="$emit('handleCollapse')">Collapse</button>
        </div>
      </div>
    </div>
    <div v-if="isSelected && userDetails.length > 0" class="card-table">
      <div class="card-row card-table-header">
        <h4>Repo Name</h4>
        <h4>Language</h4>
      </div>
      <div :key="userDetail.id" v-for="userDetail in userDetails">
        <div class="card-row card-table-body">
          <p>{{ userDetail?.name }}</p>
          <p>{{ userDetail?.language }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    post: Object,
    isSelected: Boolean,
    userDetails: Array,
  },
  emit: ['handleDetails', 'handleCollapse'],
};
</script>

<style scoped>
.card {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0px 2px 2px 0px rgb(0 0 0 / 20%);
}
.card-section {
  display: flex;
  justify-content: space-between;
}
.user-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.user-details {
  margin-left: 20px;
}
.card-left-section {
  display: flex;
}
.card-right-section {
  display: flex;
  align-items: flex-end;
}
.card-row {
  display: flex;
  justify-content: space-between;
}
.card-table {
  width: 70%;
  margin: 20px auto;
}
.card-table-header {
  border: 1px solid #eee;
  padding: 0px 10px;
  background: #157abc;
  color: #fff;
}
.card-table-body {
  border: 1px solid #eee;
  padding: 0px 10px;
  background: #2b546f;
  color: #fff;
}
.card-row p, .card-row h4 {
  margin-top: 10px;
}

</style>
