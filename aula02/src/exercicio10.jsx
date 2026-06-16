export default function Exercicio10 ({ salario}) 
{
    let gratificacao = salario *0.08;
    let salarioFinal= salario + gratificacao;

    return ( 
        <div>
            <p>Salário Base: R$ {salario}</p>
            <p>Gratificação:{gratificacao}</p>
            <p>Salário Final: R$ {salarioFinal}</p>
        </div>
    );
}