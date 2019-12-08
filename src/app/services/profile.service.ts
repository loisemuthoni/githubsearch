import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
private username:string;
private clientid = "4bc5e58cc16dcef091f4";
private clientsecret = 'f6e2e812f6dd79178a9e69e3c860842949409c34';

constructor(private http:Http) { 
  console.log("service is now ready");
  this.username = 'loisemuthoni';
}
getProfileInfo(){
  return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "client_secret=" + this.clientsecret)
  .map(res => res.json());
}
}

