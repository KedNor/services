import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlimentService {
  public aliments: string[];
  
  constructor() {
    this.aliments = [];
  }
}
