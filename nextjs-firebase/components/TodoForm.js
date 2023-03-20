import { useAuth } from "@/Auth";
import { db } from "@/firebase";
import { TodoContext } from "@/pages/TodoContent";
import { Button, TextField } from "@mui/material";
import { addDoc, collection, serverTimestamp, doc, updateDoc } from "firebase/firestore";
import { useContext, useRef } from "react";

const TodoForm = () => {

    const inputAreaRef= useRef();
    const {currentUser} = useAuth();
    const {showAlert, todo, setTodo} = useContext(TodoContext);

    const onSubmit = async () => {
        if (todo?.hasOwnProperty('timestamp')){
            //atualizar a lista

            if(todo.title === '' || todo.detail === ''){
                showAlert('warning', `Título e Detalhe precisa ser preenchido`)
                setTodo({title: '', detail: ''})
            } else {
                const docRef = doc(db, "todos", todo.id);
                const todoUpdated = {...todo, timestamp: serverTimestamp()}
                updateDoc(docRef, todoUpdated)
                setTodo({title: '', detail: ''})
                showAlert('info', `Tarefa com id(${docRef.id}) foi atualizado com sucesso`)
            }

        } else if (todo.title === '' || todo.detail === '') {
            showAlert('warning', `Título e Detalhe precisa ser preenchido`)
            setTodo({title: '', detail: ''})
        } else {
            const collectionRef = collection(db, "todos")
            const docRef = await addDoc(collectionRef, {...todo,
                email: currentUser.email, timestamp: serverTimestamp()
            })
            setTodo({title: '', detail: ''})
            showAlert('success', `Tarefa com id(${docRef.id}) foi adicionado com sucesso`)
        }
    }

    return (
        <div ref={inputAreaRef}>
            {/* <pre>{JSON.stringify(todo, null, '\t')}</pre> */ }

            <TextField fullWidth label="Título" margin="normal"
            value={todo.title}
            onChange={e=> setTodo({...todo, title: e.target.value})}
            />
            <TextField fullWidth label="Detalhe" multiline maxRows={4}
            value={todo.detail}
            onChange={e=> setTodo({...todo, detail: e.target.value})}
            />
            <Button onClick={onSubmit} variant="contained" sx={{mt: 3}}>
                {
                    todo.hasOwnProperty('timestamp') ? 'Atualizar' : 'Adicionar uma nova Tarefa'
                }
            </Button>
        </div>
    );
}

export default TodoForm;