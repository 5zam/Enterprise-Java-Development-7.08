import { Component } from '@angular/core';
import { Character } from './models/character.model';
import { CharacterService } from './services/character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  characters: Character[] = [];
  selectedCharacter: Character | null = null;

  constructor(private characterService: CharacterService) {
    // Fetch characters from your service and populate the array
    this.characterService.getAllCharacters().subscribe((data) => {
      this.characters = data;
    });
  }

  onCharacterSelected(character: Character) {
    this.selectedCharacter = character;
  }

  onCharacterDeleted(character: Character) {
    // Implement character deletion logic here
    // Remove character from the 'characters' array
    const index = this.characters.findIndex((c) => c.id === character.id);
    if (index !== -1) {
      this.characters.splice(index, 1);
    }
    this.selectedCharacter = null;
  }
  
}




  

