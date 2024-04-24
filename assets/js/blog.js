const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
const postsList = document.getElementById('postsList');
posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.innerHTML = `<h3>${post.title}</h3><p>${post.content} - ${post.username}</p>`;
    postsList.appendChild(postElement);
});