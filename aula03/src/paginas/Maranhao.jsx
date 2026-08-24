import { Link } from "react-router-dom";

export default function Maranhao() {
    return (
        <div>
            <h1>Estado da Maranhão</h1>

            <div className="conteudo">

                <img src="/MA.png" />

                <p>
                    O Maranhão é um estado localizado na Região Nordeste do Brasil,
                    tendo São Luís como sua capital. É conhecido por suas belas paisagens
                    naturais, como os Lençóis Maranhenses, com suas dunas e lagoas. O estado
                    também possui uma cultura rica e diversificada, destacando-se o Bumba Meu
                    Boi, as festas populares e a culinária típica. Sua economia é baseada na
                    agricultura, na indústria, no comércio, nos serviços e no turismo.




                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>


            </div>
        </div>
    );
}