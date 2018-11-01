import { Component } from '@angular/core';
import {RouterModule} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dytaproj';
  flag:boolean=false;
  alert(){
    alert('Hello Brother');
  }
  togglesidebar(){
    this.flag=!this.flag;
    console.log("Arey!!!");
  }
}
