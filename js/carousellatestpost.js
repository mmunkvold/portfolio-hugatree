//this code needs work, but just to show how to

const url = "https://monicamunkvoldnikolaisen.no/treehugging/wp-json/wp/v2/posts?per_page=100&_embed";

const latestPostContainer = document.querySelector(".latest-carousel");
const nextBtn = document.querySelector(".next-btn");
const previousBtn = document.querySelector(".prev-btn");

async function getLatestPosts() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);
    latestPostContainer.innerHTML = "";
    let firstPost = 0;

    for (let i = firstPost; i < firstPost + 4; i++) {
      console.log(i);
      //createHTML();
      latestPostContainer.innerHTML += `<div class="latest-carousel"><div class="carousel-item"><a href="singlepost.html?id=${results[i].id}"><div class="">${results[i].title.rendered} </div><img class="" src="${results[i]._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url}"></img></a><div>${results[i].excerpt.rendered}</div></div><div class="carousel-actions"></div></div>`;
      previousBtn.style.display = "block";
      nextBtn.style.display = "block";
    }

    nextBtn.addEventListener("click", function () {
      latestPostContainer.innerHTML = "";
      firstPost = firstPost + 4;
      if (firstPost > results.length - 1) {
        firstPost = 0;
      } else if (firstPost < 0) {
        firstPost = results.length - 4;
      }

      for (let i = firstPost; i < firstPost + 4; i++) {
        console.log(i);
        latestPostContainer.innerHTML += `<div class="latest-carousel"><div class="carousel-item"><a href="singlepost.html?id=${results[i].id}"><div class="">${results[i].title.rendered} </div><img class="" src="${results[i]._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url}"></img></a><div>${results[i].excerpt.rendered}</div></div><div class="carousel-actions"></div></div>`;
        previousBtn.style.display = "block";
        nextBtn.style.display = "block";
      }
    });

    previousBtn.addEventListener("click", function () {
      latestPostContainer.innerHTML = "";
      firstPost = firstPost - 4;
      if (firstPost > results.length - 1) {
        firstPost = 0;
      } else if (firstPost < 0) {
        firstPost = results.length - 4;
      }
      for (let i = firstPost; i < firstPost + 4; i++) {
        console.log(i);
        latestPostContainer.innerHTML += `<div class="latest-carousel"><div class="carousel-item"><a href="singlepost.html?id=${results[i].id}"><div class="">${results[i].title.rendered} </div><img class="" src="${results[i]._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url}"></img></a><div>${results[i].excerpt.rendered}</div></div><div class="carousel-actions"></div></div>`;
        previousBtn.style.display = "block";
        nextBtn.style.display = "block";
      }
    });
  } catch (error) {
    console.log(error);
    //latestPostContainer.innerHTML = displayError("Oh dear, something isn't working...");
  }
}
getLatestPosts();
