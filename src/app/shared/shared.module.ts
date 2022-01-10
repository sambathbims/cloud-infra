import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FiltersComponent } from './components/filters/filters.component';
import { HeadersComponent } from './components/headers/headers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './components/loader/loader.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'

@NgModule({
  declarations: [FiltersComponent, HeadersComponent, LoaderComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxSliderModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FiltersComponent, 
    HeadersComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
