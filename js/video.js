const videoSection = document.querySelector(".video");
const video = document.querySelector(".video__box");

document.addEventListener("scroll", function () {
    videoSection.style.padding = "0px 0px 64px";
    video.style.width = "100vw";
    video.style.borderRadius = "0px";
});