import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private readonly API_URL = 'https://ih-crud-api.herokuapp.com/characters';

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL);
  }
  getCharacterById(id: string): Observable<any> {
    const url = `${this.API_URL}/${id}`;
    return this.http.get<any>(url);
  }
  deleteCharacter(id: string): Observable<any> {
    const url = `${this.API_URL}/${id}`;
    return this.http.delete(url, {responseType: 'text'});
  }

  
}
