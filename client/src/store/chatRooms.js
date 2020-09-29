import {
    firestoreAction
} from 'vuexfire';
import db from '@/db';

const state = {
    chat_rooms: [],
};

const actions = {
    init: firestoreAction( ({ bindFirestoreRef }, ref) => {
        return bindFirestoreRef('chat_rooms', db.collection('chat_rooms'))
    }),
};

export default {
    namespaced: true,
    state,
    actions
}