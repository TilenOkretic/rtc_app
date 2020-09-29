import {
    firestoreAction
} from 'vuexfire';
import firebase from '@/firebase';
import db from '@/db';

const messages = db.collection('messages');
const users = db.collection('users');

const state = {
    chat_rooms: [],
    messages: [],
    user: {}
};

const getters = {
    chat_room: (state) => state.chat_rooms[0] ? state.chat_rooms[0] : {},
}

const actions = {
    async createMessage({getters}, msg){
        console.log(firebase.auth().currentUser);
        const result = messages.doc();
        msg.id = result.id;
        msg.chat_room_id =  getters.chat_room.id;
        msg.user_id = firebase.auth().currentUser.uid;
        msg.user_name = firebase.auth().currentUser.displayName;
        msg.user_img = firebase.auth().currentUser.photoURL;
        msg.created_at = firebase.firestore.FieldValue.serverTimestamp();
        messages.doc(msg.id).set(msg);
    },
    initChatRoom: firestoreAction( ({ bindFirestoreRef }, id) => {
        return bindFirestoreRef('chat_rooms', db.collection('chat_rooms').where('id', '==', id));
    }),
    initMessages: firestoreAction(({ bindFirestoreRef }, chat_room_id) => {
        const querry = messages.where('chat_room_id', '==', chat_room_id);
        bindFirestoreRef('messages',querry.orderBy('created_at', 'asc'));    
    }),
};

export default {
    namespaced: true,
    state,
    actions,
    getters
}