$(".menu__sub-btn").click(function () {
  $(this).next(".menu__sub").slideToggle();
  $(this).find(".dropdown").toggleClass("rotate");
});
$(".menu__open").click(function () {
  $(".sidebar").toggleClass("active");
  $(".sidebar__inner").toggleClass("active");
});
$(".menu__close").click(function () {
  $(".sidebar").toggleClass("active");
  $(".sidebar__inner").toggleClass("active");
});

$(document).mouseup((e) => {
  if (
    !$(".sidebar__inner").is(e.target) &&
    $(".sidebar__inner").has(e.target).length === 0
  ) {
    $(".sidebar").removeClass("active");
    $(".sidebar__inner").removeClass("active");
  }
});

let BannerSwiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let MenuSwiper = new Swiper(".swiper-container-menu", {
  slidesPerView: "auto",
  spaceBetween: 25,
  freeMode: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});

$(".swiper-container-menu a").click(function () {
  $(".swiper-container-menu a").removeClass("menu-click");
  $(this).addClass("menu-click");
});

$(".pagination-products__item").click(function () {
  $(".pagination-products__item").removeClass("active");
  $(this).addClass("active");
});
$(".home-video__btn").click(function () {
  $(this).hide();
  $(".yt-video").attr(
    "src",
    "https://www.youtube.com/embed/uNT_AxXrUGs?vq=hd1080&autoplay=1"
  );
});

function InitQuantity() {
  if ($(".quantity").html() !== undefined) {
    $(".quantity").each(function () {
      let MainThis = $(this);
      let StartPrice = 0;
      let ThisPrice = 0;
      if (MainThis.parent().children(".quantity-price").html() !== undefined) {
        StartPrice = parseInt(
          MainThis.parent()
            .children(".quantity-price")
            .html()
            .replace(/\s/g, "")
        );
        ThisPrice = MainThis.parent().children(".quantity-price");
      } else {
        StartPrice = parseInt($(".quantity-price").html().replace(/\s/g, ""));
        ThisPrice = $(".quantity-price");
      }
      function cardAmount(currentAmount) {
        let strPrice = (StartPrice * currentAmount)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        ThisPrice.html(strPrice + " ₽");
      }
      //  amount of products
      MainThis.children(".quantity-number").css(
        "width",
        MainThis.children(".quantity-number").val().length * 12 + "rem"
      );
      MainThis.children(".quantity-minus").click(function () {
        if (
          parseInt(MainThis.children(".quantity-number").val()) < 0 ||
          MainThis.children(".quantity-number").val() == ""
        ) {
          MainThis.children(".quantity-number").val(1);
        }
        if (MainThis.children(".quantity-number").val() > 1) {
          MainThis.children(".quantity-number").val(
            parseInt(MainThis.children(".quantity-number").val()) - 1
          );
        }
        MainThis.children(".quantity-number").css(
          "width",
          MainThis.children(".quantity-number").val().length * 12 + "rem"
        );
        cardAmount(MainThis.children(".quantity-number").val());
      });
      MainThis.children(".quantity-plus").click(function () {
        if (
          parseInt(MainThis.children(".quantity-number").val()) < 0 ||
          MainThis.children(".quantity-number").val() == ""
        ) {
          MainThis.children(".quantity-number").val(1);
        }
        if (parseInt(MainThis.children(".quantity-number").val()) >= 200) {
          MainThis.children(".quantity-number").val(200);
          return;
        }
        MainThis.children(".quantity-number").val(
          parseInt(MainThis.children(".quantity-number").val()) + 1
        );
        MainThis.children(".quantity-number").css(
          "width",
          MainThis.children(".quantity-number").val().length * 12 + "rem"
        );
        cardAmount(MainThis.children(".quantity-number").val());
      });
    });
  }
}
InitQuantity();
// card nav tab
function showElement(elements, element) {
  $(elements).removeClass("active");
  $(element).addClass("active");
}
//review swiper
var ReviewsSwiper = undefined;
$(".card__nav .nav__item").click(function () {
  $(".card__nav .nav__item").removeClass("active");
  $(this).addClass("active");

  if ($("#product__reviews").hasClass("active")) {
    if (ReviewsSwiper === undefined) {
      ReviewsSwiper = new Swiper(".slider-reviews", {
        slidesPerView: 2,
        spaceBetween: 16,
        // freeMode: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  }
});

//buy way
$(".buy-way__option").click(function () {
  $(".buy-way__option").removeClass("active");
  $(this).addClass("active");
});

if ($(".order__product").html() !== undefined) {
  function DispayPrice() {
    let sum = 0;
    $(".order__price").each(function () {
      sum += parseInt($(this).html().replace(/\s/g, ""));
    });
    let Promo = parseInt($(".order__promo span").html().replace(/\s/g, ""));
    let SumWithPromo =
      (sum + Promo).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "  ₽";
    let SumStr = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "  ₽";
    $(".order__sum span").html(SumStr);
    $(".order__total span").html(SumWithPromo);
  }
  $(".quantity-plus").click(DispayPrice);
  $(".quantity-minus").click(DispayPrice);
}

$("#photo-file").change(function () {
  if (this.files && this.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $("#photo-img-profile").attr("src", e.target.result);
    };

    reader.readAsDataURL(this.files[0]); // convert to base64 string
  }
});

if ($(".tab-option") !== undefined) {
  $(".tab-option__item").click(function () {
    $(".tab-option__item").removeClass("active");
    $(this).addClass("active");
  });
}

$(".modal-content__close").click(function () {
  $(this).parent().parent().removeClass("active");
  $("body").css("position", "relative");
});

function ShowModal(modal) {
  $(".sidebar").removeClass("active");
  $(".sidebar__inner").removeClass("active");
  $(".modal").removeClass("active");
  $(modal).addClass("active");
}

function CloseModal() {
  $(".modal").removeClass("active");
}

function countChar(val) {
  var len = val.value.length;
  if (len >= 500) {
    val.value = val.value.substring(0, 500);
  } else {
    $("#charNum").text(500 - len);
  }
}
