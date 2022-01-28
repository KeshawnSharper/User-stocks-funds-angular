import { Component, OnInit } from '@angular/core';
import { NgxPlaidLinkModule } from "ngx-plaid-link";
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  token = ""
  access_token :any
  constructor(private http:HttpClient,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(){
    this.access_token = this.route.snapshot.paramMap.get('access_token');
    localStorage.setItem("token",this.access_token)
    this.router.navigate(['/home/transactions'])
  }
  // callLink(){

    
  //   const { open, exit, ready } = usePlaidLink(config)
  //   return handler.open()
  // }

}


