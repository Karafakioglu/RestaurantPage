class Contact{
    constructor(){
        this.div = document.createElement('div');
        this.p = document.createElement('p');

        this.p.innerText = "You can contact us at +1 123 456 878. Our address is Cool Address";
        this.div.appendChild(this.p);
    }
}

export {Contact};