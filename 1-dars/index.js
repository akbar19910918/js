// let myu=[
//     {id:1,  name:"David De Gea",      num: 1,  status: "darvozabon"},
//     {id:2,  name:"Luka Shaw",         num: 23, status: "himoyachi"},
//     {id:3,  name:"Lisandro Martines", num: 6,  status: "himoyachi"},
//     {id:4,  name:"Raphael Varane",    num: 19, status: "himoyachi"},
//     {id:5,  name:"Diogo Dalot",       num: 20, status: "himoyachi"},
//     {id:6,  name:"Cazemiro",          num: 18, status: "yarim himoyachi"},
//     {id:7,  name:"Donny Van De Beek", num: 35, status: "yarim himoyachi"},
//     {id:8,  name:"Antony",            num: 21, status: "hujumchi"},
//     {id:9,  name:"Jadon Sancho",      num: 25, status: "hujumchi"},
//     {id:10, name:"Bruno Fernandes",   num: 8,  status: "pleymeykr"},
//     {id:11, name:"Marcus Reshford",   num: 10, status: "markaziy hujumchi"},
//     {id:12, name:"Achilov Akbar",     num: 7,  status: "darturchi"},
// ]
// //         CRUD
// //  Crate,----distructura,use sprea(...)
// // Read, --------filter,sort,includes,find
// // Update,------filter,find,map
// // Delate ,-----filter,splice

// // const filter=(key)=>{
// //     let res=myu.filter((value)=>value.name.includes("ov"));
// //     console.log(res);
// // }
// // filter('ov')
// // const qoshish=(key)=>{
// //   let res=myu.splice(0,1,);
// //   console.log(myu);
// // };
// // qoshish({id:12, name:"Achilov Akbar",     num: 7,  status: "darturchi"},)





// const alphabetSort = (arr) => {
//     let res = myu.sort((a, b) => a.name.localeCompare(b.name));
//      console.log(res);
//   };
//     //  alphabetSort(myu);

// const numSort= (arr)=>{
//     let res=myu.sort((a,b) => a.num-b.num);
//     console.log(res);
// };
// // numSort(myu)

// // const deletaUser =(id) =>{
// //     let res=myu.filter((value)=>value.id !==id)
// //     console.log(res);
// // };
// // deletaUser(12);
// // const addUser =(user) =>{
// //     myu=[...myu,{id:myu.length+1,...user}];//malumot qo'shish
// //     // console.log(user);
// //     // myu.push(user);
// // };
// // addUser({name:"Erig Ten Hag",num:"yoq'",status:"bosh murabbiy" });
// // console.log(myu);

// // const updataUser =(data) =>{
// //     let res=myu.map((value)=>value.id === data.id //malumotni yangilash
// //     ? {...value,[data.type]:data.value}:value )
// //     myu=res
// // };
// // updataUser({id:7,type:"name",value:"Christian Eriksen"})
// // updataUser({id:7,type:"num",value:14})
// // console.log(myu);

// // // ==========================================================================================================

// const varatar =(str) =>{
//     let res=myu.filter((value)=>value.status ==='darvozabon')
//     console.log(res);
// };
// // varatar('darvozabon')

// const himoyachi =(str) =>{
//     let res=myu.filter((value)=>value.status ==='himoyachi')
//     console.log(res);
// };
// //  himoyachi('himoyachi')
// const yarm_himoyachi =(str) =>{
//     let res=myu.filter((value)=>value.status ==='yarim himoyachi')
//     console.log(res);
// };
// // yarm_himoyachi('yarim himoyachi')
// const hujumchi =(str) =>{
//     let res=myu.filter((value)=>value.status ==='hujumchi')
//     console.log(res);
// };
// // hujumchi('hujumchi')
// const pleymeykr =(str) =>{
//     let res=myu.filter((value)=>value.status ==='pleymeykr')
//     console.log(res);
// };
// // pleymeykr('pleymeykr')

// const markaziy_hujumchi =(str) =>{
//     let res=myu.filter((value)=>value.status ==='markaziy hujumchi')
//     console.log(res);
// };
// markaziy_hujumchi('markaziy hujumchi')






// let str=[1,2,3,4,5];
// let res=str.reduce((value,curr)=>{
//     console.log(value,curr);
//     return value
// },str)





// let company={ sales:[
//     {name:"Jons",salary:1000},
//     {name:"Alic",salary:1600}
// ],
// development:{sites:[
//     {name:"Peter",salary:2000},
//     {name:"Alex",salary:1400}
// ]},
// internals:[{name:"Jon",salary:1000}]

// };
// function getCalc(company){
//     if(Array.isArray(company)){
//         return company.reduce((prev,curr)=>prev+curr.salary,0);
//     }
//     else{let sum=0;
//         for(let a of Object.values(company)){
//             sum+=getCalc(a)
//         };
//         return sum;
//     };
// };

// console.log(getCalc(company));

// let obj={
//     name:"webbrain",
//     title:"IT Center",
//     year:2019,
//     info:{status:"frontend"},
//     age:4
// };
// // console.log(JSON.stringify(obj,["name"]));
// console.log(JSON.stringify(obj,[...Object.keys(obj).filter((value) =>value !=="age" )]));








// let obj={
//     name:"webbrain",
//     title:"academy",
//     info:{age:3}

// }
// // console.log(obj.info.age);

// let{name:newName,
//     title,
//     info:{age},
// }=obj

// console.log(age);

// let ar=["olma","nok","uzum","olcha" ];
// let[bir,...res]=ar
// console.log(res);


// let time=new Date();
// console.log(time.getHours());
// console.log(time.getMinutes());
// console.log(time.getSeconds());
// console.log(time.getDay());
// console.log(time.getDate());
// console.log(time.getMonth()+1);
// console.log(time.getFullYear());
// console.log(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`);



// console.log(JSON.stringify(obj,[...Object.keys(obj).filter((value)=>value!=="title")]));

// console.log(JSON.parse(`{"name":"webbrain"}`));
// console.log(JSON.stringify(obj,["name","title"],4));





//     ["name","webbrain"],
//     ["title","IT Center"]
// ])
// console.log(Object.fromEntries(map));
// let obj={
//     name:"webbrain",
//     title:"acdemy",
//     status:"IT Center",
//     age:3
// };
// console.log(obj.name);
// let map=new Map()
// map.name="webbrain"
// map.title="webbrain"
// map.set("name","IT Center")
// console.log(map);
// console.log(map.get("title"));
// console.log(map.has("name"));

// let obj={name:"webbrain"}
// let set = new Set();
// set.add(obj)
// set.add("academy","web")
// set.add("IT Center")
// console.log(set);













