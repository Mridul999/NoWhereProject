// ====================Slider js==============
window.RS_MODULES = window.RS_MODULES || {};
window.RS_MODULES.modules = window.RS_MODULES.modules || {};
window.RS_MODULES.waiting = window.RS_MODULES.waiting || [];
window.RS_MODULES.defered = true;
window.RS_MODULES.moduleWaiting = window.RS_MODULES.moduleWaiting || {};
window.RS_MODULES.type = "compiled";
function setREVStartSize(e) {
  //window.requestAnimationFrame(function() {
  window.RSIW = window.RSIW === undefined ? window.innerWidth : window.RSIW;
  window.RSIH = window.RSIH === undefined ? window.innerHeight : window.RSIH;
  try {
    var pw = document.getElementById(e.c).parentNode.offsetWidth,
      newh;
    pw =
      pw === 0 || isNaN(pw) || e.l == "fullwidth" || e.layout == "fullwidth"
        ? window.RSIW
        : pw;
    e.tabw = e.tabw === undefined ? 0 : parseInt(e.tabw);
    e.thumbw = e.thumbw === undefined ? 0 : parseInt(e.thumbw);
    e.tabh = e.tabh === undefined ? 0 : parseInt(e.tabh);
    e.thumbh = e.thumbh === undefined ? 0 : parseInt(e.thumbh);
    e.tabhide = e.tabhide === undefined ? 0 : parseInt(e.tabhide);
    e.thumbhide = e.thumbhide === undefined ? 0 : parseInt(e.thumbhide);
    e.mh =
      e.mh === undefined || e.mh == "" || e.mh === "auto"
        ? 0
        : parseInt(e.mh, 0);
    if (e.layout === "fullscreen" || e.l === "fullscreen")
      newh = Math.max(e.mh, window.RSIH);
    else {
      e.gw = Array.isArray(e.gw) ? e.gw : [e.gw];
      for (var i in e.rl)
        if (e.gw[i] === undefined || e.gw[i] === 0) e.gw[i] = e.gw[i - 1];
      e.gh =
        e.el === undefined ||
        e.el === "" ||
        (Array.isArray(e.el) && e.el.length == 0)
          ? e.gh
          : e.el;
      e.gh = Array.isArray(e.gh) ? e.gh : [e.gh];
      for (var i in e.rl)
        if (e.gh[i] === undefined || e.gh[i] === 0) e.gh[i] = e.gh[i - 1];

      var nl = new Array(e.rl.length),
        ix = 0,
        sl;
      e.tabw = e.tabhide >= pw ? 0 : e.tabw;
      e.thumbw = e.thumbhide >= pw ? 0 : e.thumbw;
      e.tabh = e.tabhide >= pw ? 0 : e.tabh;
      e.thumbh = e.thumbhide >= pw ? 0 : e.thumbh;
      for (var i in e.rl) nl[i] = e.rl[i] < window.RSIW ? 0 : e.rl[i];
      sl = nl[0];
      for (var i in nl)
        if (sl > nl[i] && nl[i] > 0) {
          sl = nl[i];
          ix = i;
        }
      var m =
        pw > e.gw[ix] + e.tabw + e.thumbw
          ? 1
          : (pw - (e.tabw + e.thumbw)) / e.gw[ix];
      newh = e.gh[ix] * m + (e.tabh + e.thumbh);
    }
    var el = document.getElementById(e.c);
    if (el !== null && el) el.style.height = newh + "px";
    el = document.getElementById(e.c + "_wrapper");
    if (el !== null && el) {
      el.style.height = newh + "px";
      el.style.display = "block";
    }
  } catch (e) {
    console.log("Failure at Presize of Slider:" + e);
  }
  //});
}
if (typeof revslider_showDoubleJqueryError === "undefined") {
  function revslider_showDoubleJqueryError(sliderID) {
    console.log(
      "You have some jquery.js library include that comes after the Slider Revolution files js inclusion."
    );
    console.log("To fix this, you can:");
    console.log(
      "1. Set 'Module General Options' -> 'Advanced' -> 'jQuery & OutPut Filters' -> 'Put JS to Body' to on"
    );
    console.log("2. Find the double jQuery.js inclusion and remove it");
    return "Double Included jQuery Library";
  }
}
var tpj = jQuery;
if (window.RS_MODULES === undefined) window.RS_MODULES = {};
if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
RS_MODULES.modules["revslider21"] = {
  once:
    RS_MODULES.modules["revslider21"] !== undefined
      ? RS_MODULES.modules["revslider21"].once
      : undefined,
  init: function () {
    window.revapi2 =
      window.revapi2 === undefined ||
      window.revapi2 === null ||
      window.revapi2.length === 0
        ? document.getElementById("rev_slider_2_1")
        : window.revapi2;
    if (
      window.revapi2 === null ||
      window.revapi2 === undefined ||
      window.revapi2.length == 0
    ) {
      window.revapi2initTry =
        window.revapi2initTry === undefined ? 0 : window.revapi2initTry + 1;
      if (window.revapi2initTry < 20)
        requestAnimationFrame(function () {
          RS_MODULES.modules["revslider21"].init();
        });
      return;
    }
    window.revapi2 = jQuery(window.revapi2);
    if (window.revapi2.revolution == undefined) {
      revslider_showDoubleJqueryError("rev_slider_2_1");
      return;
    }
    revapi2.revolutionInit({
      revapi: "revapi2",
      DPR: "dpr",
      sliderLayout: "fullwidth",
      visibilityLevels: "1240,1240,1240,480",
      gridwidth: "1240,1240,1240,480",
      gridheight: "800,800,800,310",
      perspective: 600,
      perspectiveType: "global",
      editorheight: "800,768,960,310",
      responsiveLevels: "1240,1240,1240,480",
      progressBar: { disableProgressBar: true },
      navigation: {
        wheelCallDelay: 1000,
        onHoverStop: false,
        arrows: {
          enable: true,
          tmp: '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
          style: "zeus",
          hide_onmobile: true,
          hide_under: 778,
          left: {
            h_offset: 30,
          },
          right: {
            h_offset: 30,
          },
        },
      },
      viewPort: {
        global: false,
        globalDist: "-200px",
        enable: false,
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid: true,
      },
    });
  },
}; // End of RevInitScript
if (window.RS_MODULES.checkMinimal !== undefined) {
  window.RS_MODULES.checkMinimal();
}
// Header  Js Start==========================================
// Menu Icon
function myFunction(x) {
  x.classList.toggle("change");
}
const menuIcon = document.getElementById("menu_icon");
const close = document.getElementById("close");
const nav = document.getElementById("mobile_nav");
menuIcon.addEventListener("click", () => {
  nav.style.transition = ".3s linear";
  nav.style.display = "block";
});
close.addEventListener("click", () => {
  nav.style.display = "none";
});
// Header Js End===========================================
// Scroll Top Js Start===========================
let mybutton = document.getElementById("btn-back-to-top");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// Scroll Top Js End============================
// ==============Tabs Js Start============
(function ($) {
  const $tabLink = $("#tabs-section .tab-link");
  const $tabBody = $("#tabs-section .tab-body");
  let timerOpacity;

  const init = () => {
    // Menu Click
    $tabLink.off("click").on("click", function (e) {
      // Prevent Default
      e.preventDefault();
      e.stopPropagation();

      // Clear Timers
      window.clearTimeout(timerOpacity);

      // Toggle Class Logic
      // Remove Active Classes
      $tabLink.removeClass("active ");
      $tabBody.removeClass("active ");
      $tabBody.removeClass("active-content");

      // Add Active Classes
      $(this).addClass("active");
      $($(this).attr("href")).addClass("active");

      // Opacity Transition Class
      timerOpacity = setTimeout(() => {
        $($(this).attr("href")).addClass("active-content");
      }, 50);
    });
  };

  // Document Ready
  $(function () {
    init();
  });
})(jQuery);

//============= Tabs Js End============
// Sticky Navbar
let navbar = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 50) {
    navbar.classList.add("scroll-on");
  } else {
    navbar.classList.remove("scroll-on");
  }
};
