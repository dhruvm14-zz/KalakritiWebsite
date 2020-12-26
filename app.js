//NAV SCROLL
function checkScroll() {
  var startY = $(".navbar").height() * 2;

  if ($(window).scrollTop() > startY) {
    $(".navbar").addClass("scrolled");
  } else {
    $(".navbar").removeClass("scrolled");
  }
}
if ($(".navbar").length > 0) {
  $(window).on("scroll load resize", function () {
    checkScroll();
  });
}

//TIMER LOGIC
$(document).ready(function () {
const webinar = "21 Nov 2020";
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
function countdown() {
  const webinarDate = new Date(webinar);
  const curDate = new Date();

  const tSeconds = (webinarDate - curDate) / 1000;
  const days = Math.floor(tSeconds / 3600 / 24);
  const hours = Math.floor(tSeconds / 3600) % 24;
  const mins = Math.floor(tSeconds / 60) % 60;
  const seconds = Math.floor(tSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minsEl.innerHTML = mins;
  secondsEl.innerHTML = seconds;
}
// countdown();
setInterval(countdown, 1000);
});


function bootstrapAlert() {
  alert("PORTFOLIO WILL BE LIVE SOON !!!");
}

$(document).ready(function () {
  $(".galleryList").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".pic").show(1000);
    } else {
      $(".pic").not("." + value).hide(1000);
      $(".pic").filter("." + value).show(1000);
    }
  });
  $(".galleryList").click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  })
});

$(".img-link").click(function(){
  const val = $(this).find(".pic").find('img').attr('src');
  $(".modal-content").find('img').attr('src',val);
})