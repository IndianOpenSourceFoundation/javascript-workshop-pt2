var theme_btn = document.getElementById("theme-btn");
var body = document.getElementById("body");
var app = document.getElementById("app");

// change ui theme
theme_btn.addEventListener("click", function() {
  var btn_text = theme_btn.textContent;

  if (btn_text == "DARK") {
    body.style.backgroundColor = "#3c3c3c";
    app.style.backgroundColor = "#4d4d4d";
    app.style.color = "#eeeeee";
    theme_btn.textContent = "LIGHT";
  } else {
    body.style.backgroundColor = "#eeeeee";
    app.style.backgroundColor = "#ffffff";
    app.style.color = "#4d4d4d";
    theme_btn.textContent = "DARK";
  }
});

// changing number of likes on the post
var likes = 7;
var like_btn = document.getElementById("like-btn");
var display_likes = document.getElementById("display-likes");
like_btn.addEventListener("click", function() {
  likes = likes + 1;
  // console.log(likes);
  display_likes.textContent = "Likes: " + likes;
});
