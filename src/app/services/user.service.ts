import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  getAllUsers() {
    // return [
    //     {id:10,name:"Sonu", city:"Nagpur",salary:20000, DOB:new Date("11/11/1990")},
    //     {id:11,name:"Sneha", city:"Delhi",salary:40000, DOB:new Date("01/03/1990")},
    //     {id:12,name:"Rutuja", city:"Pune",salary:30000, DOB:new Date("03/03/1990")},
    //     {id:13,name:"Neha", city:"Bombay",salary:25000, DOB:new Date("05/10/1990")},
    //   ];
    return this.http.get("https://jsonplaceholder.typicode.com/users")
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    //window.alert(errorMessage);
    return throwError(error.status);
  }
  getUser(id:number){
    return this.http.get("https://jsonplaceholder.typicode.com/users/"+id);
  }
}
