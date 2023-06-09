//  ReferenceError
// let a=1;
// try {
//     a=b+1;
// } catch(er){
//   console.log(er.name);
//   console.log(er.message);
// }

//  SyntaxError
// let a=10;
// let a=12;

// TypeError
// let num =1;
// try{
//     num.toUpperCase();
// } catch(er){
//     console.log(er.name);
// }

// RangeError
// let num = 1;
// try{
//     num.toPrecision(200);
// }catch(er){
//     console.log(er.name);
//     console.log(er.message);
// }

// try{
//     let a=40;
//     if(a<5||a>10){
//         throw new RangeError("berilgan son 5 va 10 oralig'ida emas")
//     }
// }catch(er){
//      console.log(er.name);
//      console.log(er.message);
//      console.log(er.stack);
// }

// console.log(1);
// console.log(2);
// setTimeout(() => {
//     console.log(3);
// },2000);
// console.log(4);

// function qoshish(a,b){
//     return a+b;
// }
// function ayrish(a,b){
//     return a-b;
// }
// function kopaytirish(a,b){
//     return a*b;
// }
// function bolish(a,b){
//     return a/b;
// }
// function calculate(a,b,amal_bajarish){
//     return amal_bajarish(a,b)
// }
// console.log(calculate(4,2,qoshish));
// console.log(calculate(4,2,ayrish));
// console.log(calculate(4,2,kopaytirish));
// console.log(calculate(4,2,bolish));

// new Promise((resolve, reject) => {
//     let error=false;
//     if(!true){
//         resolve()
//     }else{
//         reject()
//     }
// // })

// let promise=new Promise((resolve, reject) => {
//     let num=3;
//     if(num===5){
//         resolve('togri')
//     }else{
//         reject('xato')
//     }
// }) 
// promise
// .then(message=>{
//     console.log('This is in the then block:', message);
// })
// .catch(message=>{
//     console.log('This is in the catch :', message);
// })
// .finally(()=>{
//     console.log('top');
// })

// let data=[
//     {id:1,name:"John",age:20},
//     {id:2,name:"Jack",age:30},
//     {id:3,name:"Marc",age:40}
// ]

// function render(){
//     setTimeout(()=>{
//         data.forEach(user => {
//           console.log(`${user.id} ${user.name} ${user.age} `);  
//         });
//     },1000)
// }
// render()

// function deleteUser(id,callback){
//   setTimeout(()=>{
//     let res=data.filter(user=>user.id !== id )
//     data=res
//     callback()
//   },2000)
// };
// // deleteUser(1,render)

// function addUser(user,callback){
//     setTimeout(()=>{
//         data=[...data,user]
//         callback()
//     },4000)
// }
// addUser({id:data.length+1,name:"eshmat",age:50},render)

// let data=[
//     {id:1,name:"John",age:20},
//     {id:2,name:"Jack",age:30},
//     {id:3,name:"Marc",age:40}
// ];

// function render(){
//     setTimeout(()=>{
//         data.forEach(user => {
//           console.log(`${user.id} ${user.name} ${user.age} `);  
//         });
//     },1000)
// }
// render();
// function deleteUser(id,callback){
//    return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         let res=data.filter(user=>user.id !== id )
//         data=res
//     console.log("============");
//     let error=true;
//     if(!error){
//         resolve()
//     }else{
//         reject('xatolik bor')
//     }
//       },3000)
//    })
//   };
//   deleteUser(1)
//   .then(render)
//   .catch(error=>console.log(error))


// let data=[
//     {id:1,name:"John",age:20},
//     {id:2,name:"Jack",age:30},
//     {id:3,name:"Marc",age:40}
// ];

// function render(){
//     setTimeout(()=>{
//         data.forEach(user => {
//           console.log(`${user.id} ${user.name} ${user.age} `);  
//         });
//     },1000)
// }
// render();
//  async function deleteUser(id,){
  
//         let res=await data.filter(user=>user.id !== id )
//         data=res
//    render()
//   };
//   deleteUser(1)

// const data=new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('working')
//     }, 1000);
// });
// const getData=async()=>{
//     let res=await data;
//     console.log(res,'test');
// }
// getData();
// console.log('akbar');