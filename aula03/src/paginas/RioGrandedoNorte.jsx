import { Link } from "react-router-dom";

export default function RioGrandedoNorte() {
    return (
        <div>
            <h1>Estado do Rio Grande do Norte</h1>

            <div className="conteudo">

                <img src="/RN.png" />

                <p>
                    O Rio Grande do Norte é um estado localizado
                    na Região Nordeste do Brasil, tendo Natal como
                    sua capital. É conhecido por suas belas praias,
                    dunas e paisagens naturais, sendo um importante destino
                    turístico. Entre seus principais pontos turísticos estão
                    as dunas de Genipabu e a praia de Pipa. Sua economia se
                    destaca pelo turismo, agricultura, pecuária, indústria
                    e produção de sal.



                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>


            </div>
        </div>
    );
}