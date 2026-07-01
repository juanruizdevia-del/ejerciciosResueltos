public class CuentaEmpresarial extends CuentaBancaria {

    private String nombreEmpresa;
    private String rut;
    private double comisionRetiro;

    public CuentaEmpresarial(String numeroCuenta, String titular, double saldo, String nombreEmpresa, String rut) {
        super(numeroCuenta, titular, validarSaldo(saldo), 1.5);
        this.nombreEmpresa = nombreEmpresa;
        this.rut = rut;
        this.comisionRetiro = 2000;

    }

    public static double validarSaldo(double saldo){
        if(saldo<100000) {
            System.out.println("Para crear una cuenta usted debe ingresar un monto minimo de $100.000");
            return 0;
        }
        return saldo;
    }

    @Override
    public void retirar(double monto) {
        if ((getSaldo() + comisionRetiro) > monto) {

            setSaldo(getSaldo() - monto - comisionRetiro);
            System.out.println("Retiro exitoso, Comision por retiro: $" + comisionRetiro);
            System.out.println("saldo actual: $" + getSaldo());
        } else {
            System.out.println("Saldo insuficiente, " + monto + " + $2.000 (Comision del retiro) es superior al saldo actual.");
        }
    }

    @Override
    public void mostrarInfo() {
        System.out.println("Empresa: " + nombreEmpresa + " | RUT: " + rut);
        super.mostrarInfo();
    }
}