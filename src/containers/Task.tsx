import Lixeira from '../assets/trash.svg'
import { actions } from './Formtask';

export function Task({ content, onSetTarefas, onCompleteTask, onSomandoComplete }) {

  function handleDeleteTask() {
    onSetTarefas(content);
  }

  function handleToggleComplete() {
    onCompleteTask({ type: actions?.complete, payload: {id: content.id }})
  }

  return (
    <>
        <div className='tarefa' onClick={handleToggleComplete}>
          <input type='checkBox' id={content.id} className='checkbox'/>
          <label for={content.id}>
            {content.newTaskText}
          </label>
          <img onClick={handleDeleteTask} className='lixeiraimg' src={Lixeira}/>
        </div>
    </>
  )
}