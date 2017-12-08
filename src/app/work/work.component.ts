import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-work',
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

    public jobs = [
        {
            title: 'Software Developer',
            company: 'CMS',
            startDate: '08/17',
            endDate: 'Present',
            location: 'Orem, Utah',
            logoUrl: 'https://media.licdn.com/mpr/mpr/shrinknp_100_100/p/5/005/06c/3a7/249e718.png'
        },
        {
            title: 'Software Developer',
            company: 'Missionary Training Center',
            startDate: '02/17',
            endDate: '08/17',
            location: 'Provo, Utah',
            logoUrl: 'https://media.licdn.com/mpr/mpr/shrinknp_100_100/p/1/005/09e/15c/3288a2d.png'
        },
        {
            title: 'IT Manager',
            company: 'American Heritage School',
            startDate: '05/11',
            endDate: '10/16',
            location: 'American Fork, Utah',
            // tslint:disable-next-line:max-line-length
            logoUrl: 'https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAEAAQAAAAAAAAcdAAAAJGYyOTdkNTM4LTA2OTUtNGFmOS05MWZkLTY4Mzk3NmY0ZjUwNw.png'
        }
    ];

    constructor() { }

    ngOnInit() { }

}
