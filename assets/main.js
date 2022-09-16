const $ = document;
const menuBtn = $.querySelector("#menuBtn");
const closeBtn = $.querySelector("#closeBtn");
const navMenu = $.querySelector("#navMenu");
const navItem = navMenu.querySelectorAll("li");
const readMoreBtn = $.querySelector(".readMore");
const readMoreContent = $.querySelector(".readMoreContent");
const head = $.querySelector(".head");
const items = $.querySelector(".items");
let flag = false;
let itemsFlag = false;
menuBtn.addEventListener("click", () => {
  menuBtn.style.display = "none";
  closeBtn.style.display = "inline-block";
  navMenu.style.right = "0";
});
closeBtn.addEventListener("click", () => {
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
  navMenu.style.right = "-20rem";
});

const removeClass = () => {
  navItem.forEach((item) => {
    const linkItem = item.querySelector("a");
    linkItem.classList.remove("active");
  });
};
navItem.forEach((item) => {
  const linkItem = item.querySelector("a");
  linkItem.addEventListener("click", () => {
    removeClass();
    linkItem.classList.add("active");
  });
});

const swiper = new Swiper(".swiper", {
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});
readMoreBtn.addEventListener("click", () => {
  if (!flag) {
    readMoreContent.style.display = "block";
    readMoreBtn.innerHTML = "بستن";
    flag = true;
  } else {
    readMoreContent.style.display = "none";
    readMoreBtn.innerHTML = "نمایش بیشتر...";
    flag = false;
  }
});
head.addEventListener("click", () => {
  if (!itemsFlag) {
    items.style.display = "block";

    itemsFlag = true;
  } else {
    items.style.display = "none";

    itemsFlag = false;
  }
});
window.addEventListener("scroll", () => {
  
    $.querySelector("nav").classList.toggle("showBoxShadow",window.scrollY > 0);
  
});
