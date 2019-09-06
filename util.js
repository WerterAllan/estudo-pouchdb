'use strict';


let GetById = (id) => ( document.getElementById(id) ||  { value: "" } ).value
let SetById = (id, value) => document.getElementById(id).value = value;
let TarefaValida = (tarefa) => !!tarefa && tarefa.titulo !== "" && tarefa.descricao !== "";

let Notificacao = ( erro, resposta ) => {
    if (erro) {
        console.log('ocorreu um ero', erro);
        return;
    }

    console.log("sucesso", resposta);
}


export { GetById, SetById, TarefaValida, Notificacao };

    
