import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

    public projects = [
        {
            name: 'React Tutorial',
            description: 'Basic react starter app using create react app',
            link: 'https://bitbucket.org/toddriz/react-tutorial/overview',
            thumbnailLink: 'thunmbnail linko'
        },
        {
            name: 'School course catalog and Printable Calendar',
            description: 'A course catalog and school year calendar made in html with js',
            link: 'https://toddriz.github.io/',
            thumbnailLink: 'thunmbnail linko'
        },
        {
            name: 'Task app',
            description: 'A personal task manager that can prioritize schedule and keep track of progress toward goals ',
            link: 'https://bitbucket.org/risenmay/practice-app/overview',
            thumbnailLink: 'thunmbnail linko'
        }
    ];

    constructor() { }

    ngOnInit() {
    }

}
