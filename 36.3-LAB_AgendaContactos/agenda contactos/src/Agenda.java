import java.util.*;

public class Agenda {

    private Map<String, Contacto> listaContactos = new HashMap<>();
    private Set<String> gruposContactos = new HashSet<>();
    private List<Contacto> listaContactosOrdenada = new ArrayList<>();

    public void agregarContacto(Contacto c) {
        if (listaContactos.containsKey(c.getNombre())) {
            System.out.println("Error!, contacto ya existe.");
        } else {
            listaContactos.put(c.getNombre(), c);
            listaContactosOrdenada.add(c);
            listaContactosOrdenada.sort(Comparator.comparing(Contacto::getNombre));
            System.out.println("Contacto Agregado con exito");
        }
    }

    public Contacto buscarContacto(String nombre) {
        Contacto encontrado = listaContactos.get(nombre);
        if (encontrado != null) {
            return encontrado;
        }
        return null;
    }

    public boolean eliminarContacto(String nombre) {
        Contacto encontrado = listaContactos.get(nombre);
        if (encontrado != null) {
            listaContactos.remove(nombre);
            listaContactosOrdenada.remove(encontrado);
            return true;
        }
        return false;
    }

    public void listarContactos() {
        if (listaContactosOrdenada.isEmpty()) {
            System.out.println("La agenda está vacía.");
            return;
        }
        for (Contacto c : listaContactosOrdenada) {
            System.out.println(c);
        }
    }

    public void agregarGrupo(String nombreGrupo) {
        if (gruposContactos.contains(nombreGrupo)) {
            System.out.println("Error!, el grupo ya existe");
        } else {
            gruposContactos.add(nombreGrupo);
            System.out.println("Grupo creado con éxito.");
        }
    }

    public void listarGrupos() {
        if (gruposContactos.isEmpty()) {
            System.out.println("No hay grupos registrados en la agenda.");
            return;
        }
        System.out.println("Grupos Disponibles:");
        for (String grupo : gruposContactos) {
            System.out.println("> " + grupo);
        }
    }

    public void agregarContactoAGrupo(String nombreContacto, String nombreGrupo) {
        if (!gruposContactos.contains(nombreGrupo)) {
            System.out.println("Error! El grupo no existe.");
            return;
        }

        Contacto contacto = listaContactos.get(nombreContacto);
        if (contacto == null) {
            System.out.println("Error: El contacto no existe en la agenda.");
            return;
        }

        System.out.println("Contacto asignado al grupo: " + nombreGrupo);
    }

    public void mostrarContactosPorGrupo(String nombreGrupo) {
        if (!gruposContactos.contains(nombreGrupo)) {
            System.out.println("Error: El grupo no existe.");
            return;
        }
        System.out.println("Contactos del grupo " + nombreGrupo);
    }
}

