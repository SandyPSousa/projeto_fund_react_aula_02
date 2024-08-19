import "./Footer.css"

export default function Footer(props){
    return (
        <footer className="footer">
                <p>
                    {props.descricao || "Desenvolvido por Sandy"}
                </p>
            </footer>
    )
}