const searchButton = document.querySelector(".hotel-search-header");
const popup = document.querySelector(".search-main-page");
const formCheckIn = document.querySelector(".check-in-input");
const formCheckOut = document.querySelector(".check-out-input");

searchButton.addEventListener ("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("search-show");
   
});


/*
searchForm.addEventListener("submit", function (evt) {
    if (!formCheckIn.value || !formCheckOut.value) {
      evt.preventDefault();
    }
  }); */