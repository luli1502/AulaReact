import { Link } from "react-router-dom";

export default function Bahia() {
    return (
        <div>
            <h1>Estado da Bahia</h1>

            <div className="conteudo">

                <img src="/BA.png" />

                <p>
                    A Bahia é um estado localizado na Região Nordeste do Brasil,
                    tendo Salvador como sua capital. É conhecida por suas belas praias,
                    sua história e sua cultura muito rica, marcada por influências africanas,
                    indígenas e portuguesas. A Bahia também se destaca pela culinária,
                    pelas festas populares e pela música, como o axé e o samba de roda. O
                    turismo, a agricultura, a indústria e os serviços são importantes para
                    sua economia.



                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>


            </div>
        </div>
    );
}