import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooklibService {

  constructor( private http:HttpClient) { }

public insertbook(newbook){
return this.http.post("http://localhost:58035/api/book",newbook);
}
public getbooks(){
  return this.http.get("http://localhost:58035/api/book");
}

public getbookbyid(BookId){
  return this.http.get("http://localhost:58035/api/book"+BookId);
}
public getbookbyname(Name){
  return this.http.get("http://localhost:58035/api/book/"+Name);
}

 public deletebook(BookId){
  return this.http.delete("http://localhost:58035/api/book/"+BookId);
}
 

}
