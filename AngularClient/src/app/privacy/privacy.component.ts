import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../shared/services/repository.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {
  claims: [] = [];

  constructor(private repository: RepositoryService) { }
  
  ngOnInit(): void {
    this.getClaims();
  }
  
  private getClaims = () =>{
    this.repository.getClaims('api/companies/privacy')
    .subscribe(res => {
      this.claims = res as [];
    })
  }
}
