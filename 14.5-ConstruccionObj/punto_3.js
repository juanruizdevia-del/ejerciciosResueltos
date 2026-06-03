// Tercer punto

function Reproductor() {
    this.estado = 'detenido';

    this.play = function(estado){
        if(this.estado === 'detenido' || this.estado === 'pausado'){
            this.estado = 'Reproduciendo';
            console.log('Estado cambio a reproduciendo');
        }
        else{
            console.log('Ya esta reproducciendo');
        }
    }
    this.pausa = function(estado){
        if(this.estado === 'Reproduciendo'){
            this.estado = 'pausado';
            console.log('Estado cambio a pausado');
        }
        else{
            console.log('Ya esta reproduciendo');
        }
    }
    this.detener = function(estado){
        this.estado = 'Detenido'
        console.log('Reproductor detenido');
    }
}

reproductor = new Reproductor();
reproductor.play();
reproductor.pausa();
reproductor.detener();
