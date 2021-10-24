$(function () {
    function getPosts() {
      return $.get({
        url: "https://jsonkeeper.com/b/TJ06",
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
                ${post.posttime}
            </div>
            <h4>${post.posttext}</h4>
            <div class="btm-container">
                <a href=""><img src="like.png" alt="like"></a>
            </div>
        </div>
        `);
        }
      })
      .catch(function (e) {
        alert(e);
    });
  });