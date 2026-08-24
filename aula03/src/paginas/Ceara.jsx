import { Link } from "react-router-dom";

export default function Ceara() {
    return (
        <div>
            <h1>Estado da Ceará</h1>

            <div className="conteudo">

                <img src="/CE.png" />

                <p>
                    O Ceará é um estado localizado na Região Nordeste do Brasil,
                    tendo Fortaleza como sua capital. É conhecido por suas belas
                    praias, dunas e paisagens naturais. O estado possui uma cultura rica,
                    com destaque para o artesanato, as festas juninas, a música e a culinária
                    típica. Sua economia é baseada principalmente no turismo, na agricultura,
                    na indústria e nos serviços.



                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>


            </div>
        </div>
    );
}