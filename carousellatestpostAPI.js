//this code needs work, but just to show how to

const url = "https://monicamunkvoldnikolaisen.no/treehugging/wp-json/wp/v2/posts?per_page=100&_embed";

const latestPostContainer = document.querySelector(".latest-carousel");
const nextBtn = document.querySelector(".next-btn");
const previousBtn = document.querySelector(".prev-btn");
//console.log(nextBtn);

async function getLatestPosts() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);
    latestPostContainer.innerHTML = "";
    //alle blogposter her, bryt etter fire første:
    for (let i = 0; i < results.length; i++) {
      if (i === 4) {
        break;
      }
      //createHTML();
      latestPostContainer.innerHTML += `<div class="latest-carousel"><div class="carousel-item"><a href="singlepost.html?id=${results[i].id}"><div class="">${results[i].title.rendered} </div><img class="" src="${results[i]._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url}"></img></a><div>${results[i].excerpt.rendered}</div></div><div class="carousel-actions"></div></div>`;
      previousBtn.style.display = "block";
      nextBtn.style.display = "block";
    }

    //ved klikk neste - kommer de neste fire,bryt etter fire:
    nextBtn.addEventListener("click", function () {
      latestPostContainer.innerHTML = "";
      for (let i = 4; i < results.length; i++) {
        if (i === 4) {
          break;
        }
        //createHTML();

        latestPostContainer.innerHTML += `<div class="latest-carousel"><div class="carousel-item"><a href="singlepost.html?id=${results[i].id}"><div class="">${results[i].title.rendered} </div><img class="" src="${results[i]._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url}"></img></a><div>${results[i].excerpt.rendered}</div></div><div class="carousel-actions"></div></div>`;
        previousBtn.style.display = "block";
        nextBtn.style.display = "block";
      }
    });

    // ved klikk på forrige, vis 4 forrige:
    previousBtn.addEventListener("click", function () {
      latestPostContainer.innerHTML = "";
      for (let i = 0; i < results.length; i++) {
        if (i === 4) {
          break;
        }
        //createHTML();
        latestPostContainer.innerHTML += `<div class="latest-carousel"><div class="carousel-item"><a href="singlepost.html?id=${results[i].id}"><div class="">${results[i].title.rendered} </div><img class="" src="${results[i]._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url}"></img></a><div>${results[i].excerpt.rendered}</div></div><div class="carousel-actions"></div></div>`;
        previousBtn.style.display = "block";
        nextBtn.style.display = "block";
      }
    });

    //ved klikk neste - kommer de siste fire, gjem nesteknapp:
    nextBtn.addEventListener("click", function () {
      latestPostContainer.innerHTML = "";
      for (let i = 8; i < results.length; i++) {
        if (i === 4) {
          break;
        }
        //createHTML();
        latestPostContainer.innerHTML += `<div class="latest-carousel"><div class="carousel-item"><a href="singlepost.html?id=${results[i].id}"><div class="">${results[i].title.rendered} </div><img class="" src="${results[i]._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url}"></img></a><div>${results[i].excerpt.rendered}</div></div><div class="carousel-actions"></div></div>`;
        nextBtn.style.display = "block";
        previousBtn.style.display = "block";
      }
    });

    // ved klikk på forrige, vis de første 4 forrige, og gjem forrige-knapp:
    previousBtn.addEventListener("click", function () {
      latestPostContainer.innerHTML = "";
      for (let i = 4; i < results.length; i++) {
        if (i === 4) {
          break;
        }
        //createHTML(results);
        latestPostContainer.innerHTML += `<div class="latest-carousel"><div class="carousel-item"><a href="singlepost.html?id=${results[i].id}"><div class="">${results[i].title.rendered} </div><img class="" src="${results[i]._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url}"></img></a><div>${results[i].excerpt.rendered}</div></div><div class="carousel-actions"></div></div>`;
        previousBtn.style.display = "block";
      }
    });
    //ved klikk neste - kommer de siste fire, gjem nesteknapp:
    nextBtn.addEventListener("click", function () {
      latestPostContainer.innerHTML = "";
      for (let i = 12; i < results.length; i++) {
        if (i === 4) {
          break;
        }
        //createHTML();
        latestPostContainer.innerHTML += `<div class="latest-carousel"><div class="carousel-item"><a href="singlepost.html?id=${results[i].id}"><div class="">${results[i].title.rendered} </div><img class="" src="${results[i]._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url}"></img></a><div>${results[i].excerpt.rendered}</div></div><div class="carousel-actions"></div></div>`;
        nextBtn.style.display = "block";
        previousBtn.style.display = "block";
      }
    });

    // ved klikk på forrige, vis de første 4 forrige, og gjem forrige-knapp:
    previousBtn.addEventListener("click", function () {
      latestPostContainer.innerHTML = "";
      for (let i = 8; i < results.length; i++) {
        if (i === 4) {
          break;
        }
        //createHTML();
        latestPostContainer.innerHTML += `<div class="latest-carousel"><div class="carousel-item"><a href="singlepost.html?id=${results[i].id}"><div class="">${results[i].title.rendered} </div><img class="" src="${results[i]._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url}"></img></a><div>${results[i].excerpt.rendered}</div></div><div class="carousel-actions"></div></div>`;
        previousBtn.style.display = "block";
      }
    });
  } catch (error) {
    console.log(error);
    //latestPostContainer.innerHTML = displayError("Oh dear, something isn't working...");
  }
}
getLatestPosts();

function createHTML() {
  latestPostContainer.innerHTML += `<div class="latest-carousel"><div class="carousel-item"><a href="singlepost.html?id=${results[i].id}"><div class="">${results[i].title.rendered} </div><img class="" src="${results[i]._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url}"></img></a><div>${results[i].excerpt.rendered}</div></div><div class="carousel-actions"></div></div>`;
}

// noroffs version:
/* const images = document.querySelectorAll(".img-carousel img");
const textWithImages = document.querySelector(".img-txt");
console.log(textWithImages);

images.forEach(function (image) {
  image.onclick = function (event) {
    document.querySelector(".selected-img").classList.remove("selected-img");
    const clickParent = event.target.parentNode;
    clickParent.classList.add("selected-img");
  };

  //showText();
}); */

// Carousel/Slider by Scrimba:
/* const postsToShowSlides = document.getElementsByClassName("carousel-item"); */

/* let slidePosition = 0;
const totalSlides = postsToShowSlides.length; */
/* const nextBtn = document.querySelector("#next-btn");
const previousBtn = document.querySelector("#prev-btn"); */

//refactored:
/* document.getElementById("next-btn").addEventListener("click", nextFourPosts);
document.getElementById("prev-btn").addEventListener("click", previousFourPosts); */

/* function hideAllSlides() {
  for (let slide of postsToShowSlides) {
    /* slide.classList.remove("carousel-item-visible");
    slide.classList.add("carousel-item-hidden");
  }
} */

/* function nextFourPosts() {
  hideAllSlides();
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  postsToShowSlides[slidePosition].classList.add("carousel-item-visible");
} */

/* function previousFourPosts() {
  hideAllSlides();
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  postsToShowSlides[slidePosition].classList.add("carousel-item-visible");
} */
