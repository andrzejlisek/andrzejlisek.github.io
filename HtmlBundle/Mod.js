export function ModFun(Num1, Num2) {
    let NumResult = Num1 + "*" + Num2 + "=" + (Num1 * Num2) + "<br>";
    NumResult = NumResult + Num1 + "/" + Num2 + "=";
    if (Num2 != 0) {
        NumResult = NumResult + (Num1 / Num2) + "<br>";
    }
    else {
        NumResult = NumResult + "ERROR<br>";
    }
    return NumResult;
}

