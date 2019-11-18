import { LogService } from "./log.service";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StarWarsService {
  private characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' }
  ];
  private logService: LogService;
  charactersChanged = new Subject<void>();
  http: HttpClient;

  constructor(logService: LogService, http: HttpClient) {
    this.logService = logService;
    this.http = http;
  }

  fetchCharacters() {
    this.http.get<{results: any}>('https://swapi.co/api/people/')
    .pipe(
      map( response => {
        const extraxtedChars = response.results;
        const chars = extraxtedChars.map( (char) => {
          return {name: char.name, side: ''};
        });
        return chars;
      })
    )
    .subscribe(
      (data) => {
        console.log(data);
        this.characters = data;
        this.charactersChanged.next();
      }
    );
  }

  getCharacters(chosenList) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === chosenList;
    });
  }

  onSideChosen(charInfo) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    })
    this.characters[pos].side = charInfo.side;
    this.charactersChanged.next();
    this.logService.writeLog('Changed side for: ' + charInfo.name + ', new side: ' + charInfo.side);
  }

  addCharacter(name, side) {
    const pos = this.characters.findIndex((char) => {
      return char.name === name;
    })
    if (pos !== -1) {
      return;
    }
    this.characters.push({name, side});
  }
}
