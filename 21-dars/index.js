// class Person{
//     constructor(n){
//       console.log(n,this);
//     }
//     name='eshmat';
//     title='toshmat'
// }
// new Person('web')
// // let str=new Person('webbrain')
// // console.log(str);
// class Person{
//     constructor(n){
//       console.log(n,this.name,this.title);
//     }
//     name='eshmat';
//     title='toshmat'
// }
// new Person('web')

// class Person{
//     constructor(n){
//      this.name=n
//     }
 
// }

// let str=new Person('webbrain')
// console.log(str);

// class Person{
//     constructor(n){
//      this.name=n;
//     }
//    getData(){
//     console.log(this.name);
//    }
// }
// let str=new Person('webbrain')
// console.log(str.getData());

// class Calculator{
// constructor(action){
//     if(action==="minus") this.action="-";
//     if(action==="plus") this.action="+";
//     if(action==="mutiply") this.action="*";
// }
// Calc(...res){
//     return eval(res.join(this.action))
// }

// }
// let minus= new Calculator('minus');
// let plus = new Calculator('plus');
// let mutiply = new Calculator('mutiply');

// console.log(minus.Calc(2,3,4));
// console.log(plus.Calc(2,3,4));
// console.log(mutiply.Calc(2,3,4));

// class Parent{
//     constructor(age){
//         console.log(age,'yosh');
//     }
//     parent(){
//         return "parent ichida parent";
//     }
// }
// class Person{
//     constructor(age){
//         console.log(age,'yosh');
//     }
//     person(){
//         return "person ichida person";
//     }
// }

// class Child extends (Parent && Person) {
//     constructor(){
//         super(12)
//     }
//     child(){
//         super.parent()
//         return 'child ichida child';
//     }
// }
// // const parent=new Parent();
// const child=new Child();


// // console.log(parent.parent());
// console.log(child.person());

// 27.05.2023   4/5

// 1. returnga unique value qaytsin.

// findUniq([1, 1, 1, 2, 1, 1]) === 2
// function findUniq(ar){
//     let res=ar.sort((a,b)=>{return b-a});
//     console.log(res[0]);
//  }
//  findUniq([1, 1, 1, 2, 1, 1])
// findUniq([0, 0, 0.55, 0, 0]) 

// findUniq([0, 0, 0.55, 0, 0]) === 0.55

// let uniqK = null;
// let uniqK1 = null;
// function uniq(items) {
//   items.forEach((elem) => {
//     if (elem == uniqK) {
//       uniqK1 = elem;
//     } else {
//       if (uniqK == uniqK1) {
//         uniqK = elem;
//       }
//     }
//   });

//   return uniqK;
// }

// console.log(uniq([0, 0, 0.55, 0, 0]));

// ============================================================================

// 2 toq valularni tartiblang

// [7, 1]  => [1, 7]
// [5, 8, 6, 3, 4]  => [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  => [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// ============================================================================

// 3. valuelar yigindisini toping
// function arrPlusArr(arr1, arr2) {
//   let summ1 = null;
//   let summ2 = null;
//   arr1.forEach((elem) => {
//     summ1 += elem;
//   });
//   arr2.forEach((elem) => {
//     summ2 += elem;
//   });
//   return summ1 + summ2;
// }

// arrayPlusArray([1, 2, 3], [4, 5, 6]), 21
// arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21
// arrayPlusArray([0, 0, 0], [4, 5, 6]), 15
// arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100

// ============================================================================

// 4. valuelar o'rta arifmetigini toping
// function getAverage(arr) {
//     let average = null;
//     arr.forEach((elem) => {
//       average += elem;
//     });
//     return average / arr.length;
//   }
  
//   console.log(getAverage([1, 2, 3, 4, 5]));
//   console.log(getAverage([2, 2, 2, 2]), 2);
//   console.log(getAverage([1, 2, 3, 4, 5,]), 3);
//   console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]), 1)


// ============================================================================

// // 5. valuelarni har ikkinchi yani cherez  malumotlarini chiqarib tashlang
// function removeEveryOther(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (i % 2 == 0) {
//         console.log(arr[i]);
//       }
//     }
//   }
//   removeEveryOther(["Hello", "Goodbye", "Hello Again"]);
//   removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),// [1, 3, 5, 7, 9]);
//   removeEveryOther([[1, 2]]),//=>  [[1, 2]]);
//   removeEveryOther([['Goodbye'], { 'Great': 'Job' }]) //=>  [['Goodbye']]);


// let ar=[1,2,3,45,55,567];
// console.log(ar.findIndex((value)=>value===2));
// let a=0.0012334;
// let b =0.00126;
// console.log(a.toFixed(3));
// console.log(a.toPrecision(3));
// console.log(b.toFixed(3));
// console.log(b.toPrecision(3));



