import { Link } from "react-router-dom";

export default function Sergipe () 
 {
    return (
        <div>
            <h1>Estado do Sergipe</h1>

            <div className="conteudo">

                <img src="/SE.png" />

                <p>
                    Sergipe é um estado localizado na Região Nordeste do Brasil,
                    tendo Aracaju como sua capital. É o menor estado brasileiro em
                    extensão territorial, mas possui belas praias, rios e paisagens
                    naturais. Sua cultura é marcada por festas tradicionais, música,
                    artesanato e culinária típica. A economia do estado se destaca
                    pela agricultura, indústria, comércio, serviços e turismo.



                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>


            </div>
        </div>
    );
}