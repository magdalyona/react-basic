import { useEffect, useState, useCallback } from "react";
import Button from "./button/Button";
import Modal from "./modal/Modal";
import useInput from '../hooks/useInput'

export default function EffectSection() {

    const input = useInput()
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])

    const fetchUsers = useCallback(async () => {
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()
        setUsers(users)
        setLoading(false)
    }, [])
    // import - useCallback - используется, когда не надо чтобы функция создавалась заново каждый раз
       
    

    useEffect(() => {        
    //    можно писать user внутри функции тогда будет вызываться 1 раз: async function fetchUsers( ) {
    //           setLoading(true)
    //   const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //         const users = await response.json()
    //         setUsers(users)
    //         setLoading(false)
    //     }
        fetchUsers()

    }, [fetchUsers])

    return (
        <section>
            <h3>
                effects
            </h3>

            <Button style={{marginBottom: '1rem'}} onClick={() => setModal(true)}>
                показать информацию
            </Button>

            <Modal open={modal}>
                <h3>hello from modal</h3>
                <p>lorem ipsum dolor sit amet consectetur adipisicing elit. est, adipisci rem aspernatur reiciendis corrupti maxime aliquid consectetur molestiae doloremque, perferendis quas tenetur laboriosam accusantium? nam mollitia ipsum aut! Dignissimos, saepe?</p>
                <Button onClick={() => setModal(false) }>close modal</Button>
            </Modal>

            { loading && <p>loading...</p> }
            { !loading && ( <>
                <input type="text" className="control"
                {...input} />

                <ul>

                {users.filter(user => user.name.toLowerCase().includes(input.value.toLowerCase())).map((user) =>
                     (<li key={user.id}> {user.name} </li>))}

                </ul>

                </>
            )}
        </section>
    )
}

{/* <></> - пустые скобки объединение в фрагмент*/}