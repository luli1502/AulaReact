import { Link } from "react-router-dom";

export default function Amazonas() {
    return (
        <div>
            <h1>Estado de Amazonas</h1>

            <div className="conteudo">

                <img src="/AM.png" />

                <p>
                    O Amazonas é um estado localizado na Região Norte do Brasil e é o maior
                    estado brasileiro em extensão territorial. Sua capital é Manaus, uma cidade
                    conhecida pelo Teatro Amazonas e por sua importância histórica e econômica. O estado
                    possui uma das maiores áreas de floresta amazônica do mundo, com grande diversidade
                    de animais e plantas. Além disso, o Amazonas é famoso por seus rios, comunidades
                    tradicionais e pela rica cultura amazônica.

                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}