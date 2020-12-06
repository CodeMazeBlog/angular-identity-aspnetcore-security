import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesComponent } from './companies/companies.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CompaniesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'companies', component: CompaniesComponent }
    ])
  ]
})
export class CompanyModule { }
