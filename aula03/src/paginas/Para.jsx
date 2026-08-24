import { Link } from "react-router-dom";

export default function Para() {
    return (
        <div>
            <h1>Estado do Pará</h1>

            <div className="conteudo">

                <img src="/PA.png" />

                <p>
                    O Pará é um estado localizado na Região Norte do Brasil,
                    tendo Belém como sua capital. É conhecido por sua grande
                    riqueza natural, com parte da Floresta Amazônica, muitos
                    rios e uma enorme diversidade de animais e plantas. O
                    estado também possui uma cultura muito rica,
                    destacando-se pela culinária, pelas festas tradicionais
                    e pelo artesanato. Entre seus principais símbolos estão
                    o açaí, o Círio de Nazaré e o famoso mercado Ver-o-Peso,
                    em Belém.


                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}