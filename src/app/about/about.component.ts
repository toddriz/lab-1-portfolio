import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    public currentTileIndex = -1;

    public tiles = [
        {text: 'BYU Computer Science Major', cols: 3, rows: 1, color: 'lightblue'},
        {text: 'Orem, Utah', cols: 1, rows: 2, color: 'lightgreen'},
        {text: 'Married 2012', cols: 1, rows: 1, color: 'lightpink'},
        {text: 'Two Year Old Son', cols: 2, rows: 1, color: '#DDBDF1'},
        {text: 'Fluent In Portuguese', cols: 2, rows: 1, color: 'lightgreen'},
        {text: 'Raised In Oregon', cols: 2, rows: 1, color: 'lightblue'},
        {text: 'Seattle Seahawks', cols: 1, rows: 1, color: 'lightgreen'},
        {text: 'Seattle Mariners', cols: 1, rows: 1, color: 'lightblue'},
        {text: 'Portland Trailblazers', cols: 1, rows: 1, color: 'lightpink'},
        {text: 'Oregon Ducks', cols: 1, rows: 1, color: 'lightgreen'},
        {text: 'Gaming', cols: 2, rows: 1, color: '#DDBDF1'},
        {text: 'Raspberry Pi Enthusiast', cols: 2, rows: 1, color: '#DDBDF1'}
      ];

  constructor() {}

  ngOnInit() {}


  public setCurrentTile(tileIndex: number): void {
    this.currentTileIndex = tileIndex;
  }

}
