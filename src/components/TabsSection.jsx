import Button from "./button/Button"

export default function TabsSection({ active, onChange}) {
    return (
        <section style={ { marginBottom: '3rem' }}>
            <Button isActive={active === 'main'} onClick={() => onChange('main') }>главная</Button>

            <Button isActive={active === 'feedback'} onClick={() => onChange('feedback') }>обратная связь</Button>

            <Button isActive={active === 'effect'} onClick={() => onChange('effect') }>effect</Button>
        </section>
    )
}