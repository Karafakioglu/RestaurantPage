class MenuContainer{
    constructor() {
        this.menuContainer = document.createElement('div');
        this.menuContainer.className = "menuContainer";
    }

    addMenu(menu) {
        this.menuContainer.appendChild(menu.menu);
    }
}

class Menu{
    constructor(photoSrc, menuName, menuPrice, menuDescription) {
        this.menu = document.createElement('div');
        this.menu.className = "menu";

        this.photo = document.createElement('img');
        this.photo.src = photoSrc;

        this.name = document.createElement('p');
        this.name.innerText = menuName;

        this.price = document.createElement('p');
        this.price.innerText = menuPrice;

        this.description = document.createElement('p');
        this.description.innerText = menuDescription;

        this.menu.appendChild(this.photo);
        this.menu.appendChild(this.name);
        this.menu.appendChild(this.price);
        this.menu.appendChild(this.description);
    }
}

export {MenuContainer, Menu};
