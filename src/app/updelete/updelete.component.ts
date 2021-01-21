import { Component, OnInit } from '@angular/core';
import { BooklibService } from '../booklib.service';

@Component({
  selector: 'app-updelete',
  templateUrl: './updelete.component.html',
  styleUrls: ['./updelete.component.css']
})
export class UpdeleteComponent implements OnInit {

  newbook:any;
  BookId:number;
  Name:string;
  constructor(private service:BooklibService) { }


public delbook(BookId:number){
 let resp= this.service.deletebook(BookId);
 resp.subscribe((data)=>this.newbook=data);
}

public getbkbyid(){
  let resp= this.service.getbookbyid(this.BookId);
  resp.subscribe((data)=>this.newbook=data);
 }
 public getbkbynm(){
  let resp= this.service.getbookbyname(this.Name);
  resp.subscribe((data)=>this.newbook=data);
 }

  ngOnInit() {

    let resp=this.service.getbooks();
    resp.subscribe((data)=>this.newbook=data);
  }

}
