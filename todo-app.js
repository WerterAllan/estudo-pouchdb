'use strict';

import './libs/pouchdb-7.1.1.js';
import { TarefaValida, Notificacao } from './util.js';

const TodoApp = (nomeBanco) => {

    let _db = null;

    let _inicializandoOBanco = () => {

        _db = new PouchDB(nomeBanco);
        console.log('banco inicializado', _db);
    }

    let _destruirERecriarBanco = () => {

        _db.destroy()
            .then(x => {
                _db = new PouchDB(nomeBanco);
                console.log("Banco destruido e recriado com sucesso", x);
            })
            .catch(e => console.log("Erro ao destruir o banco", e));

    }

    let _addTodo = (todo) => {

        if (!TarefaValida(todo))
            return;

        _db.post(todo, Notificacao);

    }

    _inicializandoOBanco();


    return {

        AddTodo: _addTodo
        , DestruirERecriarBanco: _destruirERecriarBanco

    }

}

export default TodoApp;

