$(document).ready(function () {
  //menu
  $(".c-headersp__toggle").click(function () {
    $(".c-headersp__bg").toggleClass("is-active");
    $(".c-headersp__close").toggleClass("is-active");
    if ($(".c-headersp__bg").hasClass("is-active")) {
      $("body").addClass("u-overflow");
    } else {
      $("body").removeClass("u-overflow");
    }
  });
  let itemmenu = document.querySelectorAll(".c-itemsp a");
  itemmenu.forEach((element) => {
    element.addEventListener("click", function (e) {
      $(".c-headersp__bg").removeClass("is-active");
      $("body").removeClass("u-overflow");
      $(".c-headersp__close").removeClass("is-active");
    });
  });
  $(".c-col__itembutton").click(function (e) {
    let parent = $(this).closest(".c-col__itembox");
    parent.find(".c-col__itemcontent").toggleClass("is-show");
    $(this).find("img").toggleClass("is-active");
  });

  $(window).scroll(function () {
    let docScroll = $(document).scrollTop();
    //animation leaf
    if (docScroll > 10) {
      $(".c-leaf__top").addClass("is-scroll");
      $(".c-leaf__right").addClass("is-scroll");
    } else {
      $(".c-leaf__top").removeClass("is-scroll");
      $(".c-leaf__right").removeClass("is-scroll");
    }
    // scroll menu
    let navLinks = document.querySelectorAll(".c-headerpc__list a");

    let scroll_pos = window.scrollY;
    let sections = document.querySelectorAll(".p-scroll");
    sections.forEach(function (section, index) {
      if (scroll_pos >= section.offsetTop - 10) {
        navLinks.forEach(function (navLink) {
          navLink.classList.remove("is-active");
        });
        navLinks[index].classList.add("is-active");
      }
    });

    let windowBottom = window.scrollY + window.innerHeight;
    let footerTop = $("#footer").offset().top;
    if (windowBottom >= footerTop) {
      $(".c-headerpc__list a").removeClass("is-active");
      $(".c-headerpc__list:last-child a").addClass("is-active");
    }
  });
  $(".c-point__list").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    // autoplay :true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".c-point__itemmore").click(function (e) {
    e.preventDefault();
    let item = $(this).closest(".c-point__item");
    $(".c-point__layerinfo").removeClass("is-active");
    item.find(".c-point__layerinfo").toggleClass("is-active");
  });
});
