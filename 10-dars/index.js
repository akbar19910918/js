// let ar =[1,2,3,4,5,"sfaf"]

// let ar =[12]
// console.log(ar.toString());

// let ar =[1,2,3,4,5]
// console.log(ar.join(""));

// let ar1 =[1,2,3]
// let ar2 =[4,5,6]
// console.log(ar2.concat(ar1));

// let ar =[1,2,3,4,5,"olma","nok","kiwi"]
// console.log(ar.length);
// console.log(ar[2]);
//  console.log(ar.indexOf("olma"));
// console.log(ar.lastIndexOf("olma"));

// let ar =[1,2,3,4,5,"olma","nok","kiwi"]
// console.log(ar.push("s"));
// console.log(ar.pop(1));
// console.log(ar);

// let ar =[1,2,3,4,5,"olma","nok","kiwi"]
// console.log(ar.unshift("s"));
// console.log(ar.shift());
// console.log(ar);

// let ar =[1,2,3,4,5,"olma","nok","kiwi"]
// console.log(ar.slice(2,5));
// console.log(ar.splice(2,5,));

// let ar =[1,2,3,4,5,"olma","nok","kiwi"]
// console.log(ar.reverse());

// let ar =[1,2,3,4,5,"olma","nok","kiwi"]
// console.log(ar.includes("olcha"));
// ========================================================================
//                    1-masala
//   array ichidagi sonlar yi'g'indisini tiping
//  let ar=[12,23,34,45];
//  console.log(eval(ar.join("+")));
// 
// =========================================================================
//                    2-masala
// ["webbrain","academy"]-array ichidagi char sanog'ini topish karak

// function num(ar) {
// let str= ar.join("")
// res=0
// for(i=0;i<=str.length;i++){  
//     if(str)  {
//         res++
//     }
// }console.log(res);
// };
// num(['webbrain','academy'])
//========================================================================== 
//                    3-masala
// arrayni bir biriga taqqoslang
// let ar1=[1,2]
// let ar2=[1,2]
// const getData =(ar1,ar2)=>{
//    let Arr1 =ar1.join("")
//    let Arr2 =ar2.join("")
//     return Arr1 ===Arr2;
// };
// console.log(getData(ar1,ar2));
// =========================================================================
//                    4-masala
//  o'zgartirish
//              // function camelize(str) {

//     let res = ""
  
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === "-") {
  
//         res += str[i + 1].toUpperCase()
//         i++
//       } else {
//         res += str[i]
//       }
//     }
//     return res
  
//   }
  
//   console.log(camelize("backround color"));
//   console.log(camelize("-backround-color"));
//   console.log(camelize("backround-color"));       
// camalize("beckgroud-color") =="beckgroudColor"
// camalize("list-style-image") =="listStyleImage"
// camalize("-webkit-transition") =="WebkitTransition"

// ========================================================================
//                    1-masala
// birary sonlarni decimal sonlarga o'zgartiring

// function binary (str){
//      res=str.join("");
//    return console.log(parseInt(res,2));
// }
// binary([0,1,0,1])
// binary([0,0,1])

// ========================================================================
//                    2-masala
// so'z ichidagi unlilar miqdorini hisoblang

// function unlilar(str){
//     let res =0
//     for (i of str) {
//         if(i=="a" || i=="e" || i=="i" || i=="u" || i=="o"){         
//            res++
//         }
//     }
//     console.log(res);
// };
// unlilar("webbrain academy")
// ========================================================================
//                    3-masala
// eng qisqa so'zlar miqdorini hisoblang

// function findShortestWord(str) {
//     var words = str.split(' ');
//     var shortest = words.reduce((shortestWord, currentWord) => {
//       return currentWord.length < shortestWord.length ? currentWord : shortestWord;
//     }, words[0]);
//     return shortest;
//   }
//   console.log(findShortestWord("The quick brown fox jumped over the lazy dog"));

// ========================================================================
//                    4-masala
// dublicate sonlarni qaytaring
// [1,2,4,4,3,3,1,5,3"5"]  [4,3,1]
// [0,1,2,3,4,5]  []
// function dublicate(arr) {
//     return arr.filter((value,index)=>
//     arr.indexOf(value) !== index)
// }console.log(dublicate([1,2,4,4,3,3,1,5,3,"5"]));
// ========================================================================
//                    5-masala
// eng kichkina miqdorni olb tashlang
// [1,2,3,4,5] [2,3,4,5]
// [5,3,2,4,1] [5,3,2,4]
// [2,2,1,2,1] [2,2,2,1]

// function kichik(ar){
//          var array = [];
//          var min = Math.min(...ar)
//  for(var i=0;i<ar.length;i++){
//   if(ar[i]>min){
//     array.push(ar[i])
//   }
//  }

// console.log(array); 
// }
// kichik([2,2,1,2,1])
// ===========================================================================
// let str=['olma','Banana','kiwi','Nok','anor'  ]
// let ar=[1,2,5,4,6,12,5,24,3,5]
// console.log(num.sort((a,b)=> b-a))
// console.log(str.sort((a,b)=>a.localeCompare(b)))

//  let res=ar.filter((value,index) => {return value==5})
//  console.log(res);

// let res=str.filter((value,index) => {return value !=="olma"})
// console.log(res);

// console.log(ar.find((value)=>value===5));
// console.log(ar.findIndex((value)=>value===5))
// console.log(ar.findLastIndex((value)=>value===5))
// let ar=[1,2,5,4,6,12,5,24,3,5]
// console.log(ar.every((value)=> value<30));
// console.log(ar.some((value)=> value>15));

// let ar=[1,2,5,4,6,12,5,24,3,5]
// console.log(ar);
// console.log(ar.fill("=",0,5));

// let ar=[1,2,3,4,5]
// console.log(ar);
// console.log(ar.copyWithin(0,1,3));

// let ar=[1,2,3,4,5]
// let res=ar.map((b) => {return b } );

// console.log(res);

// let ar=[1,[2,[[[[[[[[[[[[[[3],4]]]]]]]]]]]]],5],6]
// console.log(ar.flat(Infinity));



let str=[]
let ar=Array.from("webbrain12",(value) =>{if(value===isNaN)})

    console.log(str);



























