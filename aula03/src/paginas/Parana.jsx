import {Link} from "react-router-dom";

export default function Parana()
{
    return (
        <div>
            <h1>Estado do Paraná</h1>
            
            <div className="conteudo">

                <img src="/PR.png"/>

                   <p>
                   O Paraná é um estado localizado na região Sul do Brasil,
                   conhecido por suas belas paisagens, sua diversidade cultural e sua importância
                   para a economia do país. Sua capital é Curitiba, uma cidade famosa pela organização, pelos
                   parques e pela qualidade de vida. O estado possui lugares turísticos muito conhecidos, como as Cataratas 
                   do Iguaçu, em Foz do Iguaçu, consideradas uma das maiores belezas naturais do mundo. A economia do Paraná é
                   baseada principalmente na agricultura, na pecuária, na indústria e no comércio, destacando-se na 
                   produção de soja, milho, trigo e outros produtos agrícolas. Além disso, o estado possui uma rica diversidade
                   cultural, influenciada por povos indígenas e por imigrantes de diferentes países, como italianos, alemães,
                   poloneses e ucranianos. Por todas essas características, o Paraná é um estado de grande importância para o 
                   Brasil. 
                   </p>
                      
                       <p>
                        <Link to="/">Voltar</Link>
                       </p>

                
            </div>
        </div>
    );
}