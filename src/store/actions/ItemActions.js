export const PostItem = (item) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        const senderId = getState().firebase.auth.uid;
        firestore.collection('items').add({
            ...item,
            state: '1',
            senderId: senderId,
            createdAt: new Date()                                                                                                                                                
        }).then(() => {
             dispatch({ type: 'CREATE_PROJECT', item});
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err})
        })
    }
}