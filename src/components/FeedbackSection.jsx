import { useState, useRef } from "react"
import Button from "./button/Button" 


function StateVsRef() {

    const input = useRef()
    const [show, setShow] = useState(false)

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            setShow(true)
        }
    }

    return (
        <div>
            <h3>
                input value: {show && input.current.value}
            </h3>

            <input ref={input} type="text" onKeyDown={handleKeyDown} className="control" />

        </div>
    )
}

export default function FeedbackSection() {
    const [form, setForm] = useState({
        name: '',
        hasError: false,
        reason: "help"
    }) 

    // сгрупперовали в один объект setForm выше :
    // const [name, setName] = useState('')
    // const [hasError, setHasError] = useState(false)
    // const [reason, setReason] = useState('help')

    function handleNameChange(event) {
        // setName(event.target.value)
        // setHasError(event.target.value.trim().length === 0)

        setForm(prev => ({
            ...prev,
            name: event.target.value,
            hasError: event.target.value.trim().length === 0,
        }))
        }

    // function toggleError() {
    //     // setHasError((prev) => !prev) // false
    //     // setHasError((prev) => !prev) // true
    // }

    return (
        <section>
            <h3>
                ОБРАТНАЯ СВЯЗЬ
            </h3>

            {/* <Button onClick={toggleError}>Toggle Error</Button> */}

            <form style={{ marginBottom: '2rem' }}>
                <label htmlFor="name">как к Вам лучше обращаться</label>
                <input type="text" 
                id="name" 
                className="control" 
                value={form.name} 
                style={{
                    border: form.hasError ? '1px solid red' : null,
                }}
                onChange={handleNameChange}/>

                
                <label htmlFor="reason">причина обращения</label>
                <select id="reason" className="control" value={form.reason} onChange={(event) => setForm((prev) => ({...prev, reason: event.target.value}))}>
                    <option value="error">ошибка</option>
                    <option value="help">нужна помощь</option>
                    <option value="suggest">сотрудничество</option>
                </select>

                <pre>

                    {/* {JSON.stringify(form, null, 2)} */}

                    {/* Name: {form.name}
                    <br />
                    Reason: {form.reason} */}
                </pre>

                <Button disabled={form.hasError} isActive={!form.hasError}>
                    отправить
                </Button>

            </form>

            {/* <hr /> */}
            <StateVsRef />

        </section>
    )
}