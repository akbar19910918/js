// sum (1)(2)==3;   1+2
// sum (1)(2)(3)==6;  1+2+3
// sum (5)(-1)(2)==6;
// sum (0)(1)(2)(3)(4)(5)==15

// let sum=(a)=>{
//     return(b)=>{console.log(a+b);};
// };
// sum(1)(2)
// let sum=(a)=>{
//     return(b)=>{return(c)=>console.log(a+b+c);};
// };
// sum(1)(2)(3)

// let sum=(a)=>{
//     return(b)=>{return(c)=>console.log(a+b+c);};
// };
// sum(5)(-1)(2)
// let sum=(a)=>{
//     return(b)=>{return(c)=>{return(d)=>console.log(a+b+c+d);}};
// };
// sum(6)(-1)(-2)(-3)
// =======================================================================================
//                              N1
// object keylarini toping
// let obj={
//     id:1,
//     name:"WebBrain"
// }
// function obyect(obj){
//     for(i of obj){
//         console.log(i);
//     }
// };

// chiqish
// id,name
// no2
// object valuelarining raqamga tenglarini toping
// let obj={
//     id:1,
//     name:"WebBrain"
// }
// chiqish
// id
// No3
// object valuelarining boolean tipidagi malumotlrini qaytaring keylari bn biriga
// let obj={
//     id:1,
//     name:"WebBrain",
//     offline:true,
//     online:true,
//     individual:false
// }
// chiqish
// {   offline:true,
//     online:true,
//     individual:false
// }
// No4
// object va string berilgan .agar object keylari ichida stringga teng bolgan key bolsa shu key va valueni chiqazing
// let obj={
//     id:1,
//     name:"WebBrain",
//     offline:true,
//     online:true,
//     individual:false
// }
// function Search(obj,str){}
// Search(obj,'WebBrain')
// chiqish
//     name:"WebBrain"
// No5
// object va string berilgan.  string bor bolgan object valuelarining chiqaring
// let obj={
//   id:1,
//   name:"atirgul",
//   color:"qizil",
//   count:10,
//   price:"10$"
// }
// searchValue(obj,'i') => atirgul,qizil
// No6
// object ichida objectlar berilgan. ichki objectlarning ichiga age degan key berilgan. barcha ichki keylardagi age lar yigindisini toping
// let person = {
//     id: 1,
//     name: 'Odil',
//     age:78,
//     child: {
//         id: 1,
//         name: 'Ali',
//         age:48,
//         child: {
//             id: 1,
//             name: 'Umar',
//             age:20
//         }
//     }
// }
// chiqish
// 146

// No7
// array berilgan array ning ichida objectlar berilgan. object ichida age berilgan. age ni 18dan katta bolgan objectlarni qaytaring
// let user = {
//     id: 1,
//     name: 'Odil',
//     age: 78,
//     children: [
//         {
//             id: 1,
//             name: 'Umar',
//             age: 54,
//             children: [
//                 { id: 1, name: 'Asmo', age: 34 },
//                 { id: 2, name: 'Osim', age: 30 },
//                 { id: 3, name: 'Xattob', age: 25 },
//             ]
//         },
//         { id: 2, name: 'Umar', age: 54 },
//         { id: 3, name: 'Umar', age: 54 },
//     ]
// }

// No8
// array ichida object berilgan. job berilgan objectlarni qaytaring
// let arr=[
//     {id:1,name:'Usmon',job:'developer'},
//     {id:2,name:'Usmon',job:'developer'},
//     {id:3,name:'Usmon'},
//     {id:4,name:'Usmon',job:'developer'},
//     {id:5,name:'Usmon'}
// ]
// No9
// objectdan clone oling birinchi objni o'zgartirsa ikkinchisi malumotlari ozgarmasligi kk
// let obj={
// id:1,name:'Usmon',job:'developer'
// }

// No10
// objectga yangi qiymat qo'shuvchi funksiya yozing
// add(obj,key,value){}
// add(obj,'address','toshkent')
// No11
// agar object ichida practice 1 dan katta bolsa 'qabul qilindi'.aks holda 'ming bor uzur.'
// let obj = {
//     id: 1,
//     name: 'Usmon',
//     job: 'developer',
//     practice:1
// }
// chiqish
// qabul qilindi
// No11
// agar object ichida talaba bolsa objectga {kiridit:true} key va value qoshilsin aks holsa {kiridit:olinmadi} qoshilsin
// let obj = {
//     id: 1,
//     name: 'Usmon',
//     job: 'developer',
//     practice:1,
//     talaba:true
// }
// chiqish
// let obj = {
//     id: 1,
//     name: 'Usmon',
//     job: 'developer',
//     practice:1,
//     talaba:true,
//     kiridit:true
// }



// let map=new Map([
//     ["name","webbrain" ],
//     ["title","academy" ]
//  ])
// // console.log(map.keys());
// // console.log(map.values());
// // console.log(map.entries());
// console.log(Object.fromEntries(map).title);


// const sum=(n)=>{
//     if(n===10) return 10;
//     else{
//         return n+sum(n-1)
//     }
// }
// console.log(sum(15));
const num=(n)=>{
    if(n===5) return 5;
    else{
        return n*num(n-1)
    }
}
console.log(num(10));
function getInfo(a,b,c) {
    console.log(this.name,this.surname,a,b,c);
};
getInfo.call({name:"eshmat",surname:"toshmat"},"web1",1)
getInfo.apply({name:"eshmat",surname:"toshmat"},['web2',1,2,3])
let test=getInfo.bind({name:"eshmat",surname:'toshmat'},"web3",1,2,3 )
test()