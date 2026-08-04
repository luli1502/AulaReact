import {Link} from "react-router-dom";

export default function RioJaneiro()
{
    return (
        <div>
            <h1>Estado do Rio de Janeiro</h1>
            
            <div className="conteudo">

                <img src="/RJ.png"/>

                   <p>
                      O estado do Rio de Janeiro está localizado na região Sudeste do Brasil
                      e é conhecido por suas belas praias, montanhas e paisagens naturais. Sua capital, 
                      a cidade do Rio de Janeiro, é famosa por pontos turísticos como o Cristo Redentor e o Pão de Açúcar.
                      Além do turismo, o estado também se destaca pela economia, cultura e importância histórica para o país.
 

                    </p>
                      
                       <p>
                        <Link to="/">Voltar</Link>
                       </p>

                
            </div>
        </div>
    );
}