class Home{
    constructor(){
        this.element = document.createElement('div');
        this.element.className = "welcome-div";
        this.p = document.createElement('p');

        this.p.innerText = "If you are looking for a delicious place to eat, look no more! All the food are prepared with love!";
        this.p.className = "welcome-p";
        this.element.appendChild(this.p);

    }
}

export {Home};