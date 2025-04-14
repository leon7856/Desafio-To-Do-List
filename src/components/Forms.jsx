import styles from "./Forms.module.css";
import { PlusCircle } from "phosphor-react";

export function Forms({ novaTarefa,setNovaTarefa, onCriar}) {
    return (
        <form onSubmit={onCriar} className={styles.formTarefa}>
            <input
                type="text"
                placeholder="Adicione uma nova tarefa"
                value={novaTarefa}
                onChange={(e) => setNovaTarefa(e.target.value)}
                />
                <button type="submit">
                    Criar
                    <PlusCircle size={20} />
                </button>
        </form>
    );
}