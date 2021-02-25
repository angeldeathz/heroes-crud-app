import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private client: HttpClient) { }

  get getUser(): User {
    return JSON.parse(sessionStorage.getItem("user"));
  }

  public login(): Observable<User> {
    const url = environment.urlApi + "usuarios/1"
    return this.client.get<User>(url).pipe(
      tap(user => sessionStorage.setItem("user", JSON.stringify(user)))
    );
  }

  public logout() {
    sessionStorage.setItem("user", null);
  }
}
