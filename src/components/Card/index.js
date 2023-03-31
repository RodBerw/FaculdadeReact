import "./card.css";

export const filmes = [
  {
    nome: "Vingadores",
    duracao: "2H30",
    foto: "vingadores.png",
    ano: 2010,
    assistido: true,
    genero: "Ação/Nerd",
    descricao: "Filme da Marvel com super-heróis",
    nota: 5,
  },
  {
    nome: "O Hobbit",
    duracao: "2H50",
    foto: "oHobbit.jpg",
    ano: 2012,
    assistido: true,
    genero: "Aventura/Nerd",
    descricao: "Filme de fantasia medieval",
    nota: 5,
  },
  {
    nome: "Interstellar",
    duracao: "2H10",
    foto: "interstellar.jpg",
    ano: 2014,
    assistido: false,
    genero: "Ação/Ficção",
    descricao: "Filme de ficção científica",
    nota: 5,
  },
  {
    nome: "Star Wars",
    duracao: "2H18",
    foto: "starwars.jpg",
    ano: 2015,
    assistido: false,
    genero: "Ação/Nerd",
    descricao: "Filme da aventura e ficção",
    nota: 5,
  },
];

function Assitido({ javisto }) {
  if (javisto) {
    return <p>Assistido ✔</p>;
  }
  return <p className="item">Não assistido</p>;
}

export default function Card() {
  return (
    <div className="container text-center">
      <div className="row d-flex flex-wrap">
        {filmes.map((filme, i) => (
          <div className="col" key={i}>
            <div className="card">
              <img
                src={"/assets/images/" + filme.foto}
                alt={filme.nome}
                className="card-img-top movieImg"
              />
              <div className="card-body">
                <h5 className="card-title">
                  {filme.nome} ({filme.ano}){" "}
                </h5>
                <p>Sinopse</p>
                <p className="card-text">{filme.descricao}</p>
                <p>{filme.duracao}</p>
                <p>{filme.genero}</p>
                <p>{filme.nota}</p>
                <Assitido javisto={filme.assistido} />
                <a href={`/detalhes/${filme.nome}`}>
                  <div className="btn btn-primary">Detalhes</div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
