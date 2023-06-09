// function* getData(){
// 	yield 1;
// 	yield 2;
// }
// const generator=getData()
// const gr=getData()
// for(vl of generator){
// 	console.log(vl);
// }

// console.log([...generator]);
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

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
// const onDalete=(id)=>{
// 	let res=users.filter((vl)=>vl.id!==id);
// 	users=res
// };

// const add =(usr)=>{
// 	users=[...users,{id:generator.next().value,name:usr}]
// }

// add("Toshmat")
// // onDalete(3)
// add("Toshmat1")
// add("Toshmat2")
// // onDalete(7)
// console.log(users);

// let prom=new Promise((resolve, reject) => {
// 	let num=5;
// 	if(num===5){
// 		resolve("to'g'ri")
// 	}else{
// 		reject("noto'g'ri")
// 	}
// })
// prom
// .then(mes=>{console.log("o'g'ri",mes);})
// .catch(mes=>{console.log("xato",mes);})