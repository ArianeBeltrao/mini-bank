import Titulo from "./Titulo"

interface LayoutProps {
    titulo: string
    children: any
}

export default function Modelo(props: LayoutProps) {
    return (
        <div className="layout">
            <Titulo>{props.titulo}</Titulo>
            <div>
                {props.children}
            </div>
        </div>
    )
}