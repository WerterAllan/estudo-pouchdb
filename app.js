'use strict';

import './libs/pouchdb-7.1.1.js';
import TabelaDeTarefas from './tabela-de-tarefas.js'
import Formulario from './formulario.js';
import TodoApp from './todo-app.js';

const app = async () => {

    let tabela = TabelaDeTarefas([], "tarefas");
    let todoApp = TodoApp("todos");



    document.getElementById("btnAdicionarTarefas")
        .addEventListener("click", x => {

            const todo = Formulario.Add();
            tabela.Add(todo);
            todoApp.AddTodo(todo);

        });


    document.getElementById("btnDestruir")
        .addEventListener("click", x => todoApp.DestruirERecriarBanco() );

}



window.addEventListener('load', app);
