import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  @Input() items: string[];
  newItem = '';
  @Output() itemAdded = new EventEmitter<string>();

  onClickMe() {
    this.itemAdded.emit(this.newItem);
  }
}
