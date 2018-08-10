import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-progres-dona',
    templateUrl: './progres-dona.component.html',
    styleUrls: ['./progres-dona.component.css']
})
export class ProgresDonaComponent implements OnInit {

    @Input() labels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    @Input() data: number[] = [350, 450, 100];
    @Input() chartType: string = 'doughnut';

    constructor() { }

    ngOnInit() {
    }

}
