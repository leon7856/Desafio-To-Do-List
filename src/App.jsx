import './global.css';
import { Header } from './components/Header';
import { Forms } from './components/Forms';
import { Task } from './components/Task';
import { useState } from 'react';
import styles from "./App.module.css";

function App() {
  const [novaTarefa, setNovaTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);


  function handleCriarTarefa(e) {
    e.preventDefault();

    if (novaTarefa.trim() === '') return;
  
    setTarefas([
      ...tarefas,
      {
        id: Date.now(),   
        content: novaTarefa,    
        concluida: false       
      }
    ]);
  
    setNovaTarefa('');
  }

  function handleDeletarTarefa(id) {
    const tarefasAtualizadas = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(tarefasAtualizadas);
  }
  

  function handleToggleTarefa(id) {
    const tarefasAtualizadas = tarefas.map((tarefa) =>
      tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
    );
    setTarefas(tarefasAtualizadas);
  }

  const totalTarefas = tarefas.length;
  const tarefasConcluidas = tarefas.filter((tarefa) => tarefa.concluida).length;


  return (
    <div>
      <Header />

      <Forms
        novaTarefa={novaTarefa}
        setNovaTarefa={setNovaTarefa}
        onCriar={handleCriarTarefa}
      />

<div className={styles.taskListContainer}>
<div className={styles.statusBar}>
  <div className={styles.status}>
    <span className={styles.createdText}>Tarefas criadas</span>
    <span className={styles.counter}>{tarefas.length}</span>
  </div>

  <div className={styles.status}>
    <span className={styles.concludedText}>Concluídas</span>
    <span className={styles.counter}>
      {tarefas.filter((tarefa) => tarefa.concluida).length} de {tarefas.length}
    </span>
  </div>
</div>


        <div className={styles.taskList}>
          {tarefas.map((tarefa, index) => (
            <Task
            key={tarefa.id}
            tarefa={tarefa}
            onToggleTask={handleToggleTarefa}
            onDeleteTask={handleDeletarTarefa}
            />
          ))}
        </div>
      </div>
      </div>
  );
}

export default App;
