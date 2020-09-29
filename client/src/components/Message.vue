<template>
    <div class="holder">
        <div class="in">
            <b-tooltip type="is-light" :triggers="['click']" :auto-close="['outside', 'escape']">
                <template v-slot:content>
                    {{test.user_name}}
                </template>
                <div class="image is-32x32">
                    <img class="is-rounded" :src="test.user_img">
                </div>
            </b-tooltip>
            <!-- <strong>{{test.user_name}}</strong> -->
            <div class="msg-body">
                <p v-if="user.id === test.user_id">{{test.value}}</p>
                <p v-if="user.id != test.user_id" style="background: #b30000;">{{test.value}}</p>
            </div>
        </div>
    </div>

</template>

<script>

    import {mapState} from 'vuex';

    export default {
        name: 'navbar',
        computed: mapState('auth', ['user']),
        props: ['test']
    }
</script>

<style lang="scss">
    .in {
        display: inline-flex;
        align-items: center;
    }

    .in strong {
        color: white;
        margin-left: 5px;
        font-family: sans-serif;
        font-weight: 500;
        border: none;
        box-shadow: none;
    }

    .holder {
        background: #21262b;
        padding: 1rem;
        width: 100%;
        border-left: solid 8px #101214;
    }
    .holder:first-child {
        border-top: solid 8px #101214;
    }

    .header strong {
        color: whiteñ;
    }

    .msg-body {
        margin-left: 0.5rem;
        display: flex;
    }

    .msg-body p {
        font-family: sans-serif;
        padding: 0.7rem;
        border-radius: 70px;
        color: white;
        font-size: 18px;
        background: #9f309f;
    }


    .other {
        background: red;
    }
</style>