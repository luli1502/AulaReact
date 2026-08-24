import { Link } from "react-router-dom";

export default function Paraiba() {
    return (
        <div>
            <h1>Estado do Paraíba</h1>

            <div className="conteudo">

                <img src="/PB.png" />

                <p>
                    A Paraíba é um estado localizado na Região Nordeste do Brasil,
                    tendo João Pessoa como sua capital. É conhecida por suas belas
                    praias, paisagens naturais e seu rico patrimônio histórico e cultural.
                    O estado se destaca pelas festas juninas, pelo forró, pelo artesanato
                    e pela culinária típica. Sua economia é baseada na agricultura, indústria,
                    comércio, serviços e turismo.




                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}