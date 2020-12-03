import { Company } from './../../_interfaces/company.model';
import { RepositoryService } from './../../shared/services/repository.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  public companies: Company[];

  constructor(private repository: RepositoryService) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  public getCompanies = () => {
    const apiAddress: string = "api/companies";
    this.repository.getData(apiAddress)
    .subscribe(res => {
      this.companies = res as Company[];
    })
  }
}
