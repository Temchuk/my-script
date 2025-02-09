// var
//     csvRows = [];
//
// Model.forEachPanel(
//     function(Obj){
//         var Line = [];
//         Line.push(Obj.Name);
//         Line.push(Obj.ArtPos);
//         Line.push(Obj.ContourWidth);
//         Line.push(Obj.ContourHeight);
//         Butt = 'нет кромок';
//         if (Obj.Butts && (Obj.Butts.Count))
//             Butt = Obj.Butts.Count + ' кромки';
//         Line.push(Butt);
//         csvRows.push(Line.join(';'));
//     });
//
// alert(csvRows.join('\n'));
//



// let a = Model.Selected ;
// alert(a.Name);
// alert(a.Owner);
//










let s = 0;
let n = 0;
function traverseBlock(block) {
        if (!block) return; // Перевірка, щоб уникнути помилок

        let elements = block.AsList(); // Отримуємо список всіх вкладених елементів


        for (let i = 0; i < elements.Count; i++) {
                let elem = elements[i]; // Отримуємо елемент
                // alert( ` ${i}: ${elem.Name} ${elem} \n`) // Виводимо ім'я елемента




                if( elem instanceof TFurnPanel ){

                    alert(` ${elem.Name} ${elem} \n ${elem.ContourWidth} x ${elem.ContourHeight} `);
                    n = n + 1;
                    let x = (elem.ContourWidth * elem.ContourHeight) /1000000 ;
                    s =s + x;
                    alert(x);



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
if (selectedBlock instanceof TFurnBlock || selectedBlock instanceof TDraftBlock) {
        traverseBlock(selectedBlock);
} else {
        alert("vyberit!");
}
// traverseBlock(block);



alert(n);
alert(`площа : ${Math.round(s)} m\u00B2`);



// let num = 39.000000037;
// console.log(Math.round(num)); // 39
