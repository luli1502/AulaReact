import { Link } from "react-router-dom";

export default function Tocantins() {
    return (
        <div>
            <h1>Estado de Tocantins</h1>

            <div className="conteudo">

                <img src="/TO.png" />

                <p>
                    Tocantins é um estado localizado na Região Norte do Brasil, tendo Palmas
                    como sua capital. É conhecido por suas belas paisagens naturais, como o Jalapão,
                    com cachoeiras, dunas e rios de águas cristalinas. Sua economia se destaca pela agricultura,
                    pecuária, comércio e serviços. Tocantins também possui uma cultura rica e diversificada,
                    com festas tradicionais e influência de diferentes povos.


                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>


            </div>
        </div>
    );
}