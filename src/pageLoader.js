import { Navbar, Header, Footer, BackgroundImg  } from "./staticElements";
import { Home } from "./home";

export default function pageLoader() {
    const bodyElem = document.body;
    const contentElem = document.getElementById('content');

    //---------------Creates static part of the page------------------

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

    //---------------Creates static part of the page------------------

    let home = new Home();
    
    contentElem.appendChild(home.element);
}