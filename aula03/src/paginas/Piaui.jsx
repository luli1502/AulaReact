import { Link } from "react-router-dom";

export default function Piaui() {
    return (
        <div>
            <h1>Estado do Piauí</h1>

            <div className="conteudo">

                <img src="/PI.png" />

                <p>
                    O Piauí é um estado localizado na Região Nordeste do
                    Brasil, tendo Teresina como sua capital. É conhecido
                    por suas belezas naturais, como o Parque Nacional da
                    Serra da Capivara, que possui importantes pinturas rupestres.
                    O estado também se destaca pela agricultura, pecuária e
                    produção de energia. Sua cultura é rica e inclui festas
                    tradicionais, artesanato e uma culinária típica bastante
                    diversificada.


                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>


            </div>
        </div>
    );
}