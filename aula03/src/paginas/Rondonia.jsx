import { Link } from "react-router-dom";

export default function Rondonia() {
    return (
        <div>
            <h1>Estado de Rondônia</h1>

            <div className="conteudo">

                <img src="/RO.png" />

                <p>
                    Rondônia é um estado localizado na Região Norte do Brasil, tendo
                    Porto Velho como sua capital. O estado possui uma grande diversidade
                    de paisagens naturais, com florestas, rios e áreas de preservação da
                    Amazônia. Sua economia se destaca pela agropecuária, pelo comércio e
                    pela exploração de recursos naturais. Rondônia também possui uma
                    cultura diversificada, formada pela influência de diferentes povos
                    e comunidades da região amazônica.


                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>


            </div>
        </div>
    );
}