interface EntradaProps {
    tipo?: 'text' | 'number' 
    texto: string 
    valor: any
    somenteLeitura?: boolean 
    //funçao pra alterar o campo de entrada
    valorMudou?: (valor: any) => void
    
}

export default function Entrada(props: EntradaProps) {
    return (
        <div className="entrada">
            <label className="entrada-label" >
                {props.texto}
            </label>
            <input 
                className="entrada-input"
                type={props.tipo ?? 'text'} 
                value={props.valor}
                readOnly={props.somenteLeitura}
                onChange={e => props.valorMudou?.(e.target.value)}
            />
        </div>
    )
}