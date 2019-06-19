window.onload = function(){
    const input = document.querySelectorAll('input, textarea');
    const resetBtn = document.getElementById('resetButton');


    for(let i=0; i<input.length;i++){
    resetBtn.addEventListener('click', () => {
        input[i].value="";
    });
    };



    









}