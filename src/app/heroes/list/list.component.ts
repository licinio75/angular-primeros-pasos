import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroeNames: string[] = ['Spiderman', 'Superman', 'Hulk', 'Thor'];
  public heroeBorrado: string | undefined = 'XXX';

  public borrarUltimoHeroe() : void {
    if (this.heroeNames.length > 0){
      this.heroeBorrado = this.heroeNames.pop();
    }
  }
}
