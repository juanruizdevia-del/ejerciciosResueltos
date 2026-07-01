public class TestBanco {
    public static void main(String[] args) {

        System.out.println("Creacion de cuentas");
        System.out.println("------------------------------------------");

        CuentaAhorro cuentaAna = new CuentaAhorro("AH001", "Ana Perez", 50000, "2024-01-15");
        System.out.println("Cuenta de Ahorro creada para Ana Perez.");

        CuentaCorriente cuentaLuis = new CuentaCorriente("CC001", "Luis Gomez", 20000);
        System.out.println("Cuenta Corriente creada para Luis Gomez.");

        CuentaEmpresarial cuentaTech = new CuentaEmpresarial("EM001", "Tech Solutions", 200000,
                "Tech Solutions", "123456789-0");
        System.out.println("Cuenta Empresarial creada para Tech Solutions.");

        CuentaAhorro cuentaMaria = new CuentaAhorro("AH002", "Maria Lopez", 15000, "2024-02-01");
        System.out.println("Cuenta de Ahorro creada para Maria Lopez.");

        System.out.println();

        System.out.println("Informacion inicial de todas las cuentas");
        System.out.println("------------------------------------------");
        cuentaAna.mostrarInfo();
        System.out.println();
        cuentaLuis.mostrarInfo();
        System.out.println();
        cuentaTech.mostrarInfo();
        System.out.println();
        cuentaMaria.mostrarInfo();
        System.out.println();

        System.out.println("Operaciones");
        System.out.println("------------------------------------------");

        System.out.println("Ana Perez deposita $10,000");
        cuentaAna.depositar(10000);
        System.out.println();

        System.out.println("Luis Gomez retira $25,000");
        cuentaLuis.retirar(25000);
        System.out.println();

        System.out.println("Tech Solutions retira $10,000 ");
        cuentaTech.retirar(10000);
        System.out.println();

        System.out.println("Maria Lopez intenta retirar $20,000");
        cuentaMaria.retirar(20000);
        System.out.println();

        System.out.println("Aplicar intereses");
        System.out.println("------------------------------------------");

        System.out.println("Interes cuenta Ana Perez");
        cuentaAna.aplicarInteres();
        System.out.println();

        System.out.println("Interes cuenta Luis Gomez");
        cuentaLuis.aplicarInteres();
        System.out.println();

        System.out.println("Interes cuenta Tech Solutions");
        cuentaTech.aplicarInteres();
        System.out.println();

        System.out.println("Interes cuenta Maria Lopez");
        cuentaMaria.aplicarInteres();
        System.out.println();

        System.out.println("Estado final de todas las cuentas");
        System.out.println("------------------------------------------");
        cuentaAna.mostrarInfo();
        System.out.println();
        cuentaLuis.mostrarInfo();
        System.out.println();
        cuentaTech.mostrarInfo();
        System.out.println();
        cuentaMaria.mostrarInfo();
        System.out.println();

        System.out.println("Resumen general");
        System.out.println("------------------------------------------");

        int totalCuentas = 4;
        double saldoTotal = cuentaAna.getSaldo() + cuentaLuis.getSaldo()
                + cuentaTech.getSaldo() + cuentaMaria.getSaldo();
        double promedioSaldo = saldoTotal / totalCuentas;

        System.out.println("Total de cuentas: " + totalCuentas);
        System.out.println("Saldo total de todas las cuentas: $" + saldoTotal);
        System.out.println("Promedio de saldo: $" + promedioSaldo);

        CuentaBancaria cuentaMayor = cuentaAna;
        if (cuentaLuis.getSaldo() > cuentaMayor.getSaldo()) {
            cuentaMayor = cuentaLuis;
        }
        if (cuentaTech.getSaldo() > cuentaMayor.getSaldo()) {
            cuentaMayor = cuentaTech;
        }
        if (cuentaMaria.getSaldo() > cuentaMayor.getSaldo()) {
            cuentaMayor = cuentaMaria;
        }

        System.out.println();
        System.out.println("Cuenta con mayor saldo:");
        System.out.println("  Numero de cuenta: " + cuentaMayor.getNumeroCuenta());
        System.out.println("  Titular: " + cuentaMayor.getTitular());
        System.out.println("  Saldo: $" + cuentaMayor.getSaldo());


    }
}