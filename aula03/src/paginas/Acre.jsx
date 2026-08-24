import { Link } from "react-router-dom";

export default function Acre() {
    return (
        <div>
            <h1>Estado do Acre</h1>

            <div className="conteudo">

                <img src="/AC.png" />

                <p>
                    O Acre é um estado localizado na região Norte do Brasil, conhecido por suas grandes áreas
                    de floresta amazônica e por sua rica biodiversidade. Sua capital é Rio Branco, a maior cidade do estado
                    e um importante centro econômico e cultural. O Acre possui uma forte relação com a Amazônia e com a
                    preservação ambiental, além de ter uma história marcada pela exploração da borracha. Entre os principais
                    pontos turísticos estão a Reserva Extrativista Chico Mendes, o Parque da Maternidade e o centro histórico
                    de Rio Branco. A economia do estado é baseada principalmente na agricultura, na pecuária, no extrativismo
                    e no comércio. O Acre também possui uma cultura diversificada, com influências indígenas e de diferentes
                    povos que vivem na região. Por sua riqueza natural, sua história e sua importância para a Amazônia,
                    o Acre é um estado muito importante para o Brasil.


                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>


            </div>
        </div>
    );
}