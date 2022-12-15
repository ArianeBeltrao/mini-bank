interface BotaoProps {
    cor?: 'red' 
    className?: string
    children: any
    onClick?: () => void
}

export default function Botao(props: BotaoProps) {
    const cor = props.cor ?? 'green'
    return (
        <div className="div-botao">
            <button onClick={props.onClick} className='botao'>
            {props.children}
            </button>
        </div>   
    )
}
