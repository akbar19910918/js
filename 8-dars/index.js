//  function num(str){
//     if(str.startsWith("+998")){
//         return str
//     }
//     else{
//         return str.padStart(str.length+4,"+998")
//     }
//  }
//  console.log(num("334652020"));
 
// ==================================================================


//                             1-masala
// function number(str){
//     let num={
//         country:'',
//         region:'',
//         city:'',
//         code:''
//     }
//     let array=str.split("");
//     if(array.length==13){
//         num.country=str.substring(0,4);
//         num.region=str.substring(4,6);
//         num.city=str.substring(6,9);
//         num.code=str.substring(9,13);
//     }
//      if(array.length==9){
//         num.country="+998";
//         num.region=str.substring(0,2);
//         num.city=str.substring(2,5);
//         num.code=str.substring(5,9);
//     }
//     console.log(num);
// }
// number("335762020");




// ===========================================================
//                     
//                   
//                               2-masala
// 1. check(str1,str2)-function yozilsin.berilgan parametrlar bir biriga mos
//  yoki umuman to'g'ri kelmasligi 
// va qisman to'g'ri ekanligini ifodalovchi natija qaytarsin.
// Ex:str1="webbrain academy",str2-'acsa'

// function check(str1,str2) {
// 
//   for(i of str1){
//      if(str1===str2){
//         console.log("to'g'ri");
//         }   
//      else if(str1.includes(str2)){
//        console.log("qisman to'g'ri");
//        break
//     }
    
//     else console.log("to'g'ri emas");
//     break
//   }
  
// };
//   check("webbrain academy"," htdjyd") 





// ==========================================================================================
//                                3-masala
// 2. getCosunt(str)-function yozilsin.function str dagi xarflar sanog'ini chiqarb bersin.
// ex:str="webbrain"{w:1,e:1,b:2,r:1,a:1, i:1,n:1}

// function getCosunt(str){
//     let res={};
//     for(i of str){
//         if(i in res){
//             res[i]++;
//         }else res[i]=1;
     
//     }
//     console.log(res);
// }
// getCosunt("webbrain")
// ===========================================================================================
//                ;                4-masala
// 3. truncate(str,n) - function yozilsin.berilgan stringdan n ta xarf ajratb chiqarb bersin
// ex:str='webbrain academy',n=5
// res:'webbr'
// function truncate(str,n){
//        if (n) {
//          console.log(str.slice(0,n));
//        }else{console.log(str);}
// }
// truncate("webbrain academy",3)

// ============================================================================================
//                                5-masala
// 4. getCurrency(str) - berilgan pul birligini faqat raqamlarini ajratb chiqaring.
// ex:str='$1200'-1200
// function getCurrency(str) {
//    res=''
//    for(i of str){
//        if( isFinite(i)){
//            res+=i
//        }
//    }console.log(res);
// }
// getCurrency("$1400")


// =============================================================================================
//                                6-masal
// 5. berilgan string ichidan raqam,string va characterlarni aloxida sanogi bn chiqaring
// ex:'webbr@<>!n_2022'
// res:{latter:6,char3,numbers:4}

// function getdata(str){
//     let res={num:0,str:0, char:0,}
//     for (i of str){
//         if(isFinite(i)){
//             res.num++;
//         }else if (i.toLowerCase() !==i.toUpperCase()){
//           res.str++;
//         }else res.char++;
//     }
//     console.log(res);
// }
// getdata('webbr@<>!n_2022')


// =============================================================================================
//                                7-masala
//  6.capitilize(str)-berilgan stringdagi barcha sozlarni faqatbosh xarfini katta xarfga o'zgartiring
// ex:webbrain academy,
// res:Webbrain Academy


// function getData(str){
//       let res=""; 
//       for(i in str){
//       if( str[i-1] ===" "|| str[i-1] === undefined ){
//         res+= str[i].toUpperCase()
//       }
//         else{ res+=str[i]};
//       }
//       console.log(res);
//     }
//     getData("webbrain academy")

// ==============================================================================
// 

