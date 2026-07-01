public class CuentaAhorro extends CuentaBancaria{
    private String fechaApertura;

   // Constructor cuenta de ahorros

    public CuentaAhorro(String numeroCuenta, String titular, double saldo, String fechaApertura) {
        super(numeroCuenta, titular, validarSaldo(saldo), 2.5);
        this.fechaApertura = fechaApertura;
    }

    public static double validarSaldo(double saldo){
        if(saldo<10000) {
            System.out.println("Para crear una cuenta usted debe ingresar un monto minimo de $10.000");
            return 0;
        }
        return saldo;
    }

    @Override
    public void retirar(double monto) {
        if(monto > getSaldo()){
            System.out.println("Saldo insuficiente, No hay fondos suficientes.");
            System.out.println("Saldo Actual: " + getSaldo());
        } else{
            System.out.println("saldo actual: $" + getSaldo());
            setSaldo(getSaldo() - monto);  // TUve que usar uin setter para asignar nuevo saldo :(
            System.out.println("Retiro exitoso!");
            System.out.println("Retiro de $" + monto + "ha sido exitoso | Nuevo valor de saldo: $" + getSaldo());
        }
    }

    @Override
    public void mostrarInfo(){
        System.out.println("fecha de apertura: " + fechaApertura);
        super.mostrarInfo();
    }

}


