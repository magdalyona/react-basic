import WayToTeach from "./WayToTeach"
import { ways } from '../data'


export default function TeachingSection() {
   return (
    <section>
          <h3>с какими проблемами сталкиваются 95% людей при обучении?</h3>

          <ul>

            {ways.map(way => <WayToTeach key={way.title} {... way} /> )}

{/* key={way.title} - его не видно но он нужен для внутренний работы реакта */}
   
          </ul>

        </section>
   )
    
}