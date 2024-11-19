import Button from "./button/Button"
import { useState } from "react"
import { differences } from '../data'



export default function DifferencesSecthion() {
  
  const [contentType, setContentType] = useState(null)
 
  function handleClick(type) {
    // console.log('button clicked', type)
    setContentType(type)
  }

    return (
        <section>
          <h3>
            чем мы отличаемся от других:
          </h3>

          <Button isActive={contentType === 'way'} onClick={ () => handleClick ('way')}>
            подход </Button>

          <Button isActive={contentType === 'easy'} onClick={ () => handleClick ('easy')}>
            доступность </Button>

          <Button isActive={contentType === 'program'} onClick={ () => handleClick ('program')}>
            концентрация </Button>

           {/* 3 вариант - чаще всего используется :  */}
           { !contentType && <p>нажми на кнопку</p> }
           { contentType && <p>{differences[contentType]}</p> }

           {/* 4 вариант тоже бывает часто
           { tabContent } */}

        </section>
    )
}