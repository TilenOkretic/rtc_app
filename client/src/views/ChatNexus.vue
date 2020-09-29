<template>
  <section>
    <p class="title">
      Chat Rooms
    </p>
    <aside class="menu">
      <p class="menu-label">
        General
      </p>
      <ul class="menu-list">
        <li>
          <a class="is-active">Rooms</a>
          <ul>
            <li v-for="room of chat_rooms.slice().reverse()" :key="room.id">
              <router-link :to="{name: 'Chat Room', params: { id: room.id }}">{{room.name}}</router-link>
            </li>
          </ul>
        </li>
      </ul>

    </aside>
  </section>
</template>

<script>
  import {
    mapState,
    mapActions
  } from 'vuex';

  export default {
    mounted() {
      this.init();
    },
    computed: mapState('chatRooms', ['chat_rooms']),
    methods: mapActions('chatRooms', ['init']),
  }
</script>

<style>

  .menu {
    margin-left: 2rem;
  }

  .menu-label {
    color: green;
    font-size: 2rem;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .menu-list a {
    color: white;
  }

  ul {
    margin-left: 1rem;
  }

  ul li {
    margin-left: 1rem;
  }
</style>