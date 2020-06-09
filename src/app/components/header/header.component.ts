import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  openNav() {
    document.getElementById("navegacion").style.width = "100%";
    document.getElementById("navegacion").style.opacity = "1";
    document.getElementById("nav-menu").style.width = "100%";
    document.getElementsByTagName("html")[0].style.overflow = "hidden";
  }
}
