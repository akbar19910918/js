// let ar=[1,2,3,4,5,6,7];
// Array.prototype.delete=function (id){
//     let res=this.filter((value)=>value!=id )
//     console.log(res);
// };
// ar.delete(3)

// let arr = [1, 2, 3, 4, 5, 6, 7];

// function deleteIn(arr, id, name, status) {
//     let res = [];
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] !== id && arr[i] !== name && arr[i] !== status ? res.push(arr[i]) : res = res
//     }
//     return res;
// }

// console.log(deleteIn(arr, 2, 4, 5))

// let ar = [123456789]
// Array.prototype.delete = function (a,b,c){
//     let array=ar.toString(ar)
//         let res=Array.from(array,(value)=>value)
//         let arr=res.join()
//         let num = [];
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] !== a && arr[i] !== b && arr[i] !== c ? num.push(arr[i]) : num=num
//     }
//     return num;
//         // console.log(num);
// };
// console.log(ar.delete());

// Array.prototype.delete = fucntion (id) {
//     let array=ar.toString(ar)
//     let arr=Array.from(ar,(value)=>value)
//     let res=this.filter((value)=>value!=id)
//     console.log(res);
// };


// ar.delete(1)


// let array=ar.toString(ar)
// let arr=Array.from(array,(value)=>value)
// console.log(arr);

// class user{
//     year=1;
//     fullName(pr){
//         console.log(++this.year);
//     }
// }
// let str1=new user();
// let str2=new user()
// str1.fullName();
// str1.fullName();
// str2.fullName();
// str2.fullName();
// str2.fullName();

// let obj={title:"webbrain",name:"academy",age:12 };
//  obj._proto_={length:Object.values(obj).length}
//  let ar=[1,2,3,4,5]

// console.log(obj, "object");
// console.log(ar,"array");

// let obj={title:"webbrain",name:"academy" };
// let obj2={age:12 };
// obj._proto_=obj2;
// console.log(obj);

const sumName = (company) => {
    if (Array.isArray(company)) {
      return company.map((value) => value.name)
    } else {
      let num = []
      for (let child of Object.values(company)) {
        num.push(sumName(child))
      }
      return num
    }
  }
  console.log(sumName(company).flat(Infinity));

