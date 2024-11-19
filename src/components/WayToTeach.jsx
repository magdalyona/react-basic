
// function WayToTeach(props) можно так, а можно так:
export default function WayToTeach({ title, description }) {
    return (
  
      <li>
      <p>
        {/*       <strong> {props.title}</strong> {props.description}
   */}
        <strong> {title}</strong> {description}
      </p>
    </li>
  
    )
  }
  