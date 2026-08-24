import { Link } from "react-router-dom";

export default function Goias() {
    return (
        <div>
            <h1>Estado de Goias</h1>

            <div className="conteudo">

                <img src="/GO.png" />

                <p>
                    Goiás é um estado localizado na região Centro-Oeste do Brasil,
                    conhecido por suas belas paisagens naturais, sua cultura e sua importância
                    para a agricultura. Sua capital é Goiânia, uma cidade bastante conhecida por
                    seus parques e áreas verdes. O estado possui importantes pontos turísticos,
                    como a Chapada dos Veadeiros, as cidades históricas de Goiás e Pirenópolis e
                    as águas termais de Caldas Novas. A economia de Goiás é baseada principalmente
                    na agricultura, na pecuária, na indústria e no comércio, destacando-se na
                    produção de soja, milho, cana-de-açúcar e na criação de gado. A cultura goiana
                    também é muito rica, com destaque para a música sertaneja, as festas tradicionais
                    e a culinária típica. Por suas riquezas naturais, culturais e econômicas, Goiás é
                    um estado de grande importância para o Brasil.



                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}