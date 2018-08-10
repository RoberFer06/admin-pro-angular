import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SettingsService {

    ajustes: Ajustes = {
        temaUrl: 'assets/css/colors/default-dark.css',
        tema: 'default'
    };

    constructor() {
        this.cargarAjustes();
    }

    guardarAjustes() {
        localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
    }

    cargarAjustes() {

        if (localStorage.getItem('ajustes') == null) {
        } else {
            this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
        }
        this.aplicarTema(this.ajustes.tema);
    }

    aplicarTema(tema) {
        console.log(tema);
        const url = `assets/css/colors/${tema}.css`;
        document.getElementById('theme').setAttribute('href', url);
        this.ajustes.tema = tema;
        this.ajustes.temaUrl = url;
        this.guardarAjustes();
    }
}


interface Ajustes {
    temaUrl: string;
    tema: string;
}
