import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public title = 'Portfolio';
    public navLinks = [
        { label: 'Todd', link: 'about' },
        { label: 'Projects', link: 'projects' },
        { label: 'Work', link: 'work' },
        { label: 'Links', link: 'links' }
    ];

    public toolbarTitle: string;

    public activeLink: string;

    constructor() {
        this.activeLink = 'about';
     }

    public changeHeader(activeLink) {
        this.activeLink = activeLink;
    }


    public getHeaderColor(): string {
        console.log(this.activeLink);
        switch (this.activeLink) {
            case 'about':
                this.toolbarTitle = 'Todd Risenmay';
                return 'lightgray';
            case 'projects':
                this.toolbarTitle = 'Personal Projects';
                return 'blue';
            case 'work':
                this.toolbarTitle = 'Work Experience';
                return 'red';
            case 'links':
                this.toolbarTitle = 'Other sites';
                return 'green';
            default:
                return 'lightgrey';
        }
    }

}
