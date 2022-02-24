import { Directive } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appDuplicateValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: DuplicateValidatorDirective,
    multi: true
  }]
})
export class DuplicateValidatorDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {

    let seen = new Set();
    let hasDuplicate = Object.values(control?.value).some(function (value: any) {
      return ((seen.size === seen.add(value.answer).size) && (value.answer !== ""));
    });

    if (hasDuplicate)
      return { 'checkDuplicateInput': true };

    return null;
  }

}
