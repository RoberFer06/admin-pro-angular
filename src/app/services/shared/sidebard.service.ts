import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebardService {

    menu: any = [{
        title: 'Prinsipal',
        icon: 'mdi mdi-gauge',
        submenu: [
            { title: 'Dashboard' , url: '/dashboard' },
            { title: 'ProgresBar' , url: '/progress' },
            { title: 'Graficas' , url: '/graficas1' },
        ]
    }];
  constructor() { }
}
