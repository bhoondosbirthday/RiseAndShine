// document.getElementById("backgroundAudio").onended = function () {
// $(".loaderBackground1").addClass("loaderBackgroundAnimation1");}
// $(".loaderBackground2").addClass("loaderBackgroundAnimation1");}
// $(".loaderBackground1").addClass("loaderBackgroundAnimation1");
// $(".loaderBackground2").addClass("loaderBackgroundAnimation2");
// $(".loaderBackground3").addClass("loaderBackgroundAnimation3");
// $(".loaderBackground4").addClass("loaderBackgroundAnimation4");
// $(".loaderBackground5").addClass("loaderBackgroundAnimation5");

document.getElementById("backgroundAudio").onplay = function () {
  

  setTimeout(function () {
    $(".line1").fadeIn();
    $(".gupyVideo").fadeIn();
  $(".gupyVideo").css("display","block");
  }, 4900);
  setTimeout(function () {
    $(".line1").fadeOut();
    $(".line2").fadeIn()
  }, 20900);
  setTimeout(function () {
    $(".line2").fadeOut();
    $(".line3").fadeIn()
  }, 26000);
  setTimeout(function () {
    $(".line3").fadeOut();
    $(".line4").fadeIn()
  }, 31300);
  setTimeout(function () {
    $(".line4").fadeOut();
    $(".line5").fadeIn()
  }, 36500);
  setTimeout(function () {
    $(".line5").fadeOut();
    $(".line6").fadeIn()
  }, 42000);
  setTimeout(function () {
    $(".line6").fadeOut();
    $(".line7").fadeIn()
  }, 47400);
  setTimeout(function () {
    $(".line7").fadeOut();
    $(".line8").fadeIn()
  }, 52700);
  setTimeout(function () {
    $(".gupyVideo").fadeOut();
    $(".image").fadeIn();

  }, 58000);
  setTimeout(function () {
    $(".line8").fadeOut();
    $(".line9").fadeIn()
  }, 63600);
  setTimeout(function () {
    $(".line9").fadeOut();
    $(".line10").fadeIn();
    $(".gupyVideo").fadeIn();
    $(".gupyVideo").css("display","block");
    $(".image").fadeOut();
  }, 74250);
  setTimeout(function () {
    $(".line10").fadeOut();
    $(".line11").fadeIn()
  }, 79000);
  setTimeout(function () {
    $(".line11").fadeOut();
    $(".line12").fadeIn()
  }, 84800);
  setTimeout(function () {
    $(".line12").fadeOut();
    $(".line13").fadeIn()
  }, 90200);
  setTimeout(function () {
    $(".line13").fadeOut();
    $(".line14").fadeIn()
  }, 95400);
  setTimeout(function () {
    $(".line14").fadeOut();
    $(".line15").fadeIn()
  }, 100800);
  setTimeout(function () {
    $(".line15").fadeOut();
    $(".line16").fadeIn()
    $(".image").attr("src", "files/draw2.jpg");
  }, 105800);
  setTimeout(function () {
    $(".line16").fadeOut();
    $(".line17").fadeIn()
  }, 110800);
}

document.getElementById("gupyVideo").onended = function(){
  $(".gupyVideo").fadeOut();
  $(".image").fadeIn();
}


document.getElementById("backgroundAudio").onended = function () {
  $(".subtitle").fadeOut();
  setTimeout(() => {
    $(".loaderBackground1").addClass("loaderBackgroundAnimation1")
    $(".loaderBackground2").addClass("loaderBackgroundAnimation1")
  }, 2000);

  setTimeout(() => {
$("loaderBackground2").css("display", "none");  }, 5000);
setTimeout(() => {
  $("loaderBackground1").css("display", "none");  }, 5000);
}



// $(".owlImage").hover(function () {
//     // over
//     $(".owlImage").attr("src", "files/owl wake_1.png");
//     $("#backgroundAudio").load();
//     document.getElementById("backgroundAudio").play;
//   }, function () {
//     // out
//     $(".owlImage").attr("src", "files/owl sleep.png");
//   }
// );

var audio = $("#damonAudio")[0];
var count = 0;
$(".owlImage").mouseenter(function () {
  if(count<3){
  audio.load();
  audio.play();} count++;
});


$(function () { // you can wrap it here with in document ready block
  var i = 0;
  $(".owlImage").click(function () {
    i++;
    switch (i) {
      case 1:
        $(".caption1").text("UMMMMMMMMMMM");
        $(".caption1Div").css("display", "block");
        break;
      case 2:
        $(".caption2").text("UMMMMMMMMMMM WHAT????");
        $(".caption1Div").css("display", "none");
        $(".caption2Div").css("display", "block");
        break;
      case 3:
        $(".caption1").text("HEY ARE YOU MADDD??");
        $(".caption1Div").css("display", "block");
        $(".caption2Div").css("display", "none");
        break;
      case 4:
        $(".caption2").text("BHOOOONDOOO NAA KR NAAA");
        $(".caption1Div").css("display", "NONE");
        $(".caption2Div").css("display", "BLOCK");
        break;
      case 5:
        $(".caption1").text("SON DE NAA YRRRRR");
        $(".caption1Div").css("display", "BLOCK");
        $(".caption2Div").css("display", "NONE");
        break;
      case 6:
        $(".caption2").text("YAAAAR NAA TANG KROOO NAAAA");
        $(".caption1Div").css("display", "NONE");
        $(".caption2Div").css("display", "BLOCK");
        break;
      case 7:
        $(".caption1").text("MEIN YAAR SHRAAAP DEDU");
        $(".caption1Div").css("display", "BLOCK");
        $(".caption2Div").css("display", "NONE");
        break;
      case 8:
        $(".caption2").text("TERI BOOBIES CHERRY BNAA DENI O MEIN");
        $(".caption1Div").css("display", "NONE");
        $(".caption2Div").css("display", "BLOCK");
        break;
      case 9:
        $(".caption1").text("BUFFY NU KEHNA TENU DANDI BHORDE");
        $(".caption1Div").css("display", "BLOCK");
        $(".caption2Div").css("display", "NONE");
        break;
      case 10:
        $(".caption2").text("MEIN NAA AUNTY NU KEH DENA RONI BHEDIYEEE");
        $(".caption1Div").css("display", "NONE");
        $(".caption2Div").css("display", "BLOCK");
        break;
      case 11:
        $(".caption1").text("YAAAAAAR NAAA KR NAAAAAA... MUMMMAAAAA!!!!");
        $(".caption1Div").css("display", "BLOCK");
        $(".caption2Div").css("display", "NONE");
        break;
      case 12:
        $(".caption2").text("YAAAR AA BHOOOONDO TANG KRI JAANDI AAA");
        $(".caption1Div").css("display", "NONE");
        $(".caption2Div").css("display", "BLOCK");
        break;
      case 13:
        $(".caption1").text("KI KIHAAAAA HAKK AA OHDAAAA??");
        $(".caption1Div").css("display", "BLOCK");
        $(".caption2Div").css("display", "NONE");
        break;
      case 14:
        $(".caption2").text("YAAAAR EH KI GL HOYIIII");
        $(".caption1Div").css("display", "NONE");
        $(".caption2Div").css("display", "BLOCK");
        break;
      case 15:
        $(".caption1").text("HUN TU UTHAAKE REHNAA AA MEINU??");
        $(".caption1Div").css("display", "BLOCK");
        $(".caption2Div").css("display", "NONE");
        break;
      case 16:
        $(".caption2").text("LAI FER");
        $(".owlImage").attr("src", "files/owl wake_1.png")
        $(".caption1Div").css("display", "NONE");
        $(".caption2Div").css("display", "BLOCK");
        break;
      case 17:
        $(".caption1").text("NAAA HUN DARDI KYO AAA??");
        $(".caption1Div").css("display", "BLOCK");
        $(".caption2Div").css("display", "NONE");
        break;
      case 18:
        $(".caption2").text("EH TE TERA BIRTHDAY AA RIHA");
        $(".caption1Div").css("display", "NONE");
        $(".caption2Div").css("display", "BLOCK");
        break;
      case 19:
        $(".caption1").text("TAAN CHHADD RIHAAA");
        $(".caption1Div").css("display", "BLOCK");
        $(".caption2Div").css("display", "NONE");
        break;
      case 20:
        $(".caption2").text("KI KIHAA NHII TE KI KRNAA C??");
        $(".caption1Div").css("display", "NONE");
        $(".caption2Div").css("display", "BLOCK");
        break;
      case 21:
        $(".caption1").text("MEIN NAA TERA KEEMA BNAAKE NAAA");
        $(".caption1Div").css("display", "BLOCK");
        $(".caption2Div").css("display", "NONE");
        break;
      case 22:
        $(".caption2").text("KABOOTRAA NU PAA DENA C");
        $(".caption1Div").css("display", "NONE");
        $(".caption2Div").css("display", "BLOCK");
        break;
      case 23:
        $(".caption1").text("HAAAN JAANDE AA MEINU");
        $(".caption1Div").css("display", "BLOCK");
        $(".caption2Div").css("display", "NONE");
        break;
      case 24:
        $(".caption2").text("HUN CHALL BHAJJ JAAAAA");
        $(".caption1Div").css("display", "NONE");
        $(".caption2Div").css("display", "BLOCK");
        break;
      case 25:
        $(".caption1").text("PARTY KHTM AJJ DI");
        $(".caption1Div").css("display", "BLOCK");
        $(".caption2Div").css("display", "NONE");
        break;
      case 26:
        $(".caption2").text("BAAKI KALLL");
        $(".caption1Div").css("display", "NONE");
        $(".caption2Div").css("display", "BLOCK");
        break;
      case 27:
        $(".caption1").text("TATTTAAAAA");
        $(".caption1Div").css("display", "BLOCK");
        $(".caption2Div").css("display", "NONE");
        break;
      case 28:
        $(".caption2").text("LOVE LOVE ❤❤");
        $(".caption1Div").css("display", "NONE");
        $(".caption2Div").css("display", "BLOCK");
        break;
      case 29:
        $(".caption1Div").css("display", "NONE");
        $(".caption2Div").css("display", "NONE");
        $(".loaderbackground3").css("display", "flex");
      default:
        break;
    }
  });
});


$(".headerIcon").click(function (e) {
  e.preventDefault();
  $("#videoSource").attr("src", "files/Presentation3.mp4");
  document.getElementById("backgroundVideo").load();
  $(".youtubeVideo").css("display", "flex");
  document.getElementById("backgroundAudio").pause();

});

$(".closeIcon").click(function (e) {
  e.preventDefault();
  $(".youtubeVideo").css("display", "none");
  document.getElementById("backgroundAudio").play();
  document.getElementById("backgroundVideo").pause();
});

$(".viewAnswerButton").click(function (e) {
  e.preventDefault();
  var answerNumber = "files/" + this.id + ".mp4";
  console.log(answerNumber);
  $("#videoSource").attr("src", answerNumber);
  document.getElementById("backgroundVideo").load();
  $(".youtubeVideo").css("display", "flex");
  document.getElementById("backgroundAudio").pause();
});

$(".outerBonusButton").click(function (e) {
  e.preventDefault();

  document.getElementById("backgroundAudio").pause();
  document.getElementById("bonusAudio").play();

});



document.getElementById("bonusAudio").onended = function () {
  document.getElementById("backgroundAudio").play();
}

document.getElementById("bonusAudio").onplay = function () {
  document.getElementById("backgroundAudio").pause();
}
document.getElementById("bonusAudio").onpause = function () {
  document.getElementById("backgroundAudio").play();
}

document.getElementById("quizAudio").onended = function () {
  document.getElementById("backgroundAudio").play();
}

document.getElementById("quizAudio").onplay = function () {
  document.getElementById("backgroundAudio").pause();
}
document.getElementById("quizAudio").onpause = function () {
  document.getElementById("backgroundAudio").play();
}



$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  mouseDrag: true,
  touchDrag: true,
  rewind: true,
  autoplay: true,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1
    },
    650: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
})