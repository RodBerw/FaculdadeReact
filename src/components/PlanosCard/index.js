import "./planosCard.css";

const planos = [
  {
    nome: "Bronze",
    preco: "R$9,99",
    detalhes: "Plano mensal com disponibilidade de 1 tela.",
  },
  {
    nome: "Prata",
    preco: "R$24,99",
    detalhes: "Plano trimestral com disponibilidade de 2 tela.",
  },
  {
    nome: "Ouro",
    preco: "R$79,99",
    detalhes: "Plano anual com disponibilidade de 2 tela.",
  },
];

export default function PlanosCard() {
  return (
    <div className="container text-center">
      <div className="row">
        {planos.map((plano, i) => (
          <div className="col" key={i}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{plano.nome} </h5>
                <h2>{plano.preco}</h2>
                <p className="card-text">{plano.detalhes}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
