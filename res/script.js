$(function () {
    function getPosts() {
      return $.get({
        url: "https://api.npoint.io/d064e2c9349997dea20f",
        success: function (response) {
          return response;
        },
        error: function (e) {
          alert(`error retrieving posts: ${JSON.stringify(e)}`);
        },
      });
    }

    getPosts()
      .then((res) => {
        for (let post of res) {
          $(".flex-container").append(`
        <div class="post">
            <div class="post-header">
                <img src="images/profile.jpg" class="avatar">
                ${post.posttime}
            </div>
            <div class="img-container">
                <img src="${post.img}">
            </div>
            <h4>${post.posttext}</h4>
            <div class="btm-container">
                <a href=""><img src="images/like.png" alt="like"></a>
            </div>
        </div>
        `);
        }
      })
      .catch(function (e) {
        alert(e);
    });
  });