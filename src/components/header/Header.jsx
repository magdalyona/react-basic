
import { useEffect, useState } from 'react'
import logo from '/logo-name.svg'
import { styled } from 'styled-components'
// import './Header.css'

const HeaderContainer = styled.header `
    height: 50px;
    display: flex;
    padding: 0 2rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    background: #fafafa;
`

export default function Header () {
    const [now, setNow]= useState(new Date())
    // const now = new Date()

    useEffect(() => {
      const interval = setInterval(() => setNow(new Date()), 1000 )

      return ( ) => {
        clearInterval(interval)
        console.log('cleaning...')

      }
    }, [])


    return (
      <header>

        <img src={logo} alt={"result"} />
  
      {/* <h3>Marvel</h3> */}
  
        <span>Точное время сейчас:  {now.toLocaleTimeString()} </span>
   
        {/* в фигурных скобках происходи динамика - {} */}
    </header>
    )
  }