import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { BooklibService } from '../booklib.service';
import {Newbook} from '../newbook';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
newbook : Newbook =new Newbook ();
message: any;
  constructor(private service :BooklibService,private route:Router) { }

  ngOnInit() {
  }

public addingbook(){
let resp=  this.service.insertbook(this.newbook);
resp.subscribe((data)=>
{
  if(data==true){
    this.route.navigateByUrl("updateordelete");
  }
}
)
}


}
