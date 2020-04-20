$(document).ready(function () {
  if ($(window).width() > 768) {
    // do your stuff

    $(".logo").css({ "margin-left": "80px" });
    $(".main-content").css({ "margin-left": "auto", transition: ".5s" });

    $(".width-control").mouseover(function () {
      $(".logo").css({ "margin-left": "260px", transition: ".5s" });
      $(".main-content").css({ "margin-left": "290px", transition: ".6s" });
    });
    $(".width-control").mouseout(function () {
      $(".logo").css({ "margin-left": "80px" });
      $(".main-content").css({ "margin-left": "auto", transition: ".5s" });
    });
  }

  $(window).resize(function () {
    if ($(window).width() > 768) {
      // do your stuff

      $(".logo").css({ "margin-left": "80px" });
      $(".main-content").css({ "margin-left": "auto", transition: ".5s" });

      $(".width-control").mouseover(function () {
        $(".logo").css({ "margin-left": "260px", transition: ".5s" });
        $(".main-content").css({ "margin-left": "290px", transition: ".5s" });
      });
      $(".width-control").mouseout(function () {
        $(".logo").css({ "margin-left": "80px" });
        $(".main-content").css({ "margin-left": "110px" });
      });
    }

    if ($(window).width() < 768) {
      $(".logo").css({ "margin-left": "0px" });
      $(".main-content").css({ "margin-left": "0px" });

      $(".width-control").mouseover(function () {
        $(".logo").css({ "margin-left": "0px", transition: ".5s" });
        $(".main-content").css({ "margin-left": "0px", transition: ".5s" });
      });
      $(".width-control").mouseout(function () {
        $(".logo").css({ "margin-left": "0px" });
        $(".main-content").css({ "margin-left": "0px", transition: ".5s" });
      });
    }
  });
});
