import { TarefaValida } from './util.js';

const TabelaDeTarefas = (tarefas, idTabela) => {

    let _tarefas = []
    let _id = idTabela;
    _tarefas = tarefas;

    let _montarTabela = () => {

        let tabela = document.getElementById(_id);
        if (!!!tabela)
            throw `Não foi possivel encontrar o NODE que representa a tabela. ID definido : ${_id}`;

        _tarefas            
            .forEach(tabela => Add(tabela));

    }

    let _montarHtml = (tarefa) => {

        const
            concluido = tarefa.concluido === true ? 'Sim' : 'Não',
            tableAtive = concluido ? 'table-active' : ''

        return /** HTML */ `

        <tr class="${tableAtive}">                        
            <th scope="row">${concluido}</th>
            <td>${tarefa.titulo}</td>
            <td>${tarefa.descricao}</td>            
        </tr>

        `;

    }

    let _AdicionarNaTabela = (html) => {

        document.getElementById(_id)
            .insertAdjacentHTML("beforeend", html);
    }

    let Add = (tarefa) => {

        if (!TarefaValida(tarefa))
            return;

        const html = _montarHtml(tarefa);
        _AdicionarNaTabela(html);

    }

    _montarTabela();


    return {

        Add: Add

    };

}

export default TabelaDeTarefas;