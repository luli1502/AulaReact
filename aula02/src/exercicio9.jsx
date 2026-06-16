export default function Exercicio9({ vendas, salario }) 
{
    let comissao = vendas * 0.06;
    let salarioFinal = salario + comissao;


    
    return(
        <div>
           <p> Valor das vendas: R$ {vendas}</p>
           <p>Comissão : R$ {comissao}</p>
           <p>Salário Final: R$ {salarioFinal}</p>
        </div>
    );
}