<template>
    <nav class="navbar">
        <div class="navbar-brand">
            <a class="navbar-item nav-title" href="/#/">
                Anartist Chat ⦻
            </a>
            <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div id="navbarExampleTransparentExample" class="navbar-menu is-active">
            <div class="navbar-start">
                <div class="navbar-item has-dropdown is-hoverable">
                </div>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                <p v-if="isLoggedIn" class="contorl is-active logged-in">
                    <section class="avatar">
                        <figure class="image is-32x32">
                            <img class="is-rounded" :src="user.image">
                        </figure>
                        <figcaption>{{user.name}}</figcaption>
                    </section>
                    <a class="button is-info" @click="logout()">Log Out</a>
                </p>
                </div>
                <div class="navbar-item">
                <p v-if="!isLoggedIn" class="contorl is-active logged-in">
                    <a class="button is-info" @click="login()">Log In With Google</a>
                </p>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import {
        mapActions,
        mapState
    } from 'vuex';

    export default {
        name: 'navbar',
        computed: mapState('auth', ['user', 'isLoggedIn']),
        methods: mapActions('auth', ['login', 'logout']),
    }
</script>

<style lang="scss">

    .navbar {
        background: #13161a;
    }

    .nav-title {
        font-family: 'Courier New', Courier, monospace;
        font-size: 1.8rem;
        font-weight: 560;
        color: white;
    }

    .avatar {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin: 5px;
    }

    .logged-in {
        display: flex;
        flex-direction: row;
    }
</style>