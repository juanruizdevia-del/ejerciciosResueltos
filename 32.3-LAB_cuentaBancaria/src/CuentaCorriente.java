public class CuentaCorriente extends CuentaBancaria{

    double limiteSobregiro;
    double porcentajeComisionSobregiro;

    // Constructor principal

    public CuentaCorriente(String numeroCuenta, String titular, double saldo, double limiteSobregiro, double porcentajeComisionSobregiro) {
        super(numeroCuenta, titular, saldo, 0.0);
        this.limiteSobregiro = limiteSobregiro;
        this.porcentajeComisionSobregiro = porcentajeComisionSobregiro;
    }

    // constructor valores por defecto
    public CuentaCorriente(String numeroCuenta, String titular, double saldo) {
        super(numeroCuenta, titular, saldo, 0.0);
        this.limiteSobregiro = 50000;
        this.porcentajeComisionSobregiro = 0.05;
    }


    @Override
    public void retirar(double monto) {
        if(monto <= getSaldo()){
            setSaldo(getSaldo() - monto);
            System.out.println("Retiro exitoso! | Nuevo Saldo: $" + getSaldo());
        }
        else if ((getSaldo() + limiteSobregiro) > monto){
            double sobregiro = monto - getSaldo();
            System.out.println("Sobregiro exitoso, valor de sobregiro: $" + sobregiro);
            double comision = sobregiro * porcentajeComisionSobregiro;
            setSaldo(getSaldo() - comision - monto);
            System.out.println("Comision de sobregiro $" + comision);
            System.out.println("Nuevo saldo: $" + getSaldo());
        }else {
            System.out.println("Valor a retirar es mayor al saldo y limite de sobregiro");
            System.out.println("Saldo: $" + getSaldo() + " | Limite sobregiro: $" + limiteSobregiro);
        }
    }

    @Override
    public void mostrarInfo(){
        if (getSaldo() > 0){
            super.mostrarInfo();
        }
        else {
            super.mostrarInfo();
            System.out.println("Limite sobregiro: $" + limiteSobregiro);
        }
    }
}
