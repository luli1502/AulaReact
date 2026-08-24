import { Link } from "react-router-dom";

export default function Pernambuco() {
    return (
        <div>
            <h1>Estado do Pernambuco</h1>

            <div className="conteudo">

                <img src="/PE.png" />

                <p>
                    Pernambuco é um estado localizado na Região
                    Nordeste do Brasil, tendo Recife como sua
                    capital. É conhecido por suas belas praias,
                    cidades históricas e pela rica cultura, com
                    destaque para o frevo, o maracatu e o carnaval.
                    O estado também possui importantes pontos
                    turísticos, como Porto de Galinhas e o arquipélago
                    de Fernando de Noronha. Sua economia se destaca
                    pelo turismo, comércio, indústria, agricultura e serviços.

                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>


            </div>
        </div>
    );
}