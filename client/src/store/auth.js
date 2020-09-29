import firebase from '@/firebase';

const state = {
    user: {},
    isLoggedIn: false,
  };
  
  const mutations = {
    setUser(state, user) {
      if (user) {
        state.user = user;
        state.isLoggedIn = true;
        console.log('state: ', state.user.name);
      } else {
        state.user = {};
        state.isLoggedIn = false;
      }
    },
  };

const actions = {
    async login() {
        const provider = new firebase.auth.GoogleAuthProvider();
        await firebase.auth().signInWithPopup(provider);
    },
    async logout() {
      console.log('signing out');
      await firebase.auth().signOut();
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
  };