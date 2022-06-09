function digitar(event){
    let count = document.getElementById('ctd')

    if(event.target.value.length==0){
    
        document.getElementById('btEnviar'). disabled = true;
        count.style.opacity = 0;
    }else{
        document.getElementById('btEnviar'). disabled = false;
        count.style.opacity = 1;
        count.textContent=140- event.target.value.length;
    }

}

function digitarModal(event){
    let contador = document.getElementById('ctdModal')
   
    if(event.target.value.length==0){
    
        document.getElementById('btEnviarModal'). disabled = true;
        contador.style.opacity = 0;
    }else{
        document.getElementById('btEnviarModal'). disabled = false;
        contador.style.opacity = 1;

        contador.textContent=140- event.target.value.length;
        contador.textContent<40-  event.target.value.length;
        contador.textContent<0-  event.target.value.length;
    }

}