import { Link } from "react-router-dom";

export default function Roraima() {
    return (
        <div>
            <h1>Estado de Roraima</h1>

            <div className="conteudo">

                <img src="/RR.png" />

                <p>
                    Roraima é um estado localizado na Região Norte do Brasil,
                    tendo Boa Vista como sua capital. É conhecido por suas belas
                    paisagens naturais, como o Monte Roraima, além de possuir
                    grande parte de seu território coberto pela Amazônia. O
                    estado tem uma população culturalmente diversificada, com
                    forte presença de povos indígenas. Sua economia é baseada
                    principalmente na agricultura, pecuária, comércio e serviços.


                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>


            </div>
        </div>
    );
}