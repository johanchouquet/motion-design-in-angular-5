import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, stagger, animateChild } from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('items', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),  // initial
        animate('0.7s cubic-bezier(.8, -0.6, 0.26, 1.6)',
          style({ transform: 'scale(1)', opacity: 1 }))  // final
      ]),
      transition(':leave', [
        style({ transform: 'scale(1)', opacity: 1, height: '*' }),
        animate('0.6s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({
            transform: 'scale(0.5)', opacity: 0,
            height: '0px', margin: '0px'
          }))
      ])
    ]),
    trigger('list', [
      transition(':enter', [
        query('@items', stagger(150, animateChild()))
      ]),
    ])
  ]
})
export class AppComponent {
  list = [1, 2, 3, 4, 5, 6, 7, 8];
  counter = this.list.length + 1;

  add() {
    this.list.push(this.counter++);
  }

  remove(index) {
    if (!this.list.length) {
      return;
    }
    this.list.splice(index, 1);
  }
}
