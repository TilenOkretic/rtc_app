<template>
  <div class="home">
    <div v-if="!isLoggedIn" class="has-text-centered" style="">
      <a v-if="!isLoggedIn" style="margin: 15%" class="button btn-hover is-danget is-size-5-mobile is-size-2-desktop" @click="login()">Login With Google</a>
    </div>
    <div v-if="isLoggedIn">
      <img :src="user.image" style="width:68px;">
      <h1>Name: {{user.name}}</h1>
    </div>
  </div>
</template>

<script>

import {mapState, mapActions} from 'vuex';

export default {
  computed: mapState('auth', ['user', 'isLoggedIn']),
  methods: mapActions('auth', ['login'])
}

</script>

<style>
.btn-hover{
border-radius: 35px;
font-family: 'Courier New', Courier, monospace;
}
.btn-hover:hover{
background-color: #722f37;
color: white;
}
</style>