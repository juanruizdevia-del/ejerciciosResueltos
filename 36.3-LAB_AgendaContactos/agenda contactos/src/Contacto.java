public class Contacto {

    // Atributos Privados.

    private String nombre;
    private String telefono;
    private String email;
    private String grupo;

    // Constructor:

    public Contacto(String nombre, String telefono, String email) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
    }

    // Metodos getters y setters:


    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getGrupo() {return grupo;}

    public void setGrupo(String grupo) {this.grupo = grupo;}

    // Metodo toString().

    @Override
    public String toString() {
        return "Nombre: " + nombre + " | telefono: " + getTelefono() + " | Email: " + getEmail();
    }
}
