import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-page-b',
  templateUrl: './page-b.component.html',
  styleUrls: ['./page-b.component.css']
})
export class PageBComponent implements OnInit {

   constructor(private location: Location) { }

   goBack() {
        this.location.back();
    }

  ngOnInit() {
  }

}
