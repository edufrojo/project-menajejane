import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  closeNav() {
    document.getElementById("nav-menu").style.width = "0%";
    document.getElementById("navegacion").style.opacity = "0";
    document.getElementById("navegacion").style.width = "0%";
    document.getElementsByTagName("html")[0].style.overflow = "auto";
  }

}
