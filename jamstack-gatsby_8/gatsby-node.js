const admin = require("firebase-admin");
const { type } = require("os");
const path= require("path");
const { Children } = require("react");

exports.sourceNodes = async ({actions, createNodeId, createContentDigest}) => {
    const {createNode} = actions;

    if(!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert(require("./firebase-key.json")),
        });
    }

    const db = admin.firestore();

    const snapshot = await db.collection("usuarios").get();

    snapshot.forEach(doc => {
        const data = doc.data();

        createNode({
            ...data,
            id: createNodeId(`firestore-user-${doc.id}`),
            parent: null,
            Children: [],
            internal: {
                type: "FirestoreUser",
                contentDigest: createContentDigest(data),
            },
        });
    });
}