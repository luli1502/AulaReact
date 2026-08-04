import {Link} from "react-router-dom";

export default function SaoPaulo()
{
    return (
        <div>
            <h1>Estado de São Paulo</h1>

            <div className="conteudo">

                <img src="/SP.png"/>
                 
                <p>
                      O estado de São Paulo está localizado na região Sudeste do Brasil
                      e é o mais populoso do país. 
                      Destaca-se por sua forte economia, com grande desenvolvimento nas áreas da indústria, do comércio,
                      da agricultura e
                      dos serviços. Além disso, possui rica diversidade cultural, importantes centros urbanos e atrações
                      turísticas que 
                      contribuem para seu destaque no cenário nacional.

                    </p>
                      
                       <p>
                        <Link to="/">Voltar</Link>
                       </p>

            </div>
        </div>
    );
}