import './tabela-de-tarefas.js';
import { GetById, SetById, TarefaValida } from './util.js';

const Formulario =  {

    Add: () => {

        const tarefa = {
            concluido: false
            , titulo: GetById("titulo")
            , descricao: GetById("descricao")
        }

        if (TarefaValida(tarefa)) {
            
            SetById("titulo", "");
            SetById("descricao", "");
        }


        return tarefa;
    }    

}

export default Formulario;