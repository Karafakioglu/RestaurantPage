import { Navbar, Header, Footer  } from "./staticElements";

export default function pageLoader() {
    const bodyElem = document.body;
    const contentElem = document.getElementById('content');

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

    let img = document.createElement('img');
    img.src = "/src/img/background.jpg";

    bodyElem.appendChild(img);
}