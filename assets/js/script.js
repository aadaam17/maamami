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
const mobileMenu = selectElement("#menu");
const menuMask = selectElement(".menu-mask")

const toggleMenu = () => {
  mobileMenu.classList.toggle("activated");
  menuToggleIcon.classList.toggle("activated");
  menuMask.classList.toggle("activated");
};

menuToggleIcon.addEventListener("click", toggleMenu);

menuMask.addEventListener("click", () => {
  mobileMenu.classList.toggle("activated")
  menuToggleIcon.classList.toggle("activated")
  menuMask.classList.remove("activated")
})

// Open/Close search pop-up form
const searchContainer = selectElement("#search-form-container");
const searchOpenBtn = selectElement("#search-icon");
const searchCloseBtn = selectElement("#form-close-btn");

searchOpenBtn.addEventListener("click", () =>
  searchContainer.classList.add("activated")
);
searchCloseBtn.addEventListener("click", () =>
  searchContainer.classList.remove("activated")
);
// -- Close the search form popup on ESC keypress
window.addEventListener("keyup", (event) => {
  if (event.key === "Escape") searchContainer.classList.remove("activated");
});

// Opening and Closing Sub Menu
const subMenu = document.getElementsByClassName("sub-menu");
const menuLinker = document.getElementsByClassName("menu-linker");
const closeMenuBtn = document.getElementsByClassName("close-menu-btn");

const openSubMenu = () => {


  for (let i = 0; i < menuLinker.length; i++) {

    menuLinker[i].addEventListener("click", () => {
      subMenu[i].classList.add("activated")
      menuToggleIcon.classList.add("deactivated")
    })

    closeMenuBtn[i].addEventListener("click", () => {
      subMenu[i].classList.remove("activated")
      menuToggleIcon.classList.remove("deactivated")
    })

    menuMask.addEventListener("click", () => {
      subMenu[i].classList.remove("activated");
      menuToggleIcon.classList.remove("deactivated");
      menuMask.classList.remove("activated");
    })

  }

};

openSubMenu();

// Switch theme/add to local storage
const body = document.body;
const themeToggleBtn = selectElement("#theme-toggle-btn");
const currentTheme = localStorage.getItem("currentTheme");

// Check to see if there is a theme preference in local Storage, if so add the ligt theme to the body
if (currentTheme) {
  body.classList.add("dark-theme");
}

themeToggleBtn.addEventListener("click", function () {
  // Add dark theme on click
  body.classList.toggle("dark-theme");

  // If the body has the class of light theme then add it to local Storage, if not remove it
  if (body.classList.contains("dark-theme")) {
    localStorage.setItem("currentTheme", "themeActive");
  } else {
    localStorage.removeItem("currentTheme");
  }
});

// Swiper 
const swiper = new Swiper(".swiper1", {
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
    el: '.swiper-pagination-1'
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

/* Swiper II */
const swiper2 = new Swiper(".swiper2", {
  // How many slides to show
  slidesPerView: "auto",
  // For free slides
  freeMode: true,
  // How much space between slides
  spaceBetween: 4,
  //loopFillGroupBlank: false,
  // Make the next and previous buttons work
  navigation: {
    nextEl: '.swiper-button-next-2',
    prevEl: '.swiper-button-prev-2',
  },
  // Make the pagination indicators work
  pagination: {
    el: '.swiper-pagination-2'
  },
  //Responsive breakpoints for how many slides to show at that view
  breakpoints: {
    // 700px and up shoes 2 slides
    700: {
      slidesPerView: 2
    },
    // 1200px and up shoes 3 slides
    1200: { slidesPerView: 3 }
  },
  //Adding a scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});

/* Swiper III */
const swiper3 = new Swiper(".swiper3", {
  // How many slides to show
  slidesPerView: "auto",
  // For free slides
  freeMode: true,
  // How much space between slides
  spaceBetween: 4,
  //loopFillGroupBlank: false,
  // Make the next and previous buttons work
  navigation: {
    nextEl: '.swiper-button-next-2',
    prevEl: '.swiper-button-prev-2',
  },
  // Make the pagination indicators work
  pagination: {
    el: '.swiper-pagination-2'
  },
  //Responsive breakpoints for how many slides to show at that view
  breakpoints: {
    // 700px and up shoes 2 slides
    700: {
      slidesPerView: 2
    },
    // 1200px and up shoes 3 slides
    1200: { slidesPerView: 3 }
  }
});

/* Scrollmenu switcher */
const activePage = window.location.pathname;
const scrollMenu = document.getElementsByClassName('scrollmenu-link')

Array.from(scrollMenu).forEach((link) => {
  console.log(link.href);
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
})