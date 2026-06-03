// Ejercicio 2

class Contenido {

    static catalogo = [];

    constructor(titulo, genero, anio, disponible = true) {
        this.titulo = titulo
        this.genero = genero;
        this.anio = anio;
        this.disponible = disponible;
        Contenido.catalogo.push(this);
    };

    ficha() {
        return `Titulo: ${this.titulo} | Genero: ${this.genero} | Año${this.anio}`;
    };

    retirar() {
        this.disponible = false;
        return `${this.titulo} ha sido retirada.`;
    };

    estado() {
        return this.disponible;
    };
};

class Pelicula extends Contenido {

    constructor(titulo, genero, anio, duracion) {
        super(titulo, genero, anio)
        this.duracion = duracion;
    };

    duracionFormateada() {
        const horas = Math.floor(this.duracion / 60);
        const minutos = this.duracion % 60;
        return `${horas} Horas, ${minutos} Minutos`
    };

    ficha() {
        return super.ficha() + ` | Duracion ${this.duracionFormateada()}`;
    };
};

class Serie extends Contenido {

    constructor(titulo, genero, anio, temporadas, episodiosPorTemporada = 0) {
        super(titulo, genero, anio)
        this.temporadas = temporadas;
        this.episodiosPorTemporada = episodiosPorTemporada;
    };

    registrarEpisodios(cantidad) {
        return this.episodiosPorTemporada = cantidad;
    };

    totalEpisodios() {
        return this.temporadas * this.episodiosPorTemporada;
    }

    ficha() {
        return super.ficha() + `Total de temporadas: ${this.temporadas} | Total De Episodios: ${this.totalEpisodios()}`;
    }
};

const pelicula1 = new Pelicula('Titanic', 'Romance/Historia', 1997, 336);
const pelicula2 = new Pelicula('Pulp Fiction', 'Crimen/Suspenso', 1994, 154);
const pelicula3 = new Pelicula('Avengers', 'Accion, SuperHeroes', 2012, 200);

const serie1 = new Serie('Rick and Morty', 'Ciencia Ficción/Comedia', 2013, 8, 8);
const serie2 = new Serie('Breakin Bad', 'Drama/Crimen', 2008, 5, 10);
const serie3 = new Serie('Dr House', 'Drama', 2008, 8, 10);

for (let elemento of Contenido.catalogo) {
    console.log(elemento.ficha());
}

console.log(pelicula1.retirar(), serie1.retirar());
console.log(pelicula1.estado(), serie1.estado());

let c = 0;
for (let elemento of Contenido.catalogo) {
    if (elemento.disponible === true) {
        c++;
    };
};
console.log(`Hay ${c} elementos aun disponible/s`);

