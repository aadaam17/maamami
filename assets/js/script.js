// Grab elements
const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(
    `Something went wrong! Make sure that ${selector} exists/is typed correctly.`
  );
};

//Nav styles on scroll
const scrollHeader = () => {
  const navbarElement = selectElement("#header");
  if (this.scrollY >= 15) {
    navbarElement.classList.add("activated");
  } else {
    navbarElement.classList.remove("activated");
  }
};

window.addEventListener("scroll", scrollHeader);

// Open menu & search pop-up
const menuToggleIcon = selectElement("#menu-toggle-icon");
const formOpenBtn = selectElement("#search-icon");
const formCloseBtn = selectElement("#form-close-btn");
const searchContainer = selectElement("#search-form-container");

const toggleMenu = () => {
  const mobileMenu = selectElement("#menu");
  mobileMenu.classList.toggle("activated");
  menuToggleIcon.classList.toggle("activated");
};

menuToggleIcon.addEventListener("click", toggleMenu);

// Open/Close search form popup
formOpenBtn.addEventListener("click", () =>
  searchContainer.classList.add("activated")
);
formCloseBtn.addEventListener("click", () =>
  searchContainer.classList.remove("activated")
);
// -- Close the search form popup on ESC keypress
window.addEventListener("keyup", (event) => {
  if (event.key === "Escape") searchContainer.classList.remove("activated");
});

// Opening and Closing Sub Menu
// Sub-Menu-1
const subMenu1 = selectElement("#sub-menu-1");
const menuLink1 = selectElement("#menu-link-1");
const closeMenuBtn1 = selectElement("#close-menu-btn-1")

menuLink1.addEventListener("click", () => {
  subMenu1.classList.add("activated")
  menuToggleIcon.classList.add("deactivated");
});

closeMenuBtn1.addEventListener("click", () => {
  subMenu1.classList.remove("activated")
  menuToggleIcon.classList.remove("deactivated")
});

// Sub-Menu-2
const subMenu2 = selectElement("#sub-menu-2");
const menuLink2 = selectElement("#menu-link-2");
const closeMenuBtn2 = selectElement("#close-menu-btn-2")

menuLink2.addEventListener("click", () => {
  subMenu2.classList.add("activated")
  menuToggleIcon.classList.add("deactivated");
});

closeMenuBtn2.addEventListener("click", () => {
  subMenu2.classList.remove("activated")
  menuToggleIcon.classList.remove("deactivated")
});

// Sub-Menu-3
const subMenu3 = selectElement("#sub-menu-3");
const menuLink3 = selectElement("#menu-link-3");
const closeMenuBtn3 = selectElement("#close-menu-btn-3")

menuLink3.addEventListener("click", () => {
  subMenu3.classList.add("activated")
  menuToggleIcon.classList.add("deactivated");
});

closeMenuBtn3.addEventListener("click", () => {
  subMenu3.classList.remove("activated")
  menuToggleIcon.classList.remove("deactivated")
});

// Sub-Menu-4
const subMenu4 = selectElement("#sub-menu-4");
const menuLink4 = selectElement("#menu-link-4");
const closeMenuBtn4 = selectElement("#close-menu-btn-4")

menuLink4.addEventListener("click", () => {
  subMenu4.classList.add("activated")
  menuToggleIcon.classList.add("deactivated");
});

closeMenuBtn4.addEventListener("click", () => {
  subMenu4.classList.remove("activated")
  menuToggleIcon.classList.remove("deactivated")
});

// Sub-Menu-5
const subMenu5 = selectElement("#sub-menu-5");
const menuLink5 = selectElement("#menu-link-5");
const closeMenuBtn5 = selectElement("#close-menu-btn-5")

menuLink5.addEventListener("click", () => {
  subMenu5.classList.add("activated")
  menuToggleIcon.classList.add("deactivated");
});

closeMenuBtn5.addEventListener("click", () => {
  subMenu5.classList.remove("activated")
  menuToggleIcon.classList.remove("deactivated")
});

// Sub-Menu-6
const subMenu6 = selectElement("#sub-menu-6");
const menuLink6 = selectElement("#menu-link-6");
const closeMenuBtn6 = selectElement("#close-menu-btn-6")

menuLink6.addEventListener("click", () => {
  subMenu6.classList.add("activated")
  menuToggleIcon.classList.add("deactivated");
});

closeMenuBtn6.addEventListener("click", () => {
  subMenu6.classList.remove("activated")
  menuToggleIcon.classList.remove("deactivated")
});

// Switch theme/add to local storage
const body = document.body;
const themeToggleBtn = selectElement("#theme-toggle-btn");
const currentTheme = localStorage.getItem("currentTheme");

// Check to see if there is a theme preference in local Storage, if so add the ligt theme to the body
if (currentTheme) {
  body.classList.add("dark-theme");
}

themeToggleBtn.addEventListener("click", function () {
  // Add light theme on click
  body.classList.toggle("dark-theme");

  // If the body has the class of light theme then add it to local Storage, if not remove it
  if (body.classList.contains("dark-theme")) {
    localStorage.setItem("currentTheme", "themeActive");
  } else {
    localStorage.removeItem("currentTheme");
  }
});

// Swiper
const swiper = new Swiper(".swiper", {
  // How many slides to show
  slidesPerView: "auto",
  // For free slides
  freeMode: true,
  // How much space between slides
  spaceBetween: 12,
  // Make the next and previous buttons work
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Make the pagination indicators work
  pagination: {
    el: '.swiper-pagination'
  },
  //Responsive breakpoints for how many slides to show at that view
  breakpoints: {
    // 700px and up shoes 2 slides
    700: {
      slidesPerView: 2
    },
    // 1200px and up shoes 3 slides
    1200: {
      slidesPerView: 3
    }
  }
});


/* Swiper II 
const swiper2 = new Swiper(".swiper-2", {
  // How many slides to show
  slidesPerView: 2,
  // For free scroll
  freeMode: true,
  // How much space between slides
  spaceBetween: 20,
  // Make the next and previous buttons work
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Make the pagination indicators work
  pagination: {
    el: '.swiper-pagination-3'
  },
  //Responsive breakpoints for how many slides to show at that view
  breakpoints: {
    // 700px and up shoes 2 slides
    700: {
      slidesPerView: 2
    },
    // 1200px and up shoes 3 slides
    1200: {
      slidesPerView: 3
    }
  }
}); */