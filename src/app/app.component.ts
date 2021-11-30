import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pa-starter-angular';
  nameModel: string = "";
  instructions: string = "";

  listOfNames = Array();
  display = true;
  variable = true;
  showContent() {
    this.variable = false;
  }

  onSubmit() {
    this.listOfNames.push(this.nameModel)
    console.log(this.listOfNames);
    this.nameModel = '';
    this.instructions = '';

  }


}
