import axios from 'axios';

const initailState = {
  posts: null,
  searchValue: '',
  userDetails: [],
  page: 1,
  perPage: 10,
};

const getters = {
  getUserPosts: (state) => state.posts,
  getUserDetails: (state) => state.userDetails,
  getPaginationDetails: (state) => ({
    page: state.page,
    perPage: state.perPage,
  }),
};

const actions = {
  async fetchUserPost({ commit }, payload) {
    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${payload.searchValue}&page=${payload.page}&per_page=${payload.perPage}`,
      );
      commit('setUserPost', response.data);
    } catch (error) {
      console.log(error);
    }
    return null;
  },

  async fetchUserDetails({ commit }, userName) {
    commit('setUserDetails', []);
    try {
      const response = await axios.get(`https://api.github.com/users/${userName}/repos`);
      commit('setUserDetails', response.data);
    } catch (error) {
      console.log(error);
    }
  },

  setSearch({ commit, dispatch, state }, searchValue) {
    commit('setSearchValue', searchValue);
    dispatch('fetchUserPost', { searchValue, page: state.page, perPage: state.perPage });
  },

  setPagniation({ commit, dispatch, state }, page) {
    commit('setPageNumber', page);
    dispatch('fetchUserPost', { searchValue: state.searchValue, page, perPage: state.perPage });
  },
};

const mutations = {
  setUserPost(state, posts) {
    state.posts = posts;
  },
  setSearchValue(state, searchValue) {
    state.searchValue = searchValue;
  },
  setPageNumber(state, page) {
    state.page = page;
  },
  setUserDetails(state, details) {
    state.userDetails = details;
  },
};

export default {
  state: initailState,
  getters,
  actions,
  mutations,
};
