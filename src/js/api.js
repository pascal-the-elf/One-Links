// Require Firebase Realtime Database
function getCollection(collection_id) {
    return firebase.database().ref('collections/' + collection_id).on('value', snapshot => {
        doSomething(snapshot.val());
    });
}

function makeCollection() {
    
}

function updateCollection() {
    
}
