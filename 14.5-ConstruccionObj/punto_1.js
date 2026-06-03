// Primer punto:

function Libro(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.prestado = false;

    this.prestar = function () {
        if (this.prestado === false) {
            this.prestado = true;
            console.log('Disponible');
        }
        else {
            console.log('No Disponible');
        }
    };
};

libro1 = new Libro('It', 'Stephen King');
libro2 = new Libro('Harry Potter', 'J. K. Rowling');

console.log(libro1);

libro1.prestar();

console.log(libro1);

libro1.prestar();

console.log(libro1);

console.log(libro2);
