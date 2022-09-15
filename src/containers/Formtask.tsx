import { useReducer, useState } from "react";

import { Task } from "./Task";

import ImgClipBoard from "../assets/Clipboard.png";
import Logo from "../assets/Logo.svg";
import PlusSvg from "../assets/plus.svg";

import "../scss/import.scss";

export const actions = {
  newtask:  'newtask',
  complete: 'complete',
};

const inicial = {
  listtarefas: [],
}

function reducer(state, action: any) {
  const newState = {...state};
  switch (action.type) {
    case actions.newtask:
      newState.listtarefas = [...newState.listtarefas, newTask(action.payload.newTaskText)]
      return newState;
    case actions.complete:
      newState.listtarefas = newState.listtarefas.map(tarefa => {
        if (tarefa.id === action.payload.id) {
          return { ...tarefa, complete: !tarefa.complete }
        }
        return tarefa;
      })

      return newState;

    default:
      return newState;
  }
}

function newTask(newTaskText) {
  return { id: Date.now(), newTaskText: newTaskText, complete: false }
}

export function Formtask() {
  const [tarefas, dispatch] = useReducer(reducer, inicial);

  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateNewTask(e) {
    e?.preventDefault();

    dispatch({ type: actions.newtask, payload: { newTaskText: newTaskText } })

    setNewTaskText('');
  }

  function handleNewTaskChange(e) {
    setNewTaskText(e?.target.value);
  }

  function deleteTask(taskToDelete) {
    const taskWithoutDeleteOne = tarefas.filter((tarefa) => {
      return tarefa !== taskToDelete;
    });

    dispatch(taskWithoutDeleteOne);
  }

  return (
    <>
      <form onSubmit={handleCreateNewTask} className="formtodo">
        <textarea
          name="formarea"
          className="formtext"
          placeholder="Adicione uma nova tarefa"
          value={newTaskText}
          onChange={handleNewTaskChange}
        />

        <button className="formbutton">
          Criar <img src={PlusSvg} />
        </button>
      </form>

      <div className="containerlist">
        <div className="infolist">
          <div className="criados">
            <p className="tarefacriada">Tarefas criadas</p>
            <a className="contador">{tarefas.listtarefas.length}</a>
          </div>

          <div className="finalizados">
            <p className="tarefacompleta">Concluídas</p>
            <a className="contadorComplete">{tarefas.listtarefas.filter((tarefa) => tarefa.complete).length} de {tarefas.listtarefas.length}</a>
          </div>
        </div>
        {tarefas?.length === 0 && (
          <div className="areavoid">
            <img className="clipimg" src={ImgClipBoard} />

            <p className="textareavoid">
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <br />
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        )}{" "}
        {tarefas && (
          <div className="listatarefas">
            {tarefas.listtarefas.map(tarefa => {
              return (
                <Task 
                  key={tarefa.id}
                  content={tarefa}
                  onSetTarefas={deleteTask}
                  onCompleteTask={dispatch}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}