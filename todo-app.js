import './pouchdb-7.1.1.js'
import { TarefaValida, Notificacao } from './util.js';

const TodoApp = (nomeBanco) => {

    let _db = null;

    let _inicializandoOBanco = () => {

        _db = new PouchDB(nomeBanco);
        console.log('banco inicializado', _db);
    }

    let _destruirBanco = () => {

        _db.destroy( Notificacao );

    }


    let _addTodo = (todo) => {

        if (!TarefaValida(todo))
            return;

        _db.post(todo, Notificacao );

    }

    _inicializandoOBanco();


    return {

        AddTodo: _addTodo
        ,DestruirBanco: _destruirBanco

    }

}

export default TodoApp;

