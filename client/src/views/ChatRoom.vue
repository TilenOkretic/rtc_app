<template>
    <section class="chat_box">
        <h1 class="title">{{chat_room.name}}</h1>
        <div class="chatbox-main">
            <ul>
                <li>
                    <div class="messages">
                        <messageElm v-for="message of messages" :key="message.id" :test="message"></messageElm>
                        <span id="test"></span>
                    </div>
                    <form class="inputHolder" @submit.prevent="onCreateMessage(message)">
                        <input class="input" placeholder="Write A Message:"
                            style="font-size:20px; border: none; color: white; background: #9c404b;"
                            v-model="message.value">
                        </input>
                        <button class="button is-success" style="background: #9c404b;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-send">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg> </button>
                    </form>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    import {
        mapState,
        mapActions,
        mapGetters
    } from 'vuex';

    import db from '@/db';

    import messageElm from '@/components/Message.vue';

    import {
        firestoreAction
    } from 'vuexfire';

    export default {
        data: () => ({
            message: {
                id: '',
                user_id: '',
                value: ''
            }
        }),
        components: {
            messageElm
        },
        async mounted() {
            this.initChatRoom(this.$route.params.id);

        },
        watch: {
            '$route.params.id'() {
                this.initChatRoom(this.$route.params.id);
            },
            chat_room() {
                if (this.chat_room.id) {
                    this.initMessages(this.chat_room.id);
                }
            },
        },
        updated() {
         document.querySelector('#test').scrollIntoView({behavior: "smooth"})
        },
        computed: {
            ...mapState('chatRoom', ['messages']),
            ...mapGetters('chatRoom', ['chat_room'])
        },
        methods: {
            ...mapActions('chatRoom', ['createMessage', 'initChatRoom', 'initMessages']),
            async onCreateMessage() {
                if (this.message.value) {
                    this.createMessage(this.message);
                    this.message = {
                        id: '',
                        user_id: '',
                        value: ''
                    }
                }
            },
            async getUserById(id) {
                if (id) {
                    const usr = await db.collection('users').doc(id);
                    const doc = await usr.get();
                    // console.log(doc.data().name);
                    return doc.data().name;
                }
            }
        },
    }
</script>

<style>
    .title {
        color: white;
        font-size: 3rem;
        font-family: 'Courier New', Courier, monospace;
        font-weight: 500;
    }

    .inputHolder {
        display: inline-flex;
        width: 100%;
    }

    .inputHolder button {
        display: inline-flex;
        height: auto;
    }

    .chat_box {
        background: #4e5a65;
        border-radius: 25px;
        padding: 20px;
    }

    .messages {
        overflow-y: auto;
        max-height: 460px;
    }

    .input::placeholder {
        color: rgba(255, 255, 255, 0.39);
    }

    .messages::-webkit-scrollbar {
        width: 0.75rem;
    }

    .messages::-webkit-scrollbar-track {
        background: #101214;
    }

    .messages::-webkit-scrollbar-thumb {
        background: #9c404b;
    }
</style>