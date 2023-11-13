import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit{
 
//  characters: Character[] = [];
//   characterSelected: EventEmitter<Character> = new EventEmitter<Character>();

//   constructor(private characterService: CharacterService) { }

//   ngOnInit(): void {
//     this.loadCharacters();
//   }

//   loadCharacters(): void {
//     this.characterService.getAllCharacters().subscribe({
//       next: (data) => {
//         this.characters = data;
//       },
//       error: (error) => {
//         console.error(error);
//       }
//     });
//   }

//   selectCharacter(character: Character) {
//     this.characterSelected.emit(character);
//   }

characters: Character[] = [];
  selectedCharacter: Character | null = null;
  constructor(private characterService: CharacterService) {}
  ngOnInit(): void {
    this.loadCharacters();
  }
  loadCharacters(): void {
    this.characterService.getAllCharacters().subscribe({
      next: (data) => {
        this.characters = data;
      }
      ,
      error: (error) => {
        console.error(error);
      }
    });
  }
  onCharacterSelected(character: Character) {
    this.selectedCharacter = character;
  }
  onCharacterDeleted(id: string) {
    this.characterService.deleteCharacter(id).subscribe(() => {
      const index = this.characters.findIndex((c) => c.id === id);
      if (index !== -1) {
        this.characters.splice(index, 1);
      }
      this.selectedCharacter = null;
    });
  }
}


  





