




function g (date) {

    let str = "hykhk";
for (let i in date) {

       try { str = `${str}${i}: ${date[i]} \n`}
       catch (error) { console.log(error) }

                     }

     return str ;


}



const obj = Model.Selected.Contour[0];
// const obj = Model.Selected;
alert(g(obj));
// alert(g(str));
// alert(str);


Action.Finish();
