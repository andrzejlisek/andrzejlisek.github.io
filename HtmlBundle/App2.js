import ModFun from "./Mod.js";


function MulDiv() {
    let Num1 = parseInt(document.querySelector('[id=\'Num1\']').value);
    let Num2 = parseInt(document.querySelector('[id=\'Num2\']').value);
    let NumResult = ModFun(Num1, Num2);
    document.querySelector('[id=\'NumResult2\']').innerHTML = NumResult;
}

window.MulDiv = MulDiv;

