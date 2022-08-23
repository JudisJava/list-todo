import { useState } from "react";

import { Task } from "./Task";

import ImgClipBoard from "../assets/Clipboard.png";
import Logo from "../assets/Logo.svg";
import PlusSvg from "../assets/plus.svg";

import "../scss/import.scss";

export function Formtask() {
  const [tarefas, setTarefas] = useState([]);

  const [newTaskText, setNewTaskText] = useState("");

  const [verificadorComplete, setVerificadorComplete] = useState(false);

  const [somadorComplete, setSomadorComplete] = useState(0);

  function handleCreateNewTask() {
    event?.preventDefault();

    setTarefas([...tarefas, newTaskText]);

    setNewTaskText('');
  }

  function handleNewTaskChange() {
    setNewTaskText(event?.target.value);
  }

  function somandoComplete() {
    if ((prev) => !prev) {
      setSomadorComplete(somadorComplete + 1);
    }
    if ((prev) => !prev) {
      setSomadorComplete(somadorComplete - 1);
    }
  }

  function deleteTask(taskToDelete) {
    const taskWithoutDeleteOne = tarefas.filter((tarefa) => {
      return tarefa !== taskToDelete;
    });

    setTarefas(taskWithoutDeleteOne);
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
            <a className="contador">{tarefas.length}</a>
          </div>

          <div className="finalizados">
            <p className="tarefacompleta">Concluídas</p>
            <a className="contadorComplete">{somadorComplete} de {tarefas.length}</a>
          </div>
        </div>
        {tarefas.length === 0 && (
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
            {tarefas.map((tarefa) => {
              return (
                <Task 
                  key={tarefa}
                  content={tarefa}
                  onSetTarefas={deleteTask}
                  onSetComplete={setVerificadorComplete}
                  onSomando={somandoComplete}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}