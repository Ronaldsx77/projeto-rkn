CREATE TABLE animes (
	id integer auto_increment primary key,
    nome varchar(100),
    ano integer,
    classificacao integer,
    temporadas integer,
    sinopse text,
    nota integer,
    img varchar(200)
);

INSERT INTO aluno VALUES
(default, 'Cowboy Bebop', 1998, 16, 1, 'Cowboy Bebop conta a história do grupo de caçadores de recompensas formado por quatro desajustados: Spike Spiegel, Jet Black, Faye Valentine e Radical Ed. Enquanto tentam esquecer o passado, eles vasculham o espaço sideral à procura dos criminosos mais perigosos do universo.', 0),
(default, 'Death Note', 2006, 16, 1, 'Um estudante de repente encontra um caderno que caiu do céu. Trata-se do Death Note, que permite ao seu portador matar qualquer pessoa a partir da mera anotação do nome do alvo em uma de suas páginas. Sob a influência de Ruyk, dono do caderno, ele passa a usá-lo para eliminar criminosos e pessoas que escaparam da justiça. A súbita onda de assassinatos faz com que ele seja endeusado por muitos, que o apelidam de Kira, mas também atrai a atenção de um enigmático e brilhante detetive, chamado L.', 0),
(default, 'Bleach', 2004, 12, 10,'Kurosaki Ichigo é um garoto de 15 anos que pode ver, tocar e falar com espíritos de pessoas mortas. Até que um dia ele encontra Kuchiki Rukia, uma Shinigami (deus da morte), e descobre posteriormente que também é um Shinigami. Agora, com seus poderes, ele terá que proteger sua cidade de forças do mal.', 0)
