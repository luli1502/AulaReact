import {Link} from "react-router-dom";

export default function EspiritoSanto()
{
    return (
        <div>
            <h1>Estado do Espiríto Santo</h1>
            <div className="conteudo">

                <img src="/ES.png"/>
                 
                      <p>
                         O Espírito Santo é um estado localizado na região Sudeste do Brasil e é conhecido por
                         seu extenso litoral, belas praias e riqueza natural. Sua capital, Vitória, é um importante centro
                         econômico e portuário. O estado também se destaca pela produção de café, rochas ornamentais e pela
                         preservação de áreas de Mata Atlântica, contribuindo para a economia e a biodiversidade do país.
                      </p>
                      
                       <p>
                        <Link to="/">Voltar</Link>
                       </p>

            </div>
        </div>
    );
}