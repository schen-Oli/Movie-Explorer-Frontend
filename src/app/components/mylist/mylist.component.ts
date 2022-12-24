import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css']
})
export class MylistComponent implements OnInit {

  constructor() { }

  public myList: any = [];

  ngOnInit(): void {
    this.getMyList();
  }

  getMyList() {
    //window.localStorage.removeItem("watchList");
    var listString = window.localStorage.getItem("watchList");
    if (listString) {
      var list = JSON.parse(listString);

      var numOfMedia = list.length;

      if (numOfMedia == 0) {
        document.getElementById("title")!.style.display = 'none';
        document.getElementById("empty-title")!.style.display = 'block';
      } else {
        document.getElementById("empty-title")!.style.display = 'none';
        document.getElementById("title")!.style.display = 'block';
      }
      this.myList = list;
      
    } else {
      window.localStorage.setItem("watchList", "[]");
      document.getElementById("title")!.style.display = 'none';
      document.getElementById("empty-title")!.style.display = 'block';
      this.myList = [];
    }
  }

}
