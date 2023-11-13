import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit{
  

  @Input() character: any;
  @Output() onCharacterDeletedEvent = new EventEmitter<any>
selectedCharacter: any;
  constructor(
    private CharacterService: CharacterService

  ) {}
  ngOnInit(): void {

  }
  loadCharacter(id: string): void {
    this.CharacterService.getCharacterById(id).subscribe({
      next: (data) => {
        this.character = data;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
  onCharacterDeleted() {
    this.onCharacterDeletedEvent.emit(this.character.id)
    this.character = null
  }
  // @Input() character: Character | null = null;
  // @Output() characterDeleted: EventEmitter<Character> = new EventEmitter<Character>();
  // showSuccessMessage = false; //  to success message

  // deleteCharacter() {
  //   if (this.character) {
  //     this.characterDeleted.emit(this.character);

  //     // Show the success message for 5 seconds
  //     this.showSuccessMessage = true;
  //     setTimeout(() => {
  //       this.showSuccessMessage = false;
  //     }, 5000); // Hide the message after 5 seconds
  //   }
  // }
  // ngOnInit(): void {
  // }

 
}


 

