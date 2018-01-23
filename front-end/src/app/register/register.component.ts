import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: Http, private route: Router) { }

  ngOnInit() {
  }

  Signup(f: NgForm) {
    if (f.value.email == "" || f.value.username == "" || f.value.password == "") {
      alert("Please fill in the empty field");
    }
    else if (f.value.checkbox == false) {
      alert("Please indicate that you have read and agree to the Terms of Service");
    }
    else {
      let obj = {
        name: f.value.name,
        email: f.value.email,
        password: f.value.password
      }
      let header = new Headers({ "Content-Type": "application/json" });
      let options = new RequestOptions({ headers: header });

      this.http.post("http://localhost:3000/api/user/new", obj, options)
        .subscribe(
        result => {
          this.route.navigate(['/']);
        },
        error => {
          console.log("Error !");
        }
        );

    }

  }
