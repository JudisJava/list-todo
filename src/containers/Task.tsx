import Lixeira from '../assets/trash.svg'

export function Task({ content, onSetTarefas, onSetComplete, onSomandoComplete }) {
  function handleDeleteTask() {
    onSetTarefas(content);
  }

  function handleToggleComplete() {
    if ((prev) => !prev) {
      onSetComplete = false
    }
    if ((prev) => !prev) {
      onSetComplete = true
    }
    console.log(onSetComplete);
    return onSetComplete;
   
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