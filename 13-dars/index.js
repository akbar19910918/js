// let list = [
//     { id: 1, name: "eshmat", title: "CEO" },
//     { id: 2, name: "toshmat", title: "CTO" },
//     { id: 5, name: "eshmat", title: "CEO" },
//     { id: 6, name: "toshmat", title: "CTO" },
//   ];
  
// const array=(str,str1)=>{
//     let res=list.filter((value) =>value.title==="CEO");
//     let num=list.filter((value) =>value.title==="CTO");
//     console.log(res);
//     console.log(num);
// };
// array('CEO',"CTO")

let Webbrain_Academy={
    frontend:[
        {name:"Ahmat",maoshi:1000},
        {name:"Yusuf",maoshi:700}
    ],
    beckend:{mobile:[
        {name:"Shokir",maoshi:400},
        {name:"Mansur",maoshi:600},
    ],
        jawa:[
            {name:"Tohir",maoshi:1300},
            {name:"Akbar",maoshi:2500},
        ]
    }
}


function getCalc(Webbrain_Academy){
    if(Array.isArray(Webbrain_Academy)){
        return Webbrain_Academy.reduce((prev,curr)=>prev+curr.maoshi,0)
    }
    else{
        let sum=0;
        for(let oylik of Object.values(Webbrain_Academy)){
            sum+=getCalc(oylik)
           
        } return sum
    }
};console.log(getCalc(Webbrain_Academy));




