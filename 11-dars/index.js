let users = [
    { id: 1, year: 1998, engine: 1, name: "Tico" },
    { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
    { id: 3, year: 2010, engine: 1.6, name: "Gentra" },
    { id: 4, year: 2010, engine: 1.5, name: "Cobalt" },
    { id: 5, year: 2012, engine: 2, name: "Malibu" },
    { id: 6, year: 2000, engine: 1.2, name: "Damas" },
    { id: 7, year: 2018, engine: 2.4, name: "Tracker" },
  ];
  
const read=() =>{
  users.forEach((element)=>{
    console.log(element);
  });
};



  // Alifbo boyicha tartiblash:
  
  const alphabetSort = (arr) => {
    let res = arr.sort((a, b) => a.name.localeCompare(b.name));
    // users = res;
     console.log(res);
  };
  //  alphabetSort(users);
  
  // -------------------------------------------------------------------
    const sortbyyear = (arr) => {
    let res = arr.sort((a, b) => a.year-(b.year));
    // users = res;
     console.log(res);
  };
  //  sortbyyear(users);
  
  // -------------------------------------------------------------------
  // 2000 yildan odingi mashinalar royhatini chiqaring?
  
  const getYearOld = (data) => {
    let res = data.filter((value) => value.year < 2000);
    // users = res;
    console.log(res);
  };
//    getYearOld(users);
   
  
//   // ------------------------------------------------------------------
  
//   // 2010 yildan keyingi mashinalar royhatini chiqaring ?
  const getYearNew = (data) => {
    let res = data.filter((value) => value.year > 2010);
    // users = res;
     console.log(res);
  };
  //  getYearNew(users);
  
//   // ------------------------------------------------------------------
  
//   // engine kuchiga qarab malumotlarni tartiblang ?
  
  const getEngine = (data) => {
    let res = data.sort((a, b) => b.engine - a.engine);
    // users = res;
     console.log(res);
  };
//    getEngine(users);
  
//   // -----------------------------------------------------------------
  
//   // Chiqarilgan yiliga qarab sartirovka qiling ?
 
     const getYearSort = (data) => {
     let res = data.sort((a, b) => a.year - b.year);
    //  users = res;
     console.log(res);
  };
//      getYearSort(users);
  
//   // -----------------------------------------------------------------
  
//   // 2000 - yildan oldin chiqgan mashinalarga status : 'eski' deb qoshing ?
  
  const setData = (data) => {
    let res = data.map((value) => {
      return value.year < 2000 ? { ...value, status: "eski" } : value;
    });
    // users = res;
     console.log(res);
  };
//     setData(users);
  
//   // -----------------------------------------------------------------
  
//   // 2000 - 2010 yillarda chiqgan mashinlarga status : "O'rta" degan malumot qoshing ?
  
//  
  
  // ------------------------------------------------------------------
  
  // 2010 - 2022 yillarda chiqgan mashinalarga status : "Yangi" degan malumot qoshing ?
  
  const setData3 = (data) => {
    let res = data.map((value) =>
      value.year < 2022 && value.year > 2010
        ? { ...value, status: "Yangi" }
        : value
    );
  
    // users = res;
     console.log(res);
  };
//   setData3(users);
  
//   // ------------------------------------------------------------------
  
