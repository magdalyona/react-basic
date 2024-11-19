import "./Button.css"

export default function Button({ children,  isActive, ...props }) {

// можно добавить стрелочную функцию к имеющимся (это интер наведение на кнопку) const handleMouseEnter = () => console.log('entered')

// или такую  onDoubleClick={() => console.log('dbl')}

// эти функции можно добавить к имеющийся уже onClick={handelClick}


    // let classes = 'button'
    // if (isActive) classes += ' active' 
    // можно так isActive

    return (
    <button {...props}  className={isActive ? 'button active' : 'button'} > 
        {children} 
    </button>
    )
}