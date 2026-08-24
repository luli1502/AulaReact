import { Link } from "react-router-dom";

export default function MinasGerais() {
    return (
        <div>
            <h1>Estado de Minas Gerais</h1>

            <div className="conteudo">

                <img src="/MG.png" />

                <p>
                    Minas Gerais é um estado localizado na região Sudeste do Brasil e é conhecido por
                    sua rica história, cultura e tradições. Destaca-se pela produção de café, queijo e minérios,
                    além de possuir belas paisagens naturais e cidades históricas. Sua capital, Belo Horizonte, é um importante
                    centro econômico, cultural e gastronômico do país.



                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}