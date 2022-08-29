import Lixeira from '../assets/trash.svg'

export function Task({ content, onSetTarefas, onCompleteTask, onSomandoComplete }) {

  function handleDeleteTask() {
    onSetTarefas(content);
  }

  function handleToggleComplete() {
    onCompleteTask(content)
  }

  return (
    <>
        <div className='tarefa' onClick={handleToggleComplete}>
          <input type='checkBox' id={content} className='checkbox'/>
          <label for={content} >
            {content}
          </label>
          <img onClick={handleDeleteTask} className='lixeiraimg' src={Lixeira}/>
        </div>
    </>
  )
}