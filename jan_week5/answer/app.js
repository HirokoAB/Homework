let head = document.head;
document.addEventListener('DOMContentLoaded',function(){
let linkElement = document.createElement("link");
  linkElement.type = "text/css";
  linkElement.rel = "stylesheet";
  linkElement.href = "style2.css";
    head.appendChild(linkElement);  
})
