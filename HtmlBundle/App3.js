


var WorkerObj = new Worker("./Work.js");
WorkerObj.onmessage = function(M)
{
    WorkerCallback(M.data);
};

function WorkerCallback(M)
{
    document.querySelector('[id=\'WorkerResult\']').innerHTML = M;
}


function WorkerTest()
{
    let Num1 = parseInt(document.querySelector('[id=\'Num1\']').value);
    let Num2 = parseInt(document.querySelector('[id=\'Num2\']').value);
    WorkerObj.postMessage([ Num1, Num2 ]);
}

