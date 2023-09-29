class Navbar {
    constructor() {
        this.element = document.createElement('nav');
        this.ul = document.createElement('ul');
        this.element.appendChild(this.ul);
    }

    addItem(text) {
        let li = document.createElement('li');
        li.textContent = text;
        this.ul.appendChild(li);
    }

    configure() {
        this.addItem('Home');
        this.addItem('Menu');
        this.addItem('Contact');
    }
}

class Header {
    constructor(navbar) {
        this.element = document.createElement('header');
        this.navbar = navbar;
        this.addNavbar();
    }

    addNavbar() {
        this.element.appendChild(this.navbar.element);
    }
}

class Footer {
    constructor() {
        this.element = document.createElement('footer');
        this.element.innerText = "This is part of The Odin Project Curriculum"
    }
}

// class Body{
//     constructor(){
//         this.element = document.createElement('img');
//         this.element.src = "/src/img/background.jpg"
//     }
// }

export {Navbar, Header, Footer};