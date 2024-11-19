// export default function IntroSection() {
//     return (
//         <section>
//             <h1 className="centered">
//             Получите профессию frontend-разработчика и постройте карьеру в IT

//             </h1>

//             <h3 className="centered" style={ {color: '#666'}}>
//             Устроитесь на работу или вернем деньги, после прохождения полной программы.


//             </h3>
//         </section>
//     )
// }

import React, { createElement } from "react"

//можно упростить и создать для React.createElement const = например, const e = React.createElement

export default function IntroSection() {

    return React.createElement('section', null, [ React.createElement('h1', { className: "centered" , key: 1 }, 'Получите профессию frontend-разработчика и постройте карьеру в IT'), React.createElement('h3', { className: "centered", style: {color: "#666" }, key: 2 },  'Устроитесь на работу или вернем деньги, после прохождения полной программы.' ),

]) 

}