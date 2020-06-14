const spans = document.querySelectorAll("h1 span");
spans.forEach((span) =>
  span.addEventListener("mouseover", function (e) {
    span.classList.add("animated", "rubberBand");
  })
);

spans.forEach((span) =>
  span.addEventListener("mouseout", function (e) {
    span.classList.remove("animated", "rubberBand");
  })
);

const htmlBar = document.querySelector(".bar-html");
const cssBar = document.querySelector(".bar-css");
const jsBar = document.querySelector(".bar-js");
const reactBar = document.querySelector(".bar-react");

var t1 = new TimelineLite();

//add a from() tween at the beginning of the timline
tl.from(htmlBar, 0.5, { left: 100, opacity: 0 });

//add another tween immediately after
tl.from(cssBar, 0.5, { left: -100, opacity: 0 });

//use position parameter "+=0.5" to schedule next tween 0.5 seconds after previous tweens end
tl.from(jsBar, 0.5, { scale: 0.5, autoAlpha: 0 }, "+=0.5");

//use position parameter "-=0.5" to schedule next tween 0.25 seconds before previous tweens end.
//great for overlapping
tl.from(reactBar, 0.5, { left: 100, autoAlpha: 0 }, "-=0.25");

/* t1.fromTo(
  htmlBar,
  0.75,
  { width: `calc(0% -6px)` },
  { width: `calc(90% -6px)`, ease: Power4.easeOut }
);
t1.fromTo(
  cssBar,
  0.75,
  { width: `calc(0% -6px)` },
  { width: `calc(95% -6px)`, ease: Power4.easeOut }
);
t1.fromTo(
  jsBar,
  0.75,
  { width: `calc(0% -6px)` },
  { width: `calc(75% -6px)`, ease: Power4.easeOut }
);
t1.fromTo(
  reactBar,
  0.75,
  { width: `calc(0% -6px)` },
  { width: `calc(70% -6px)`, ease: Power4.easeOut }
);
 */
const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  triggerElement: ".skills",
  triggerHook: 0,
})
  .setTween(t1)
  .addTo(controller);

const showRequiredCategory = (event) => {
  const getId = event.id;
  const links = document.querySelectorAll(".work-category button");

  for (i = 0; i < links.length; i++) {
    if (links[i].hasAttribute("class")) {
      links[i].classList.remove("active");
    }
  }

  event.classList.add("active");
  const getCategory = document.querySelector(`.category-${getId}`);
  const categories = document.querySelectorAll(`div[class ^= category-]`);
  for (i = 0; i < categories.length; i++) {
    if (categories[i].hasAttribute("class")) {
      categories[i].classList.remove("showCategory");
      categories[i].classList.add("hideCategory");
    }
  }

  getCategory.classList.remove("hideCategory");
  getCategory.classList.add("showCategory");
};
