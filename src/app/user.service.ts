import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: 'https://api.github.com/users';

  constructor(private http: HttpClient) {}

// User service
  //Get all users
  getUser() {
    return this.http.get(`${this.apiUrl}?per_page=20`)
  }


    //Get a single user by username
  getUser(username: String) {
    return this.http.get(`${this.apiUrl}/${username}`)
  }

}
