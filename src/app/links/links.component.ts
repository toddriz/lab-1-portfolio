import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-links',
    templateUrl: './links.component.html',
    styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

    public linkedIn = 'https://www.linkedin.com/in/todd-risenmay-108747146/';
    public gitHub = 'https://github.com/toddriz';
    public bitBucket = 'https://bitbucket.org/toddriz/';

    constructor() { }

    ngOnInit() {
    }

}
