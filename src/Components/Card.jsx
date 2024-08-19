// import notfound from "./imgs/notfound.jpg"
import "./Card.css"
export default function Card(props){
    return <div className="card">
                    <img src={props.img} />
                    <p className="title">{props.titulo ? props.titulo : "Título não encontrado" }</p>
                    <p className="description">{props.descricao ? props.descricao : "Descrição não encontrada"}</p>
                </div>
}