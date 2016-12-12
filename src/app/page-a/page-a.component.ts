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

}
