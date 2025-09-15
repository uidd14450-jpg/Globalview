const videoFeed = document.getElementById("video-feed");

function uploadVideo() {
  const input = document.getElementById("upload");
  const file = input.files[0];

  if (!file) {
    alert("გთხოვ ატვირთო ვიდეო.");
    return;
  }

  const videoUrl = URL.createObjectURL(file);

  const post = document.createElement("div");
  post.className = "video-post";

  const video = document.createElement("video");
  video.src = videoUrl;
  video.controls = true;
  video.loop = true;
  video.autoplay = false;

  post.appendChild(video);
  videoFeed.prepend(post);

  input.value = ""; // Reset input
}
