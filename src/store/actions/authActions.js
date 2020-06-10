import { firestore } from "firebase"

export const SignInUser = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({type: 'Login_SUCCESS'});
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err});
        })
    }
}

export const SignUpUser = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                first: newUser.first,
                last: newUser.last,
                phone: newUser.phone,
                gender: newUser.gender,
                role: newUser.role,
                image: newUser.image,
                address: newUser.address,
                createdAt: new Date()
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS'});
        }).catch(err => {
            dispatch({ type: 'SIGNUP_ERROR', err});
            console.log(err.message);
        })
    }
}

export const UpdateProfile = (profile) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        const authId = getState().firebase.auth.uid;

        firestore.collection('users').doc(authId).set({
            ...profile,
            upDatedAt: new Date()
        }).then(() => {
            dispatch({ type: 'PROFILE_UPDATE_SUCCESS'});
        }).catch(err => {
            dispatch({ type: 'PROFILE_UPDATE_ERROR', err});
            console.log(err.message);
        })
    }
}

export const SignOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({type: 'SIGNOUT_SUCCESS'});
        })
    }
}