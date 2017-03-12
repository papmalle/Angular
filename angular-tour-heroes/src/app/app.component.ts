import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
            
             <p>List of Heroes myTagBranch Tests: </p>
             <ul class="heroes">
               <li *ngFor="let hero of heroes"  [class.selected]="hero === selectedHero" (click)="onSelect(hero)">
                <span class="badge">{{hero.id}}</span> {{hero.name}}
               </li>             
             </ul>
           <div *ngIf="selectedHero">
             <h2>{{selectedHero.name}} details!</h2>
            <div><label>id: </label>{{selectedHero.id}}</div>
            <div>
                <label>name tESTS: </label>
                <input [(ngModel)]="selectedHero.name" placeholder="name"/>
            </div>  
          </div>
             
           

`,
 styleUrls: ['styles.css']

})

export class AppComponent  {
  title = 'Tour of Heroes';
  selectedHero: Hero;

  heroes: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
  ];

  onSelect(hero: Hero):void{
    this.selectedHero= hero;
  }
}

export class Hero{
  id:number;
  name:string;

}



// Defines the same AppComponent as the one in the QuickStart playground.
// It is the root component of what will become a tree of nested components
// as the application evolves.
