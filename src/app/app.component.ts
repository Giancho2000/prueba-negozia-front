import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  show = false;
  show2 = false;
  rows = [{noQuestion : 0}]
  title = 'pruebaFull';

  showCampo() {
    this.show ;
    return this.show = true, this.show2=false;
  }

  showCampos() {
    return (this.show2 = true);
  }

  addNewRow() {
    this.rows.push({noQuestion : 0});
  }

}
