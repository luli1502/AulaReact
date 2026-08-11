import {Link} from "react-router-dom";

export default function MatoGrosso()
{
    return (
        <div>
            <h1>Estado de Mato Grosso</h1>

            <div className="conteudo">

               <img src="/MT.png"/>

                    <p>
                    Mato Grosso é um estado localizado na região Centro-Oeste do Brasil, conhecido por sua grande riqueza natural e por sua importância para a agricultura e a pecuária. Sua capital é Cuiabá, uma cidade que possui grande importância econômica e cultural para o estado. Mato Grosso abriga parte de importantes biomas brasileiros, como a Amazônia, o Cerrado e o Pantanal, que possuem uma grande diversidade de animais e plantas. Entre seus principais pontos turísticos estão o Pantanal, a Chapada dos Guimarães e o Parque Nacional de Chapada dos Guimarães. A economia do estado se destaca pela produção de soja, milho, algodão e pela criação de gado. Além disso, Mato Grosso possui uma cultura diversificada, com influências indígenas e de diferentes povos que contribuíram para a formação da região. Por suas riquezas naturais e econômicas, Mato Grosso é um estado de grande importância para o Brasil.
 

                    </p>
                      
                       <p>
                        <Link to="/">Voltar</Link>
                       </p>

            </div>
        </div>
    );
}