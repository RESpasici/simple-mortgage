import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

enum FlowTypes {
  purchase = 'purchase',
  switch = 'switch',
  refinance = 'refinance',
}
@Component({
  selector: 'app-journey-select',
  templateUrl: './journey-select.component.html',
  styleUrls: ['./journey-select.component.sass']
})
export class JourneySelectComponent {
  public selectScreen: boolean;
  public flowSelect: FlowTypes | undefined;
  public allFlows = FlowTypes;

  selectFlow() {
    if (this.flowSelect) {
      this.selectScreen = false;
    }
  }

  get isPurchaseOrRefinance() {
    return this.flowSelect === FlowTypes.purchase || this.flowSelect === FlowTypes.refinance;
  }

  get isSwitchOrRefinance() {
    return this.flowSelect === FlowTypes.switch || this.flowSelect === FlowTypes.refinance;
  }

  personalDetailsFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    personalNumber: ['', Validators.required],
    birthDate: ['', Validators.required],
  });

  employmentDetailsFormGroup = this._formBuilder.group({
    company: ['', Validators.required],
  });

  timeFrameFormGroup = this._formBuilder.group({
    timeFrame: ['', Validators.required],
  });

  propertyDetailsFormGroup = this._formBuilder.group({
    purchasePrice: ['', Validators.required],
    downPaymentAmount: [''],
  });

  purchaseDetailsFormGroup = this._formBuilder.group({
    cashTransaction: [''],
    realEstateAgencyEmail: ['', [Validators.required, Validators.email]],
  });

  submit() {
    const finalForm = {
      ...this.personalDetailsFormGroup.value,
      ...this.employmentDetailsFormGroup.value,
      ...this.timeFrameFormGroup.value,
      ...(this.isPurchaseOrRefinance && this.purchaseDetailsFormGroup.value),
      ...(this.isSwitchOrRefinance && this.propertyDetailsFormGroup.value),
    }
    console.log(finalForm);
  }

  stepperOrientation: Observable<StepperOrientation>;

  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) {
    this.selectScreen = true;
    this.flowSelect = undefined;
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 560px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }
}
