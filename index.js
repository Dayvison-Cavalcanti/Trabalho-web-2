const armazenar = document.getElementById('divUl');
function capturar (){
    event.preventDefault()
    const captuarTexto = document.getElementById('texto').value;
    if(captuarTexto != ''){
        const p = document.createElement('p');
        p.setAttribute('class', 'backgroundG');
        const span = document.createElement('span');
        span.setAttribute('class', 'backgroundN')
        armazenar.appendChild(p);
        p.appendChild(span);
        span.innerHTML = captuarTexto;
        document.getElementById('texto').value="";
        
        criarBotao(p);

        c = armazenar.querySelectorAll('span')
        for (let i = 0; i < c .length; i++){
            c[i].setAttribute('id','span'+i);
        };
        c = armazenar.querySelectorAll('p')
        for (let i = 0; i < c .length; i++){
            c[i].setAttribute('id','p'+i);
        };
    }
};

// ---------------------------------------------------------------------------------------
function criarBotao (p){
    const editar = document.createElement('button');
    const deletar = document.createElement('button');
    editar.innerHTML ='<img src="editnew.png" style="background: none; border: none" width="20" alt="" srcset="">';
    deletar.innerHTML = '<img src="deletnew.png" width="10" alt="" srcset="">';
    editar.setAttribute('id', 'edit');
    editar.setAttribute('onclick', 'editar(this)');
    deletar.setAttribute('id', 'del');
    deletar.setAttribute('onclick', 'deletar(this)');

    p.appendChild(editar);
    p.appendChild(deletar);
};

// ---------------------------------------------------------------------------------------
const botEnviar = document.getElementById('enviar');
function editar (edit){
    botEnviar.setAttribute("onclick", 'novoT()')
    const idP = edit.parentElement.id
    const texto = document.getElementById(idP)
    const idSp = texto.querySelector('span').id
    const idSpanGravado = localStorage.setItem('id',idSp)
    const textoSpan = document.querySelector('#'+idSp).textContent;
    document.getElementById('texto').value = textoSpan
};
//----------------------------------------------------------------------------------------
function novoT(){
    const novoTexto = document.getElementById('texto').value
    let idSp = localStorage.getItem('id')
    const textoSpan = document.querySelector('#'+idSp)
    textoSpan.innerText = novoTexto
    console.log(novoTexto)
    document.getElementById('texto').value=''
    localStorage.removeItem('id')
    botEnviar.setAttribute('onclick', 'capturar()')
}

//----------------------------------------------------------------------------------------
function deletar (del){
    const deletar = del.parentElement.id
    const elementoDel = document.getElementById(deletar)
    elementoDel.remove(elementoDel)
    
}
