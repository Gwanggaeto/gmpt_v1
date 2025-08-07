$(document).ready(function () {
  $('#index-carousel').owlCarousel({
    center: true,
    items: 7,
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      768: {
        items: 3,
      },
      820: {
        items: 3,
      },
      994: {
        items: 4,
      },
      1270: {
        items: 6,
      },
      1590: {
        items: 7,
      },
      1910: {
        items: 8,
      }
    }
  });
  var owl22 = $('#index-carousel');
  owl22.owlCarousel();
  $('.index-carousel-right-btn').click(function () {
    owl22.trigger('next.owl.carousel');
  })
  $('.index-carousel-left-btn').click(function () {
    owl22.trigger('prev.owl.carousel', [300]);
  })
  $('#index-carousel2').owlCarousel({
    center: true,
    items: 7,
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      768: {
        items: 3,
      },
      820: {
        items: 3,
      },
      994: {
        items: 4,
      },
      1270: {
        items: 6,
      },
      1590: {
        items: 7,
      },
      1910: {
        items: 8,
      }
    }
  });
  var owl33 = $('#index-carousel2');
  owl33.owlCarousel();
  $('.index-carousel2-right-btn').click(function () {
    owl33.trigger('next.owl.carousel');
  })
  $('.index-carousel2-left-btn').click(function () {
    owl33.trigger('prev.owl.carousel', [300]);
  })
  $("#comments-carousel").owlCarousel({
    autoPlay: 5000,
    items: 1,
    center: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    }
  });
  var owl2 = $('#comments-carousel');
  owl2.owlCarousel();
  $('.index-comments-controller-right-btn').click(function () {
    owl2.trigger('next.owl.carousel');
  })
  $('.index-comments-controller-left-btn').click(function () {
    owl2.trigger('prev.owl.carousel', [300]);
  })

  $('#merchant-page-carousel').owlCarousel({
    center: true,
    items: 4,
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      768: {
        items: 3,
      },
      820: {
        items: 3,
      },
      994: {
        items: 4,
      },
      1270: {
        items: 6,
      },
      1590: {
        items: 7,
      },
      1910: {
        items: 8,
      }
    }
  });
  var owl = $('#merchant-page-carousel');
  owl.owlCarousel();
  $('.merchant-page-carousel-right-btn').click(function () {
    owl.trigger('next.owl.carousel');
  })
  $('.merchant-page-carousel-left-btn').click(function () {
    owl.trigger('prev.owl.carousel', [300]);
  })

  var btn = $('.back-to-top');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('back-to-top-show');
    } else {
      btn.removeClass('back-to-top-show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '3000');
  });

  $('.account-page-side-menu ul li').click(function (e) {
    var $this = $(this);

    if ($this.find('.account-page-side-sub-menu').hasClass('account-page-side-sub-menu-open')) {
      $this.find('.account-page-side-sub-menu').slideUp(300);
      $this.find('.account-page-side-sub-menu').removeClass('account-page-side-sub-menu-open');
      $this.removeClass('account-page-side-sub-open');
    } else {
      $this.find('.account-page-side-sub-menu').slideToggle(300);
      $this.find('.account-page-side-sub-menu').addClass('account-page-side-sub-menu-open');
      $this.addClass('account-page-side-sub-open');
    }
  });

  $('.account-page-payment-add-price label').click(function (e) {
    var inputVal = $('.account-page-payment-add-price input[type="radio"]:checked').val();
    $('.account-page-payment-add-price input[type="number"]').val(inputVal);
  });
  $('.page-bank-accounts-content-item-form label').click(function (e) {
    var inputVal = $('.page-bank-accounts-content-item-form input[type="radio"]:checked').val();
    $('.page-bank-accounts-content-item-form input[type="number"]').val(inputVal);
  });

  $('.account-page-bank-transfer-item-content-btn').click(function (e) {
    $('.account-page-bank-transfer-item-form').slideToggle(300);
    $(this).css("display", "none");
  });

  $('.account-page-payment-notifications-item-receipt-btn').click(function (e) {
    var $this = $(this);

    if ($this.next().hasClass('account-page-payment-notifications-item-content-open')) {
      $this.next().removeClass('account-page-payment-notifications-item-content-open');
      $this.next().slideUp(200);
    } else {
      $this.parent().parent().find('.account-page-payment-notifications-item-content').removeClass('account-page-payment-notifications-item-content-open');
      $this.parent().parent().find('.account-page-payment-notifications-item-content').slideUp(200);
      $this.next().toggleClass('account-page-payment-notifications-item-content-open');
      $this.next().slideToggle(200);
    }
  });
  $('.account-page-payment-notifications-item-content-close').click(function (e) {
    $('.account-page-payment-notifications-item-content').slideUp(200);
    $('.account-page-payment-notifications-item-content').removeClass('account-page-payment-notifications-item-content-open');
  });

  $('.account-page-payment-list-item-button').click(function (e) {
    var $this = $(this);

    if ($this.next().hasClass('account-page-payment-list-item-content-open')) {
      $this.next().removeClass('account-page-payment-list-item-content-open');
      $this.next().slideUp(200);
      $this.removeClass('account-page-payment-list-item-button-open');
    } else {
      $this.parent().parent().find('.account-page-payment-list-item-content').removeClass('account-page-payment-list-item-content-open');
      $this.parent().parent().find('.account-page-payment-list-item-content').slideUp(200);
      $this.next().toggleClass('account-page-payment-list-item-content-open');
      $this.next().slideToggle(200);
      $this.addClass('account-page-payment-list-item-button-open');
    }
  });

  $('.account-page-orders-item-button').click(function (e) {
    var $this = $(this);

    if ($this.next().hasClass('account-page-orders-item-content-open')) {
      $this.next().removeClass('account-page-orders-item-content-open');
      $this.next().slideUp(200);
      $this.removeClass('account-page-orders-item-button-open');
    } else {
      $this.parent().parent().find('.account-page-orders-item-content').removeClass('account-page-orders-item-content-open');
      $this.parent().parent().find('.account-page-orders-item-content').slideUp(200);
      $this.next().toggleClass('account-page-orders-item-content-open');
      $this.next().slideToggle(200);
      $this.addClass('account-page-orders-item-button-open');
    }
  });

  $('.account-page-sales-item-button').click(function (e) {
    var $this = $(this);

    if ($this.next().hasClass('account-page-sales-item-content-open')) {
      $this.next().removeClass('account-page-sales-item-content-open');
      $this.next().slideUp(200);
      $this.removeClass('account-page-sales-item-button-open');
    } else {
      $this.parent().parent().find('.account-page-sales-item-content').removeClass('account-page-sales-item-content-open');
      $this.parent().parent().find('.account-page-sales-item-content').slideUp(200);
      $this.next().toggleClass('account-page-sales-item-content-open');
      $this.next().slideToggle(200);
      $this.addClass('account-page-sales-item-button-open');
    }
  });
  $(".account-page-change-password-open").click(function () {
    var x = $(".account-page-change-password-input");
    if (x[0].type === "password") {
      x[0].type = "text";
      $(".account-page-change-password-open i").removeClass('fa-eye-slash');
      $(".account-page-change-password-open i").addClass('fa-eye');
    } else {
      x[0].type = "password";
      $(".account-page-change-password-open i").addClass('fa-eye-slash');
      $(".account-page-change-password-open i").removeClass('fa-eye');
    }
  });
  $(".account-page-change-password-open-2").click(function () {
    var x = $(".account-page-change-password-input-2");
    if (x[0].type === "password") {
      x[0].type = "text";
      $(".account-page-change-password-open-2 i").removeClass('fa-eye-slash');
      $(".account-page-change-password-open-2 i").addClass('fa-eye');
    } else {
      x[0].type = "password";
      $(".account-page-change-password-open-2 i").addClass('fa-eye-slash');
      $(".account-page-change-password-open-2 i").removeClass('fa-eye');
    }
  });
  $(".account-page-change-password-open-3").click(function () {
    var x = $(".account-page-change-password-input-3");
    if (x[0].type === "password") {
      x[0].type = "text";
      $(".account-page-change-password-open-3 i").removeClass('fa-eye-slash');
      $(".account-page-change-password-open-3 i").addClass('fa-eye');
    } else {
      x[0].type = "password";
      $(".account-page-change-password-open-3 i").addClass('fa-eye-slash');
      $(".account-page-change-password-open-3 i").removeClass('fa-eye');
    }
  });

  $('.page-help-center-right-item h5').click(function (e) {
    var $this = $(this);

    if ($this.next().hasClass('page-help-center-right-item-open')) {
      $this.next().removeClass('page-help-center-right-item-open');
      $this.next().slideUp(200);
    } else {
      $this.parent().parent().find('.page-help-center-right-item .text').removeClass('page-help-center-right-item-open');
      $this.parent().parent().find('.page-help-center-right-item .text').slideUp(200);
      $this.next().toggleClass('page-help-center-right-item-open');
      $this.next().slideToggle(200);
    }
  });

  $('.page-bank-accounts-content-item-title').click(function (e) {
    var $this = $(this);

    if ($this.next().hasClass('page-bank-accounts-content-item-form-open')) {
      $this.next().removeClass('page-bank-accounts-content-item-form-open');
      $this.next().slideUp(200);
      $this.removeClass('page-bank-accounts-content-item-form-open');
    } else {
      $this.parent().parent().find('.page-bank-accounts-content-item-form').removeClass('page-bank-accounts-content-item-form-open');
      $this.parent().parent().find('.page-bank-accounts-content-item-form').slideUp(200);
      $this.next().toggleClass('page-bank-accounts-content-item-form-open');
      $this.next().slideToggle(200);
      $this.addClass('page-bank-accounts-content-item-form-open');
    }
  });

});
function copyFunctionGiveawaysLink() {
  var copyText = document.getElementById("GiveawaysLink");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  $("#GiveawaysLink").css("border", "1px solid #198754");
}

$(function () {
  $('.m-menu').click(function () {
    $(".m-menu-content").css("visibility", "visible");
    $(".m-menu-content").css("width", "100%");
    $(".m-menu-content").css("padding", "30px");
    $(".m-menu-content li").css("margin-left", "0px");
    $(".m-menu-close").css("margin-left", "0px");
    $(".header-account-btn-text").css("margin-left", "0");
  });
  $('.m-menu-close').click(function () {
    $(".m-menu-content").css("visibility", "hidden");
    $(".m-menu-content").css("width", "0%");
    $(".m-menu-content").css("padding", "0px");
    $(".m-menu-content li").css("margin-left", "-400px");
    $(".m-menu-close").css("margin-left", "-400px");
    $(".header-account-btn-text").css("margin-left", "-400px");
  });

  $('.m-basket').click(function () {
    $(".header-basket-btn .dropdown-menu").css("visibility", "visible");
    $(".header-basket-btn .dropdown-menu").css("margin-left", "0px");
    $(".header-basket-btn .dropdown-menu").css("width", "100%");
  });
  $('.basket-dropdown-close').click(function () {
    $(".header-basket-btn .dropdown-menu").css("visibility", "hidden");
    $(".header-basket-btn .dropdown-menu").css("margin-left", "-400px");
    $(".header-basket-btn .dropdown-menu").css("width", "0%");
  });

  $('.m-profile').click(function () {
    $(".header-account-btn .dropdown-menu").css("visibility", "visible");
    $(".header-account-btn .dropdown-menu").css("margin-left", "0px");
    $(".header-account-btn .dropdown-menu").css("width", "100%");
    $(".header-account-btn-text").css("margin-left", "0");
  });
  $('.header-account-btn-mobile-close').click(function () {
    $(".header-account-btn .dropdown-menu").css("visibility", "hidden");
    $(".header-account-btn .dropdown-menu").css("margin-left", "-400px");
    $(".header-account-btn .dropdown-menu").css("width", "0%");
    $(".header-account-btn-text").css("margin-left", "-400px");
  });
  $('.product-detail-page .product-detail-wrap .product-detail-wrap-image .sell-account .item img').click(function () {
    $(".sell-account #SellAccountCarousel").addClass('modal fade in active-modal');
    $(".sell-account-gallery-close").css("display", "block");
    $("html").css("overflow", "hidden");
  });
  $('.sell-account-gallery-close').click(function () {
    $(".sell-account #SellAccountCarousel").removeClass('modal fade in active-modal');
    $(".sell-account-gallery-close").css("display", "none");
    $("html").css("overflow", "initial");
  });
});

$(function () {
  $('.form-group-email-button').click(function () {
    $(".account-page-settings-home").css("display", "none");
    $(".account-page-settings-email-change").css("display", "block");
    $(".account-page-settings-refresh-btn").css("display", "block");
  });
  $('.account-page-settings-identity-number-open').click(function () {
    $(".account-page-settings-home").css("display", "none");
    $(".account-page-settings-identity-number").css("display", "block");
    $(".account-page-settings-refresh-btn").css("display", "block");
  });
  $('.account-page-settings-phone-change-open').click(function () {
    $(".account-page-settings-home").css("display", "none");
    $(".account-page-settings-phone-change").css("display", "block");
    $(".account-page-settings-refresh-btn").css("display", "block");
  });
  $('.account-page-settings-refresh-btn').click(function () {
    location.reload();
  });
  $('.account-page-address-invoice-headline-btn').click(function () {
    $(".account-page-address-invoice-form").slideToggle(400);
    $('.account-page-address-invoice-headline-btn').css("display", "none");
    $('.account-page-address-invoice-item').css("display", "none");
  });
  $('.account-page-address-invoice-form-close').click(function () {
    $(".account-page-address-invoice-form").slideUp(400);
    $('.account-page-address-invoice-headline-btn').css("display", "block");
    $('.account-page-address-invoice-item').css("display", "block");
  });

  $('.merchant-page-comments-top-btn').click(function () {
    $('.merchant-page-comments-form').css("display", "block");
  });

  $('.page-sidebar-full-text-btn').click(function () {
    $('.page-sidebar-full-text-btn').css("display", "none");
    $('.page-sidebar-text').css("max-height", "initial");
  });

  document.addEventListener("DOMContentLoaded", function () {
    var lazyLoadImages = document.querySelectorAll('.progressive-load');
    var currentImageIndex = 0;

    if ('IntersectionObserver' in window) {
      var imageObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var image = entry.target;
            image.src = image.dataset.src;
            image.classList.remove('progressive-load');
            imageObserver.unobserve(image);

            // Sıradaki resmi kontrol et
            currentImageIndex++;
            if (currentImageIndex < lazyLoadImages.length) {
              var nextImage = lazyLoadImages[currentImageIndex];
              imageObserver.observe(nextImage);
            }
          }
        });
      });

      // İlk resmi gözlemeye al
      if (lazyLoadImages.length > 0) {
        var firstImage = lazyLoadImages[0];
        imageObserver.observe(firstImage);
      }
    } else {
      // Intersection Observer desteklenmiyorsa, basit bir yedekleme
      lazyLoadImages.forEach(function (image) {
        image.src = image.dataset.src;
        image.classList.remove('progressive-load');
      });
    }
  });
});

function toggleStar(index) {
  const stars = document.querySelectorAll('.product-detail-comments-form i');

  stars.forEach((star, i) => {
    if (i < index) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });
}

function merchantStar(index) {
  const stars = document.querySelectorAll('.merchant-page-comments-form i');

  stars.forEach((star, i) => {
    if (i < index) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });
}
function textcopyindex(text) {
  var textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);

  var alertDiv = document.createElement('div');
  alertDiv.textContent = 'Metin başarıyla kopyalandı!';
  alertDiv.style.position = 'fixed';
  alertDiv.style.top = '20px';
  alertDiv.style.right = '20px';
  alertDiv.style.backgroundColor = '#d4edda';
  alertDiv.style.color = '#155724';
  alertDiv.style.padding = '10px 15px';
  alertDiv.style.border = '1px solid #c3e6cb';
  alertDiv.style.borderRadius = '5px';
  alertDiv.style.zIndex = 9999;

  document.body.appendChild(alertDiv);

  setTimeout(function () {
    document.body.removeChild(alertDiv);
  }, 3000);
}


// Anasayfa Başlık Sistemi Hata Giderim için olan kısım.

// Dinamik Carousel Oluşturucu
function createDynamicCarousels(categories) {
  const container = document.getElementById('dynamic-carousels-container');
  const carouselTemplate = document.getElementById('carousel-template');
  const itemTemplate = document.getElementById('carousel-item-template');

  if (!container || !carouselTemplate || !itemTemplate) return;

  container.innerHTML = ''; // Önceki içeriği temizle

  categories.forEach((category, index) => {
    // Carousel template'ini kopyala
    const carouselClone = carouselTemplate.content.cloneNode(true);

    // Başlığı Ayarı
    carouselClone.querySelector('.carousel-title').textContent = category.title;

    // Benzersiz ID AYARI
    const carouselId = `dynamic-carousel-${index}`;
    carouselClone.querySelector('.owl-carousel').id = carouselId;

    // Ürünleri ekle
    const itemsContainer = carouselClone.querySelector('.carousel-items');
    category.items.forEach(item => {
      const itemClone = itemTemplate.content.cloneNode(true);
      itemClone.querySelector('.item-image').src = item.image || 'assets/images/owl-1.jpg';
      itemClone.querySelector('.item-title').textContent = item.title || 'Ürün';
      itemClone.querySelector('.item-link').href = item.link || '#';
      itemsContainer.appendChild(itemClone);
    });

    // Container'a ekleme işlemi
    container.appendChild(carouselClone);

    // Carousel'i başlatma işlemiii
    setTimeout(() => {
      $(`#${carouselId}`).owlCarousel({
        center: true,
        items: 7,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
          0: { items: 1 },
          600: { items: 2 },
          768: { items: 3 },
          820: { items: 3 },
          994: { items: 4 },
          1270: { items: 6 },
          1590: { items: 7 },
          1910: { items: 8 }
        }
      });
    }, 100);
  });

  // Buton event'leri hk
  $(document).off('click', '.carousel-left-btn, .carousel-right-btn');
  $(document).on('click', '.carousel-right-btn', function () {
    $(this).closest('.index-carousel').find('.owl-carousel').trigger('next.owl.carousel');
  });
  $(document).on('click', '.carousel-left-btn', function () {
    $(this).closest('.index-carousel').find('.owl-carousel').trigger('prev.owl.carousel', [300]);
  });
}

// Sayfa yüklendiğinde çalıştır
$(document).ready(function () {
  // Test verisi - (Kadir ucuna ait kısım)
  const testCategories = [
    {
      title: "POPÜLER OYUNLAR",
      items: [
        { image: "assets/images/owl-1.jpg", title: "League of Legends", link: "#" },
        { image: "assets/images/owl-2.jpg", title: "CS:GO", link: "#" },
        { image: "assets/images/owl-3.jpg", title: "Valorant", link: "#" },
        { image: "assets/images/owl-4.jpg", title: "PUBG", link: "#" }
      ]
    },
    {
      title: "İNDİRİMLİ OYUNLAR",
      items: [
        { image: "assets/images/owl-1.jpg", title: "Game 1", link: "#" },
        { image: "assets/images/owl-2.jpg", title: "Game 2", link: "#" }
      ]
    },
    {
      title: "YENİ OYUNLAR",
      items: [
        { image: "assets/images/owl-3.jpg", title: "New Game 1", link: "#" },
        { image: "assets/images/owl-4.jpg", title: "New Game 2", link: "#" }
      ]
    }
  ];

  createDynamicCarousels(testCategories);
});


//Sepet Accordion Menü

        function toggleAccordion(header) {
            const item = header.parentNode;
            const allItems = document.querySelectorAll('.accordion-item');
            
            // Diğer tüm accordion'ları kapat
            allItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Tıklanan accordion'ı aç/kapat
            item.classList.toggle('active');
        }

        // Kart numarası formatlaması
        document.addEventListener('DOMContentLoaded', function() {
            const cardInputs = document.querySelectorAll('input[placeholder*="1234"]');
            cardInputs.forEach(input => {
                input.addEventListener('input', function(e) {
                    let value = e.target.value.replace(/\s/g, '');
                    let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
                    if (formattedValue.length <= 19) {
                        e.target.value = formattedValue;
                    }
                });
            });

            // Expiry date formatlaması
            const expiryInputs = document.querySelectorAll('input[placeholder*="MM/YY"]');
            expiryInputs.forEach(input => {
                input.addEventListener('input', function(e) {
                    let value = e.target.value.replace(/\D/g, '');
                    if (value.length >= 2) {
                        value = value.substring(0, 2) + '/' + value.substring(2, 4);
                    }
                    e.target.value = value;
                });
            });
        });
  