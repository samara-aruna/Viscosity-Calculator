import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  title = 'Fifth_Project';

  public r_value!: number;
  public p_value!: number;
  public time_value!: number;
  public Constant_value!: number;
  public vessel_length!: number;

  public result!: number;
}
