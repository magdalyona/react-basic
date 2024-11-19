import Header from "./components/header/Header"
import TeachingSection from './components/TeachingSection'
import DifferencesSecthion from "./components/DifferencesSecthion"
import IntroSection from "./components/IntroSection"
import TabsSection from "./components/TabsSection"
import FeedbackSection from "./components/FeedbackSection"
import { useState } from "react"
import EffectSection from "./components/EffectSection"
// import { Fragment } from "react"


// функции надо в реат называть с большйо буквы = App, Header


export default function App()     {
  const [visible, setVisible] = useState(true)
  const [tab, setTab] = useState('effect')

  // setTimeout(() => {
  //   setVisible(false)
  // }, 3000)

  return (
    // <Fragment> вместо фрагмент можно использовать пустые <> открвабщиемся и закрывающиеся скобки

    <>
       {/* <Header />     */}
         {/* сокращенная версия <Header></Header> */}
      {/* <Header />
      <Header />  можно писать несколько компанентов*/} 


      {visible && <Header />}

      <main> 

        <IntroSection />

        <TabsSection active={tab} onChange={(current) => setTab(current)} />

        {tab === 'main'  && ( <>

        <TeachingSection />         

        <DifferencesSecthion />
        
        </> )
        
        }

        {tab === 'feedback'  && ( <>

          <FeedbackSection />
        
        </> )
        
        }

        {tab === 'effect'  && ( <>

          <EffectSection />
        
        </> )
        
        }
  
        
      </main>

    </>

    // </Fragment>
  )
}

