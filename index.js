const posts = [
  {
    name: 'Esha Gupta',
    username: 'egupta',
    location: 'Madrid, Spain',
    avatar: 'images/avatar-esha.jpg',
    post: 'images/post-esha.jpg',
    caption: '💔',
    likes: 21,
    verified: true,
  },
  {
    name: 'Lil Durk',
    username: 'lildurk',
    location: 'Chicago, Illinois',
    avatar: 'images/avatar-lildurk.jpg',
    post: 'images/post-lildurk.jpg',
    caption: 'You rich rich when you rich after taxes 💛 …. Loading',
    likes: 469,
    verified: true,
  },
  {
    name: 'Sanket Mahi',
    username: 'sanket_mahi33',
    location: 'Patnitop, Jammu',
    avatar: 'images/avatar-sanket.jpg',
    post: 'images/post-sanket.jpg',
    caption: '🚀',
    likes: 71,
    verified: false,
  },
];

// document.addEventListener('DOMContentLoaded', function () {
//   renderShit(indexOfPost);

//   imageEl.addEventListener('dblclick', function () {
//     likes++;
//     renderLikes();
//   });

//   likeBtn.addEventListener('click', function () {
//     likes++;
//     renderLikes();
//   });

//   function renderLikes() {
//     likesEl.textContent = `${likes} likes`;
//   }

//   function renderShit(indexOfPost) {
//     avatarEl.src = posts[indexOfPost].avatar;
//     nameEl.textContent = posts[indexOfPost].name;
//     locationEl.textContent = posts[indexOfPost].location;
//     imageEl.src = posts[indexOfPost].post;
//     renderLikes();
//     captionEl.innerHTML = `<div class="post-caption" id="caption"><span id="username">${posts[indexOfPost].username}</span> ${posts[indexOfPost].caption}</div>`;
//   }
// });

document.addEventListener('DOMContentLoaded', function () {
  const mainEl = document.querySelector('main');

  renderAllPosts();
  addEventListeners();
  checkVerification();

  function renderAllPosts() {
    posts.forEach((post, index) => {
      postHTML = createPostHTML(post, index);
      mainEl.innerHTML += postHTML;
    });
  }

  function createPostHTML(post, index) {
    return `
      <div class="post-container">
            <div class="post-head">
                <img id="avatar-${index}" class='poster-avatar-img' src='${post.avatar}' alt='${post.name}'>
                <div class="poster-info">
                    <div class='username-container' id='username-container-${index}'>
                      <div class="poster-username" id="name-${index}">${post.name}</div>
                      <img class='checkmark' src='check.png'>
                    </div>
                    <div class="poster-location" id="location-${index}">${post.location}</div>
                </div>
            </div>
            <img class="post-image" id="post-image-${index}" src='${post.post}'>
            <div class="post-footer">
                <div class="post-controls">
                    <img id="like-btn-${index}" class="controls-img" src="images/icon-heart.png">
                    <img class="controls-img" src="images/icon-comment.png">
                    <img class="controls-img" src="images/icon-dm.png">
                </div>
                <div class="post-likes" id="likes-${index}">${post.likes} likes</div>
                <div class="post-caption" id="caption-${index}"><span id="username-${index}">${post.username}</span> ${post.caption}</div>
            </div>
        </div>
    `;
  }

  function checkVerification() {
    posts.forEach((post, index) => {
      const usernameContainerEl = document.getElementById(
        `username-container-${index}`
      );
      if (post.verified) {
        usernameContainerEl.innerHTML = `<div class="poster-username" id="name-${index}">${post.name}</div>
        <img class='checkmark' src='check.png'>`;
      } else {
        usernameContainerEl.innerHTML = `<div class="poster-username" id="name-${index}">${post.name}</div>
        <img class='checkmark' id='hide' src='check.png'>`;
      }
    });
  }

  function addEventListeners() {
    posts.forEach((post, index) => {
      const likeBtn = document.getElementById(`like-btn-${index}`);
      const imageEl = document.getElementById(`post-image-${index}`);

      likeBtn.addEventListener('click', function () {
        incrementLikes(index);
      });

      imageEl.addEventListener('dblclick', function () {
        incrementLikes(index);
      });
    });

    function incrementLikes(index) {
      posts[index].likes++;
      renderLikes(index);
    }

    function renderLikes(index) {
      const likesEl = document.getElementById(`likes-${index}`);
      likesEl.textContent = `${posts[index].likes} likes`;
    }
  }
});
