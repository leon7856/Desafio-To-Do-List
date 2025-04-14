import styles from './Task.module.css';
import { Trash } from 'phosphor-react';
import { CheckCircle, Circle } from 'phosphor-react';

export function Task({ tarefa, onDeleteTask, onToggleTask }) {
  function handleDelete() {
    onDeleteTask(tarefa.id);
  }

  function handleToggle() {
    onToggleTask(tarefa.id);
  }

  return (
    <div className={styles.task}>
      <button onClick={handleToggle} className={styles.checkbox}>
        {tarefa.concluida ? (
          <CheckCircle size={20} color="#5E60CE" weight="fill" />
        ) : (
          <Circle size={20} color="#4EA8DE" />
        )}
      </button>

      <p className={tarefa.concluida ? styles.concluida : ''}>
        {tarefa.content}
      </p>

      <button onClick={handleDelete} title="Deletar Tarefa">
        <Trash size={20} />
      </button>
    </div>
  );
}
