import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDelCharacter: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name: '',
    power: 0
  }]

  onDeleteCharacter(id?: string):void {
    this.onDelCharacter.emit(id);
  }

}
