import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-page-a',
  templateUrl: './page-a.component.html',
  styleUrls: ['./page-a.component.css']
})
export class PageAComponent implements OnInit {

   constructor(private router: Router) { }
    
    navigate() {
        this.router.navigate(["page2"]);
    }

  ngOnInit() {
    
  }
choice: string = null;
celcius: number = null;
fahrenheit: number = null;
counter: number = 0;

checkId(id)
{
  this.choice = id;
}
converts()
  {
    if(this.choice ==="c")
    {
      this.fahrenheit = this.celcius * 9 /5 + 32;
    }
    else
    {
      this.celcius = (this.fahrenheit -32) * 5 /9;
    }
    this.counter++;
  }
}
