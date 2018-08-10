import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/settings/settings.service';

@Component({
    selector: 'app-account-settins',
    templateUrl: './account-settins.component.html',
    styles: []
})
export class AccountSettinsComponent implements OnInit {

    constructor(
        @Inject(DOCUMENT) private _document,
        public _ajustes: SettingsService
    ) { }

    ngOnInit() {
        this.cambiarPuntero();
    }

    cambiarColor(color, link: any) {
        this._ajustes.aplicarTema(color);
        this.cambiarPuntero();
    }

    cambiarPuntero() {
        const selectores: any = document.getElementsByClassName('selector');

        for ( const ref of selectores ) {
            if (ref.getAttribute('data-theme') === this._ajustes.ajustes.tema) {
                ref.classList.add('working');
            } else {
                ref.classList.remove('working');
            }
        }

    }
}
