
const forIhInList = (list) => {

    // alert(list.Name);
    // рекурсивний обхід обєкта list


        for (let i = list.Count - 1; i >= 0; i--) {
       const elem = list[i];
        if ((elem instanceof TFurnBlock || elem instanceof TDraftBlock) && !elem.JointData ) forIhInList(elem);

    }

        // час 50:30
  let counter = 0;
   let obj = {
       'arrSystem' : [],             // масив системних обєктів масив панелей
       'arrTFurnPanel' : [],         // масив панелей
       'arrTExtrusionBody' : [],     // масив профілів
       "arrT2DTrajectoryBody" : [],  // масив тіл по траекторії
       'arrTFurnBlock' : [],         // масив блоків і півфабрикатів
       'arrTFastSchemes' : [],       //масив схем кріплення
   //  54:10
       'arrTFurnAsm' : [],           // масив сборок
       "arrTFastener" : [],          //масив фурнітури
       "arrOther" : []               // масив решту елементів
   }
   // сортіровка ссилок на обєкти
    for (let i = 0; i < list.Count; i++) {
        const item = list[i];
        if (item instanceof TModelLimits ){obj.arrSystem.push(item) }
        else if (item instanceof TFurnPanel ){obj.arrTFurnPanel.push(item) }
        else if (item instanceof TExtrusionBody ){obj.arrTExtrusionBody.push(item) }
        else if (item instanceof T2DTrajectoryBody ){obj.arrT2DTrajectoryBody.push(item) }
        else if (item instanceof TFurnBlock && !item.JointData ){obj.arrTFurnBlock.push(item) }
        else if (item instanceof TDraftBlock ){obj.arrTDraftBlock.push(item) }
        else if (item instanceof TFurnBlock && item.JointData ){obj.arrTFastSchemes.push(item) }
        else if (item instanceof TFurnAsm ){obj.arrTFurnAsm.push(item) }
        else if (item instanceof TFastener ){obj.arrTFastener.push(item) }
        else {obj.arrOther.push(item) }
    }


    //сортируємо елементи в середині існуючих масивів
   for (let key in obj ){
      if (obj[key].length >0){
           //1:05:33
      }

   }


};




const main = ()=>{
    Action.BlinkHint = 'ide obrobka ';

    if (Model.SelectionCount === 0){
        // alert("obhodymo vsu model");
        forIhInList(Model);

    }
    else {
        for (let i = 0; i < Model.SelectionCount; i++){
            const elem = Model.Selections[i];
            // alert(elem.Name);
            if ((elem instanceof TFurnBlock || elem instanceof TDraftBlock) && !elem.JointData) {
                forIhInList(elem.Aslist());
            }

        }
    }


    alert("hotovo");
};
main();


Action.Finish();

