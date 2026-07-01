public abstract class CuentaBancaria {

    private String numeroCuenta;
    private String titular;
    private double saldo;
    private double tasaInteres;

    // Constructor

    public CuentaBancaria(String numeroCuenta, String titular, double saldo, double tasaInteres) {
        this.numeroCuenta = numeroCuenta;
        this.titular = titular;
        if (saldo < 0 && tasaInteres < 0) {
            System.out.println("Saldo y tasa deben ser superiores a 0");
        } else {
            this.saldo = saldo;
            this.tasaInteres = tasaInteres;
        }
    }

    // getters

    public String getNumeroCuenta() {
        return numeroCuenta;
    }

    public String getTitular() {
        return titular;
    }

    public double getSaldo() {
        return saldo;
    }

    public void setSaldo(double saldo) {
        this.saldo = saldo;
    }

    public double getTasaInteres() {
        return tasaInteres;
    }


    // methods

    public void depositar (double monto){
        if (monto > 0){
            saldo = getSaldo() + monto;
            System.out.println("deposito de $" + monto + " ha sido aporvado");
            System.out.println("Saldo actual: " + getSaldo());
        } else {
            System.out.println("Monto a depositar debe ser mayor a 0");
        }
    }

    public abstract void retirar (double monto);

    public void aplicarInteres (){
        double interes = saldo * (tasaInteres * 0.01);
        System.out.println("total de intereses del saldo actual: " + interes);
        System.out.println("Total del saldo actual: $" + getSaldo());
        setSaldo(getSaldo() + interes);
        System.out.println("Total con intereses aplicados: " + getSaldo());
    }

    public void mostrarInfo (){
        System.out.println("Numero de cuenta: #" + getNumeroCuenta());
        System.out.print("nombre de titular: " + getTitular());
        System.out.println("| Saldo actual: $" + getSaldo());
        System.out.println("porcentaje de la taza de interes: " + getTasaInteres() + "%");
    }
}
