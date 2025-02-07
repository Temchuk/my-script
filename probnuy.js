



// let a = Model.Selected;
// alert(a);
// // alert("tilky inglish");
// // alert(a.Visible);
// // a.SetVisible(false);
// // a.Suppress();
// // a.Name = "цоколь";
// a.Visible = false;
// alert(a.Owner);
//
//
//
// Action.Finish();

// let a = Model.Selected ;
// // alert(a.Name);
//
// for (let i = 0 ; i <= a.length -1 ; i++ ){
//     alert(a[i].Name);
//     alert( i );
// }
//
// let a = Model.Selected;


function traverseBlock(block) {
    if (!block) return; // Перевірка, щоб уникнути помилок

    let elements = block.AsList(); // Отримуємо список всіх вкладених елементів

    for (let i = 0; i < elements.Count; i++) {
        let elem = elements[i]; // Отримуємо елемент

        alert(elem.Name); // Виводимо ім'я елемента

        // Якщо елемент також є блоком меблів або ескізним блоком — обходимо його рекурсивно
        if (elem instanceof TFurnBlock || elem instanceof TDraftBlock) {
            traverseBlock(elem);
        }
    }
}

// Отримуємо вибраний блок і запускаємо обхід
let selectedBlock = Model.Selected;
if (selectedBlock instanceof TFurnBlock) {
    traverseBlock(selectedBlock);
} else {
    alert("Виберіть блок меблів!");
}




