const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "Desayuno",
    price: 15.99,
    img: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/51a9c5b156c84977ae50004b5ef622b2/finalFB.jpg?resize=1200:*",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "dinner double",
    category: "Comida",
    price: 13.99,
    img: "https://media.istockphoto.com/photos/double-burgers-at-diner-picture-id1268633498?k=20&m=1268633498&s=612x612&w=0&h=qOtvSq_MyLERajoYtPeEeYznYPUVeM1p8rbuk1GFKPg=",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "Postres",
    price: 6.99,
    img: "https://i2-prod.glasgowlive.co.uk/incoming/article16335485.ece/ALTERNATES/s615b/0_DSC_5315.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "Desayuno",
    price: 20.99,
    img: "https://assets.countrydelight.in/assets/images/dahi.png",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "Comida",
    price: 22.99,
    img: "https://static01.nyt.com/images/2019/03/19/well/eggs/eggs-videoSixteenByNineJumbo1600-v2.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "Postres",
    price: 18.99,
    img: "https://thecheesecakefactory.com.mx/wp-content/uploads/2018/02/Oreo-Dream-Extreme-Cheesecake.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "Desayuno",
    price: 8.99,
    img: "https://curioustushar.github.io/react-sample-projects/menu/images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "Comida",
    price: 12.99,
    img: "https://i.pinimg.com/736x/eb/e6/3e/ebe63eb7969cc587282c98bddd01fb58.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "Postres",
    price: 16.99,
    img: "https://www.khuab.com/wp-content/uploads/2020/06/breakfast-690128_1920.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "Cena",
    price: 22.99,
    img: "https://www.seriouseats.com/thmb/IOIzTNOd8fORmi6KMz7tddxDBX8=/735x0/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2013__10__20131003-bison-ribeye-01-a489ae4e03f6413ea09459c8a85d900f.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["Todo"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "Todo") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
