let Working;
let LoopCounter = 0;
let ExecTime = 0;

this.onmessage = function(M)
{
    let N1 = M.data[0];
    let N2 = M.data[1];
    let Msg = "";
    if (N1 <  N2) Msg = N1 + "<" + N2;
    if (N1 == N2) Msg = N1 + "=" + N2;
    if (N1 >  N2) Msg = N1 + ">" + N2;
    postMessage(Msg);
}

