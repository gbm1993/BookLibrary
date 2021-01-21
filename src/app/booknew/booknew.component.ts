import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-booknew',
  templateUrl: './booknew.component.html',
  styleUrls: ['./booknew.component.css']
})
export class BooknewComponent implements OnInit {
  book:any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    let response= this.http.get("http://localhost:58035/api/book");
    response.subscribe((data)=>this.book=data);
  }


}
