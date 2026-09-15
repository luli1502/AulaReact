import { Link } from "react-router-dom";
import { useState } from "react";

export default function Exercicio5() {
    const [lado, setLado] = useState();
    const [resultado, setResultado] = useState();

    function calcular() {
        let area;

        area = Number(lado) * Number(lado);

        setResultado(
            <div>
                Área = {area}
            </div>
        );
    }

    return (
        <div>
            <h1>Exercício 5</h1>

            <div className="conteudo">

            <form>
                    <p>
                    Digite o valor do lado do quadrado
                    </p>
                    <input type="text"
                    value={lado}
                    onChange={(e) => setQuantidade(e.target.value)}
                    />
                    
                
                <p>
                        <input type="button" value="Calcular" onClick={calcular} />
                    </p>

                    <p>
                        {resultado}
                    </p>                    
                </form>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>
    );
}
