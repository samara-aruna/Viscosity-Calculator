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

  Answer()
  {
    this.result = (Math.PI*this.p_value*Math.pow(this.r_value,4)*this.time_value)/(8*this.Constant_value*this.vessel_length)
  }
}
