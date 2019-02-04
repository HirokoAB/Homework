
//課題の大元
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
// //headはドキュメントのhead部分

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

//失敗　→ 國吉さんか屋慶名先生に聞いてみる


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

// let head = document.head;
// document.addEventListener('DOMContentLoaded',function(){
// let linkElement = document.createElement("link");
//   linkElement.type = "text/css";
//   linkElement.rel = "stylesheet";
//   linkElement.href = "style2.css";
//     head.appendChild(linkElement);  



//宿題の回答
// //クラス名を追加
// let elem2 = document.getElementById('elem2');
// elem2.addEventListener('mouseover',function(){
//     this.className = 'blue';
// })
// elem2.addEventListener('mouseout',function(){
//     this.className = '';
// })

// //クリックされた時に色を変更する
// let elem3 = document.getElementById('elem3');
// elem3.addEventListener('click',function(){
//     if(this.className=== 'blue'){
//     elem3.className='';
//     }else{ 
//         elem3.className='blue';
// }
// })

// let elem4 = document.getElementById('elem4');
// elem4.addEventListener('click',function(){
//     this.classList.toggle('blue');
// })




  let elem4 = document.getElementById('elem4');
  elem4.addEventListener('click', function(){
    
    this.classList.toggle('blue');
    
  })















