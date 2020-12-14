import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forbidden',
  templateUrl: './forbidden.component.html',
  styleUrls: ['./forbidden.component.css']
})
export class ForbiddenComponent implements OnInit {

  private _returnUrl: string;

  constructor( private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
  }

  public navigateToLogin = () => {
    this._router.navigate(['/authentication/login'], { queryParams: { returnUrl: this._returnUrl }});
  }
}
