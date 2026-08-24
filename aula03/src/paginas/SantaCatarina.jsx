import { Link } from "react-router-dom";

export default function SantaCatarina() {
    return (
        <div>
            <h1>Estado de Santa Catarina</h1>

            <div className="conteudo">

                <img src="/SC.png" />

                <p>
                    Santa Catarina é um estado localizado na região Sul do Brasil,
                    conhecido por suas belas praias, paisagens naturais e diversidade cultural. Sua capital é Florianópolis,
                    uma cidade famosa por suas praias e pela natureza. O estado possui importantes pontos turísticos, como a Serra
                    do Rio do Rastro, a Praia de Balneário Camboriú e o Parque Beto Carrero World. A economia de Santa Catarina é
                    bastante diversificada, destacando-se na indústria, na agricultura, na pecuária, no comércio e no turismo. O
                    estado também recebeu muitos imigrantes europeus, principalmente alemães, italianos e portugueses, que
                    contribuíram para sua cultura, arquitetura, culinária e tradições. Santa Catarina é um estado importante para
                    o Brasil e se destaca por sua qualidade de vida, suas belezas naturais e sua riqueza cultural.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>


            </div>
        </div>
    );
}