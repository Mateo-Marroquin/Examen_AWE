import { Component, input, output } from '@angular/core';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCard {
  user = input.required<User>();

  idSender = output<number>();

  deleteCard(): void {
    this.idSender.emit(this.user().id);
  }

}
