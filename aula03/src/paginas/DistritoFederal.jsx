import {Link} from "react-router-dom";

export default function DistritoFederal()
{
    return (
        <div>
            <h1>Estado de Distrito Federal</h1>

            <div className="conteudo">

               <img src="/GO.png"/>

                    <p>
                    O Distrito Federal está localizado na região Centro-Oeste do Brasil e é onde fica Brasília, a capital do país. Brasília foi inaugurada em 1960 e é conhecida por sua arquitetura moderna, planejada pelo urbanista Lúcio Costa e pelo arquiteto Oscar Niemeyer. O Distrito Federal é importante por ser a sede dos principais órgãos do governo brasileiro, como o Congresso Nacional, o Palácio do Planalto e o Supremo Tribunal Federal. Além da importância política, a região possui áreas verdes, parques e pontos turísticos, como a Catedral Metropolitana de Brasília e a Esplanada dos Ministérios. Sua economia é baseada principalmente no setor de serviços, no comércio e nas atividades relacionadas ao governo. Por sua importância política, histórica e cultural, o Distrito Federal tem um papel fundamental no Brasil.

 

                    </p>
                      
                       <p>
                        <Link to="/">Voltar</Link>
                       </p>

            </div>
        </div>
    );
}