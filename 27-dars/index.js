// // function* getData(){
// // 	yield 1;
// // 	yield 2;
// // }
// // const generator=getData()
// // const gr=getData()
// // for(vl of generator){
// // 	console.log(vl);
// // }

// // console.log([...generator]);
// // console.log(generator.next());
// // console.log(generator.next());
// // console.log(generator.next());

// function* getData(){
// 	let id=users.length;
// 	while(true){
// 		yield ++id
// 	}
	
// }
// const generator=getData()
// let users=[
// 	{id:1,name:"Eshmat1"},
// 	{id:2,name:"Eshmat2"},
// 	{id:3,name:"Eshmat3"},
// 	{id:4,name:"Eshmat4"},
// 	{id:5,name:"Eshmat5"},
// 	{id:6,name:"Eshmat6"},
// ];
// // const onDalete=(id)=>{
// // 	let res=users.filter((vl)=>vl.id!==id);
// // 	users=res
// // };

// // const add =(usr)=>{
// // 	users=[...users,{id:generator.next().value,name:usr}]
// // }
// users.map((value,index)=>{
//     console.log(index+1,"-",value.name);
//  });
// // add("Toshmat")
// // // onDalete(3)
// // add("Toshmat1")
// // add("Toshmat2")
// // // onDalete(7)
// console.log(users)



// let user={
//     name:"webbrain",
//     _stir:1234,
// }
// let proxy=new Proxy(user,{
//     get(target,prop) {
//         if(prop.startsWith("_")) return `${prop}ga kirish taqiqlanadi`
//         return target[prop]
//     },
// })
// console.log(user);
// console.log(proxy._stir);
// console.log(proxy.name);

// let ar=[1,2]
// let usr={name:"webbrain"}
// let proxy=new Proxy(usr,{
//     set(target,prop,value){
//         console.log(prop,value);
//         return true;
//     },
// });
// proxy.title="IT Centr";
// console.log(proxy);


// let user={name:'webbrai',_pw:1234}

// let proxy=new Proxy(user,{
//     ownKeys(target){
//         Object.keys(target)
//     }
// })
// for(vl in user){
//     console.log(vl,user[vl]);
// }
// ===================================================
// loop bo'layotganda qaysidir keyni yashirish

// let user={name:'webbrai',_pw:1234}

// let proxy=new Proxy(user,{
//     ownKeys(target){
//     return    Object.keys(target).filter((vl)=>!vl.startsWith("_"))
//     }
// })
// for(vl in proxy){
//     console.log(vl);
// }
// ========================================================
// biz kiritgan son belgilangan oraliqda bor yoki yo'qligini
// tekshirb beradi,true false qaytaradi

// let range={
//     from: 1,
//     to: 10
// };
// let proxy=new Proxy(range,{
//     has(target,prop){
//         return target.from <= prop && target.to >= prop
//     },
// });
// range.to=100
// console.log(20 in proxy);
// ======================================================
// REflect.set malumot qo'shadi,get oladi

// let user={name:'webbrai',_pw:1234}
// Reflect.set(user,"title","IT Center")

// console.log(Reflect.get(user,"_pw"));
// =====================================================
// bu yerda agar data() deb functionni chaqirsak this
// yo'qolib qoladi.
// let user={
//     name:"webbrain",
//     _pw: 1234,
//     get(){
//        console.log(this.name,this._pw); 
//     },
// };
// let data=user.get;
// data.call(user);









