



// let a = Model.Selected;
// alert(a);
// // alert("tilky inglish");
// // alert(a.Visible);
// // a.SetVisible(false);
// // a.Suppress();
// // a.Name = "цоколь";
// a.Visible = false;
// alert(a.Owner);
// //
//
//
// Action.Finish();

// let a = Model.Selected ;
// alert(a.Name);
//
//

//
// function traverseBlock(block) {
//     if (block) {
//         alert('ffff');
//         return 0;
//
//
//     } else {
//         alert('ffeerrrr');
//     }// Перевірка, щоб уникнути помилок
//
// }
//
// traverseBlock(a);

// let a = Model;
//
// let elements = a.AsList(); // Отримуємо список всіх вкладених елементів
// alert(elements);
//
//




// let a = Model.Selected;







// *************************************************************************
// Приховує лінії стику і габаритні рамки

function traverseBlock(block) {
    if (!block) return; // Перевірка, щоб уникнути помилок

    let elements = block.AsList(); // Отримуємо список всіх вкладених елементів

    for (let i = 0; i < elements.Count; i++) {
        let elem = elements[i]; // Отримуємо елемент
        // alert( ` ${i}: ${elem.Name} ${elem} \n`) // Виводимо ім'я елемента

        if( elem instanceof TModelLimits ){
            elem.Visible = false;
        }

        // Якщо елемент також є блоком меблів або ескізним блоком — обходимо його рекурсивно
        if (elem instanceof TFurnBlock || elem instanceof TDraftBlock) {
            traverseBlock(elem);
        }
    }
}
alert('done');
// Отримуємо вибраний блок і запускаємо обхід
let selectedBlock = Model.Selected;
if (selectedBlock instanceof TFurnBlock) {
    traverseBlock(selectedBlock);
} else {
    alert("vyberit!  виберіть");
}
traverseBlock();

Action.Finish();
// **************************************************************



