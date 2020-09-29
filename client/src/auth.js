import firebase from '@/firebase';
import store from '@/store';
import db from '@/db';
import router from '@/router/index';

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        if(user.user){
            user = user.user;
        }
        const new_usr = {
            id: user.uid,
            name: user.displayName,
            image: user.photoURL,
            created_at: firebase.firestore.FieldValue.serverTimestamp()
        };

        db.collection('users').doc(new_usr.id).set(new_usr); 
        store.commit('auth/setUser', new_usr);
        router.push('/rooms')
    }else{
        store.commit('auth/setUser', null);
    }
});