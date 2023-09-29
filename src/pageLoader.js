import { Navbar, Header, Footer, BackgroundImg  } from "./staticElements";
import { Home } from "./home";
import { MenuContainer, Menu } from "./menu";
import { Contact } from "./contact";

function pageLoader(dependingLoad) {

    const contentElem = document.getElementById('content');

    contentElem.innerHTML = "";

    staticLoader();
    dependingLoad();

}

function staticLoader() {
    const bodyElem = document.body;
    const contentElem = document.getElementById('content');

    // Check if the static elements have already been appended
    if (!document.querySelector('header') && !document.querySelector('footer')) {
        // Create and set up the header with navbar.
        let navbar = new Navbar();
        navbar.configure();
        let header = new Header(navbar);
        
        // Insert the header element before the content div.
        bodyElem.insertBefore(header.element, contentElem);

        // Create and set up the footer.
        let footer = new Footer();
        
        // Insert the footer element after the content div.
        bodyElem.insertBefore(footer.element, contentElem.nextSibling);

        let backgroundImg = new BackgroundImg();
        bodyElem.appendChild(backgroundImg.element);
    }
}


function homeLoader(){
    const bodyElem = document.body;
    const contentElem = document.getElementById('content');

    //---------------Creates home part of the page------------------

    let home = new Home();

    contentElem.appendChild(home.element);

    //---------------Creates home part of the page------------------
}

function contactLoader(){
    const bodyElem = document.body;
    const contentElem = document.getElementById('content');

    let contact = new Contact();

    contentElem.appendChild(contact.div);
}

function menuLoader(){
    const bodyElem = document.body;
    const contentElem = document.getElementById('content');

    //---------------Creates menu part of the page------------------

    let menuContainer = new MenuContainer();

    let menu1 = new Menu("/src/img/salad.jpg", "Healthy Salad", "15 Dollars", "Refresh your senses with our vibrant and crisp garden salad. A medley of fresh, locally-sourced greens, juicy tomatoes, crunchy cucumbers, and sweet bell peppers, all tossed in a light and zesty vinaigrette. Sprinkled with feta cheese and olives, this salad is a colorful celebration of textures and flavors that embody the essence of summer.");
    let menu2 = new Menu("/src/img/burger.jpg", "King Burger", "30 Dollars", "Satisfy your cravings with our signature gourmet burger. A succulent and perfectly grilled beef patty, layered with sharp cheddar cheese, crisp lettuce, ripe tomatoes, and red onions, all encased in a toasted brioche bun. Drizzled with our secret sauce, this burger is a harmonious blend of savory and subtle sweetness, guaranteed to tantalize your taste buds.");
    let menu3 = new Menu("/src/img/cheesecake.jpg", "Delicious Cheesecake", "18 Dollars", "Indulge in a slice of heaven with our creamy and decadent cheesecake. Set atop a buttery graham cracker crust, this dessert is the perfect blend of sweet and tangy, topped with a luscious layer of strawberry glaze. It's a symphony of flavors that dance on the palate, promising a delightful end to your dining experience.");

    menuContainer.addMenu(menu1);
    menuContainer.addMenu(menu2);
    menuContainer.addMenu(menu3);

    contentElem.appendChild(menuContainer.menuContainer);

    //---------------Creates menu part of the page------------------
}


export {pageLoader, homeLoader, contactLoader, menuLoader}