var textWrapper = document.querySelector('.ml9 .promo-title');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='promo'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml9 .promo',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.ml9',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  