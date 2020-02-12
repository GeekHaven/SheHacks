$(document).ready(function() {
  function updateTime() {
    $('div[name="days"]').html(countdownTime(hackathonDate).days + "<label>Days</label>");
    $('div[name="hours"]').html(countdownTime(hackathonDate).hours + "<label>Hours</label>");
    $('div[name="minutes"]').html(countdownTime(hackathonDate).minutes + "<label>Minutes</label>");
    $('div[name="seconds"]').html(countdownTime(hackathonDate).seconds + "<label>Seconds</label>");
  }
  function fades() {
    $("#countdown div").fadeOut(0);
    for(i = 0; i < $("#countdown div").length; i++) {
      $("#countdown div:nth-of-type(" + (i+1) + ")").fadeIn(i * 400 + 1000);
    }
  }
  $(".qaa").addClass("collapsed");
  $(".qaa").click(function() {
    $(this).toggleClass("collapsed");
    $(this).children(".arrow").toggleClass("flipped");
  });
  if($(document).scrollTop() == 0) {
    $("#hint").show();
  }
  else {
    $("#hint").hide();
  }
  $(document).scroll(function() {
    if($(document).scrollTop() == 0) {
      $("#hint").show();
    }
    else {
      $("#hint").hide();
    }
  });
  updateTime();
  fades();
  setInterval(function() {
    updateTime();
  },1000);
  $(document).on('scroll',function() {
    if($(window).scrollTop() > ($(window).height() * .8)) {
      $("#registrationButton").fadeOut(50);
    }
    else {
      $("#registrationButton").fadeIn();
    }
  });
});
var hackathonDate = new Date("2020-03-21T21:00:00");

function countdownTime(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
