
//課題の大元はここにある・・・
// document.addEventListener('DOMContentLoaded',function(){
//     let elem = document.getElementById('elem');
//     elem.addEventListener('mouseover',function(){
//         //thisとはイベント発生源のこと
//         this.style.color = '#ff0000'
//     });
//     elem.addEventListener('mouseout',function(){
//         //thisとはイベント発生源のこと
//         this.style.color = ''
//     });

// });

//Samuraiで調べた内容を試す
// let head = document.head;
// //headはドキュメントのhead部分である

//  linkElement = document.createElement("link");
// //linkElementにlinkタブ作れの命令を格納 
//   linkElement.type = "text/css";
// //LEの属性はtext/cssである
//   linkElement.rel = "stylesheet";
// //LEのrelはstylesheetである
//   linkElement.href = "style.css";
// //LEの参照元ははこちらでである 
//   head.appendChild(linkElement);
//headの子要素にLE作成

//!!見事成功!!
//しかし記述が長くてうんざりしだす　→ そうだ直接オブジェクトにしてみよう！
// let head = document.head;
// linkElement = document.createElement("link");
// linkElement ={
//     type:"text/css",
//     rel:"stylesheet",
//     hrel:"style.css"
// };
// head.appendChild(linkElement);
//試す↓
// linkElement = document.createElement("link");
// head.appendChild(linkElement);

//失敗　→ 國吉さんか屋慶名先生に聞いてみよー


// let head = document.head;
// let linkElement = document.createElement("link");
// //linkElementにlinkタブ作れの命令を格納 
//   linkElement.type = "text/css";
// //LEの属性はtext/cssである
//   linkElement.rel = "stylesheet";
// //LEのrelはstylesheetである
//   linkElement.href = "style.css";
//LEの参照元ははこちらでである 
  // head.appendChild(linkElement);


//------------<回答ここから>--------------


//外部CSS取り込みの回答①------------------------------
// let head = document.head;
// let linkElement = document.createElement("link");
//   linkElement.type = "text/css";
//   linkElement.rel = "stylesheet";
//   linkElement.href = "style.css";

// let elem = document.getElementById('elem'); 

// document.addEventListener('DOMContentLoaded',function(){
//     let elem = document.getElementById('elem');
    
//     elem.addEventListener('mouseover',function(){
//         head.appendChild(linkElement);
//     });
//     elem.addEventListener('click',function(){
//         this.style.color = '#ff0000'
//     });
//     elem.addEventListener('mouseout',function(){
//     head.removeChild(linkElement);
//     });
// });

//外部CSS取り込み動作の回答②--------------------------

// let head = document.head;
// let linkElement = document.createElement("link");
//   linkElement.type = "text/css";
//   linkElement.rel = "stylesheet";
//   linkElement.href = "style.css";
//  let elem = document.getElementById('elem'); 

//  function leave(){
//     head.removeChild(linkElement);
//  };
//  function work():click() {
//     head.appendChild(linkElement);
// };

// function click(){
//     head.appendChild(linkElement);
// };


//外部CSS取り込み動作の回答③--------------------------

// let head = document.head;
// let linkElement = document.createElement("link");
//   linkElement.type = "text/css";
//   linkElement.rel = "stylesheet";
//   linkElement.href = "style.css";
//  let elem = document.getElementById('elem'); 

//  function leave(){
//     head.removeChild(linkElement);
//  };
//  function work(){
//     head.appendChild(linkElement);
// };

//外部CSS取り込み動作の回答④--------------------------

let head = document.head;
document.addEventListener('DOMContentLoaded',function(){
let linkElement = document.createElement("link");
  linkElement.type = "text/css";
  linkElement.rel = "stylesheet";
  linkElement.href = "style.css";
})



