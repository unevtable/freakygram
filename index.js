const posts = [
  {
    name: 'Vincent van Gogh',
    username: 'vincey1853',
    location: 'Zundert, Netherlands',
    avatar: 'images/avatar-vangogh.jpg',
    post: 'images/post-vangogh.jpg',
    caption: 'just took a few mushrooms lol',
    likes: 21,
  },
  {
    name: 'Gustave Courbet',
    username: 'gus1819',
    location: 'Ornans, France',
    avatar: 'images/avatar-courbet.jpg',
    post: 'images/post-courbet.jpg',
    caption: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: 'Joseph Ducreux',
    username: 'jd1735',
    location: 'Paris, France',
    avatar: 'images/avatar-ducreux.jpg',
    post: 'images/post-ducreux.jpg',
    caption:
      'gm friends! which coin are YOU stacking up today?? post below and WAGMI!',
    likes: 152,
  },
];

let indexOfPost = 0;
let likes = Number(posts[indexOfPost].likes);
const likeBtn = document.getElementById('like-btn');
const avatarEl = document.getElementById('avatar');
const nameEl = document.getElementById('name');
const locationEl = document.getElementById('location');
const imageEl = document.getElementById('post-image');
const likesEl = document.getElementById('likes');
const usernameEl = document.getElementById('username');
const captionEl = document.getElementById('caption');

document.addEventListener('DOMContentLoaded', function () {
  renderShit(indexOfPost);

  imageEl.addEventListener('dblclick', function () {
    likes++;
    renderLikes();
  });

  likeBtn.addEventListener('click', function () {
    likes++;
    renderLikes();
  });

  function renderLikes() {
    likesEl.textContent = `${likes} likes`;
  }

  function renderShit(indexOfPost) {
    avatarEl.src = posts[indexOfPost].avatar;
    nameEl.textContent = posts[indexOfPost].name;
    locationEl.textContent = posts[indexOfPost].location;
    imageEl.src = posts[indexOfPost].post;
    renderLikes();
    captionEl.innerHTML = `<div class="post-caption" id="caption"><span id="username">${posts[indexOfPost].username}</span> ${posts[indexOfPost].caption}</div>`;
  }
});
