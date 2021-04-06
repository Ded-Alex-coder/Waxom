class burgerBtn {
  constructor() {
    this.openBurgerMenu();
  }

  openBurgerMenu() {
    const btn = document.querySelector("#burger-btn");
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      this.render();
    });
  }

  render() {
    const clickActive = document.querySelector(".active");
    if (clickActive) {
      this.init();
      document
        .getElementById("pagination")
        .classList.toggle("swiper-pagination_visibility");
      document
        .getElementById("sliders")
        .classList.toggle("swiper-wrapper_visibility");
    } else {
      const menu = document.querySelector(".image-slider");
      menu.childNodes[4].remove();
      document
        .getElementById("pagination")
        .classList.toggle("swiper-pagination_visibility");
      document
        .getElementById("sliders")
        .classList.toggle("swiper-wrapper_visibility");
    }
  }

  init() {
    const menu = document.querySelector(".image-slider");
    const burgerMenu = document.createElement("div");
    burgerMenu.classList.add("burger-menu");
    burgerMenu.innerHTML = `
        <ul class="bg_link-list">
              <li class="bg_link-item">
                <a href="#" class="bg_link">Home</a>
              </li>
              <li class="bg_link-item">
                <a href="#" class="bg_link">About Us</a>
              </li>
              <li class="bg_link-item">
                <a href="#" class="bg_link">Portfolio</a>
              </li>
              <li class="bg_link-item">
                <a href="#" class="bg_link">Features</a>
              </li>
              <li class="bg_link-item">
                <a href="#" class="bg_link">Blog</a>
              </li>
              <li class="bg_link-item">
                <a href="#" class="bg_link">Pricing</a>
              </li>
              <li class="bg_link-item">
                <a href="#" class="bg_link">Shortcodes</a>
              </li>
              <li class="bg_link-item">
                <a href="#" class="bg_link">Contact</a>
              </li>
              <li class="bg_link-item">
                <a href="#" class="bg_link waxom-icon-cart"></a>
              </li>
            </ul>
    `;
    menu.insertBefore(burgerMenu, menu.childNodes[4]);
  }
}

const Burger = new burgerBtn();

class Link {
  constructor() {
    this.linkStyle();
  }

  linkStyle() {
    const link = document.querySelectorAll("a");
    [link].forEach.call(link, (el) => {
      el.addEventListener("click", (event) => {
        event.preventDefault();
      });
    });
  }
}

const linkStyle = new Link();
