import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.scss']
})
export class SpaceComponent extends AppComponent implements OnInit  {


  ngOnInit() {
    
  }

  planet ='Mars';

}
