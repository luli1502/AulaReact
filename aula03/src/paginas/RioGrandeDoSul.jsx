import { Link } from "react-router-dom";

export default function RioGrandedoSul() {
    return (
        <div>
            <h1>Estado do Rio Grande do Sul</h1>

            <div className="conteudo">

                <img src="/RS.png" />

                <p>
                    O Rio Grande do Sul é um estado localizado na região Sul do Brasil,
                    conhecido por sua rica cultura, belas paisagens e tradições. Sua
                    capital é Porto Alegre, uma das principais cidades da região. O
                    estado possui importantes pontos turísticos, como as cidades de
                    Gramado e Canela, a Serra Gaúcha e os cânions de Cambará do Sul.
                    A economia do Rio Grande do Sul é baseada principalmente na
                    agricultura, na pecuária, na indústria e no comércio, com destaque
                    para a produção de soja, arroz, trigo e uva. A cultura gaúcha
                    é muito conhecida por suas tradições, como o chimarrão, o
                    churrasco, as danças típicas e as roupas tradicionais.
                    Além disso, o estado recebeu muitos imigrantes europeus,
                    principalmente alemães e italianos, que contribuíram para a
                    formação de sua cultura. Por suas belezas naturais e sua
                    diversidade cultural, o Rio Grande do Sul é um estado de
                    grande importância para o Brasil.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>


            </div>
        </div>
    );
}