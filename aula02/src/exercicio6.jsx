export default function Exercicio6({ capital, taxa, tempo }) {

  const jurosSimples =
    capital * (1 + (taxa / 100) * tempo)

  const jurosCompostos =
    capital * Math.pow((1 + taxa / 100), tempo)

  return (
    <div>
      <h2>Exercício 6</h2>

      <p>
        Capital inicial: R$ {capital}
      </p>

      <p>
        Montante (Juros Simples) =
        R$ {jurosSimples.toFixed(2)}
      </p>

      <p>
        Montante (Juros Compostos) =
        R$ {jurosCompostos.toFixed(2)}
      </p>
    </div>
  )
}