import fetch from "node-fetch";

export const sourceNodes = async ({actions, createNodeId, createContentDigest}) => {

    const {createNode} = actions;

    const usersResponse = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await usersResponse.json();

    users.forEach(user => {
        createNode({
            ...user, //notação "spread"
            id: createNodeId(`User-${user.id}`),
            parent: null,
            children: [],
            internal: {
                type: "User",
                contentDigest: createContentDigest(user),
            },
        });
    });

    const postResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await postResponse.json();

    posts.forEach(post => {
        createNode({
            ...post, //notação "spread"
            id: createNodeId(`Post-${post.id}`),
            parent: null,
            children: [],
            internal: {
                type: "Post",
                contentDigest: createContentDigest(post),
            },
        });
    });
}