import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {
userObj :User = {};
onSubmit(userForm:NgForm){
  console.log(userForm.value)
}
}
