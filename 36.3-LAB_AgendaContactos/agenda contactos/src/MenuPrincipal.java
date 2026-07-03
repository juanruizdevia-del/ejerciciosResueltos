import java.util.Scanner;

public class MenuPrincipal {
    public static void main(String[] args) {
        Agenda agenda = new Agenda();
        Scanner scanner = new Scanner(System.in);



        int op = 0;
        while (op != 9) {
            System.out.println("=== AGENDA DE CONTACTOS ===");
            System.out.println("1. Agregar contacto");
            System.out.println("2. Buscar contacto");
            System.out.println("3. Eliminar contacto");
            System.out.println("4. Listar todos los contactos");
            System.out.println("5. Agregar grupo");
            System.out.println("6. Agregar contacto a grupo");
            System.out.println("7. Listar grupos");
            System.out.println("8. Mostrar contactos por grupo");
            System.out.println("9. Salir");
            System.out.println("==========================");
            System.out.println("Elige una opción: ");

            op = scanner.nextInt();
            scanner.nextLine();

            switch (op) {
                case 1:
                    System.out.print("Introduce el nombre del contacto: ");
                    String nombre = scanner.nextLine();
                    System.out.print("Introduce el teléfono: ");
                    String telefono = scanner.nextLine();
                    System.out.print("Introduce el email: ");
                    String email = scanner.nextLine();

                    Contacto nuevoContacto = new Contacto(nombre, telefono, email);
                    agenda.agregarContacto(nuevoContacto);

                    System.out.println("Contacto agredao exitoxamiente!");
                    break;

                case 2:
                    System.out.print("Introduce el nombre a buscar: ");
                    String nombreBuscar = scanner.nextLine();
                    Contacto contactoEncontrado = agenda.buscarContacto(nombreBuscar);
                    break;

                case 3:
                    System.out.print("Introduce el nombre a eliminar: ");
                    String nombreEliminar = scanner.nextLine();
                    boolean eliminado = agenda.eliminarContacto(nombreEliminar);
                    if (eliminado) {
                        System.out.println("Contacto eliminado con éxito.");
                    } else {
                        System.out.println("El contacto no existía.");
                    }
                    break;

                case 4:
                    agenda.listarContactos();
                    break;

                case 5:
                    System.out.print("Introduce el nombre del nuevo grupo: ");
                    String nombreGrupo = scanner.nextLine();
                    agenda.agregarGrupo(nombreGrupo);
                    break;

                case 6:
                    System.out.print("Introduce el nombre del contacto: ");
                    String contactoGrupo = scanner.nextLine();
                    System.out.print("Introduce el nombre del grupo: ");
                    String grupoDestino = scanner.nextLine();
                    agenda.agregarContactoAGrupo(contactoGrupo, grupoDestino);
                    break;

                case 7:
                    agenda.listarGrupos();
                    break;

                case 8:
                    System.out.print("Introduce el nombre del grupo a consultar: ");
                    String grupoConsultar = scanner.nextLine();
                    agenda.mostrarContactosPorGrupo(grupoConsultar);
                    break;

                case 9:
                    System.out.println("Saliendo de la agenda. ¡Hasta luego!");
                    break;

                default:
                    System.out.println("Opción no válida. Por favor, intenta de nuevo.");
                    break;
            }
            System.out.println();
        }
        scanner.close();
    }
}
