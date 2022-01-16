import { Component, OnInit, Output, EventEmitter, Input, AfterViewChecked } from '@angular/core';
import * as filterConfig from '../../config/filters.config';
import { Options } from '@angular-slider/ngx-slider';
import { ChangeDetectorRef } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit, AfterViewChecked {

  @Input() categories;
  filterTypes = filterConfig.filterTypes;
  filterForm: FormGroup;
  minValue = 0;
  maxValue = 100;
  @Output() filterData: EventEmitter<any> = new EventEmitter();

  constructor(private cdRef: ChangeDetectorRef, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.filterForm = this.formBuilder?.group({});
    this.categories?.map((category) => {
      switch (category?.type) {
        case this.filterTypes?.checkbox:
          this.filterForm?.addControl(category?.key, new FormArray([]));
          break;
        case this.filterTypes.range:
          this.filterForm?.addControl(category?.key, new FormControl(null));
          this.filterForm?.addControl(category?.key1, new FormControl(null));
          this.minValue = category?.min;
          this.maxValue = category?.max;
          break;
        default:
          this.filterForm?.addControl(category?.key, new FormControl(null));
          break;
      }
    });
  }

  ngAfterViewChecked() {
    this.cdRef?.detectChanges();
  }


  sliderOptions(data): Options {
    return {
      showTicksValues: true,
      floor: 0,
      ceil: data[data.length - 1].value,
      stepsArray: data.map((dt) => {
        return {
          value: dt.value,
          legend: dt.unit
        };
      })
    };
  }

  onCheckBoxSelect(event, data) {
    const formArray: FormArray = this.filterForm?.get(data.key) as FormArray;
    if (event?.target?.checked) {
      formArray?.push(new FormControl(event.target.value));
    } else {
      const index = formArray?.value.findIndex(val => val === event.target.value);
      if (index !== -1) {
        formArray?.removeAt(index);
      }
    }
  }

  valueChange(event, data) {
    this.filterForm?.get(data.key).patchValue(event * 1024);
  }

  highValueChange(event, data) {
    this.filterForm?.get(data.key1).patchValue(event * 1024);
  }

  onSubmit() {
    this.filterData?.emit(this.filterForm?.value);
  }
}
