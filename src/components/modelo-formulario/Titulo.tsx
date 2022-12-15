export default function Titulo(props) {
    return (
        <div className="titulo">
            <h1 className="titulo-h1">{props.children}</h1>
        </div>
    )
}