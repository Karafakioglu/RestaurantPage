import {pageLoader,contactLoader,menuLoader,homeLoader} from "./pageLoader";
import './style.css';

pageLoader(homeLoader);


window.addEventListener("click", function(e) {
    
    const text = e.target.innerText;
    console.log(e.target.innerText);
    if(text == "Home"){
        pageLoader(homeLoader);
    }
    else if(text == "Menu"){
        pageLoader(menuLoader)
    }
    else if(text == "Contact"){
        pageLoader(contactLoader);
    }
})