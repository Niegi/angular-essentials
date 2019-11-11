import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  characters = [];
  chosenList = 'all';

  constructor() { }

  ngOnInit() {
  }

  getCharacters() {
    
  }

  onChoose(side: string) {
    this.chosenList = side;
  }

  onSideChosen(charInfo) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    })
    this.characters[pos].side = charInfo.side;
  }
}
