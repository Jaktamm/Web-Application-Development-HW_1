$(function () {
    /*
    //As the get request from posts.json file works only when the webpage is opened with a live server,
    //then the default option is to use the web endpoint to gather the data from json.

    function getPosts() {
      return $.get({
        url: "posts.json",
        success: function (response) {
          return response;
        },
        error: function (e) {
          alert(`error retrieving posts: ${JSON.stringify(e)}`);
        },
      });
    }
    */

    var dropDown = document.querySelector('.js-drop-down');

    dropDown.addEventListener('click', function( event ){
    this.classList.toggle('dropdown-content--visible');
    });

    dropDown.addEventListener('click', function( event ){
    this.classList.toggle('dropdown_content--visible');
    });

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