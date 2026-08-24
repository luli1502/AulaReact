import { Link } from "react-router-dom";

export default function Amapa() {
    return (
        <div>
            <h1>Estado de Amapá</h1>

            <div className="conteudo">

                <img src="/AP.png" />

                <p>
                    O Amapá é um estado localizado na Região Norte do Brasil, conhecido por
                    sua rica biodiversidade e pelas belezas naturais da Amazônia. Sua capital
                    é Macapá, que possui como um dos principais pontos turísticos o Monumento
                    do Marco Zero do Equador. O estado também se destaca por seus rios,
                    florestas e pela diversidade cultural de sua população. Além disso, o Amapá
                    é um dos poucos lugares do Brasil onde é possível observar a linha do Equador
                    passando pela cidade.


                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}