import {Link} from "react-router-dom";

export default function MatoGrossodoSul()
{
    return (
        <div>
            <h1>Estado de Mato Grosso do Sul</h1>

            <div className="conteudo">

               <img src="/MS.png"/>

                    <p>
                    Mato Grosso do Sul é um estado localizado na região Centro-Oeste do Brasil, conhecido por suas belas paisagens naturais, sua diversidade de animais e sua forte produção agropecuária. Sua capital é Campo Grande, uma cidade importante para a economia e a cultura do estado. Mato Grosso do Sul possui uma grande parte do Pantanal, uma das maiores áreas alagadas do mundo, além de regiões de Cerrado. Entre os principais pontos turísticos estão Bonito, famoso por seus rios de águas cristalinas, grutas e cachoeiras, e o Pantanal, que atrai muitos visitantes interessados na natureza e na observação de animais. A economia do estado é baseada principalmente na agricultura, na pecuária, na indústria e no turismo, com destaque para a produção de soja, milho e criação de gado. Por suas riquezas naturais, sua cultura e sua importância econômica, Mato Grosso do Sul é um estado muito importante para o Brasil.
                    </p>
                      
                       <p>
                        <Link to="/">Voltar</Link>
                       </p>

            </div>
        </div>
    );
}