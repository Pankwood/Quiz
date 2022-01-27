import { Directive, Input } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS, ValidationErrors } from '@angular/forms';


@Directive({
  selector: '[appCheckValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CheckValidatorDirective,
    multi: true
  }]
})
export class CheckValidatorDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {

    let isValid = Boolean(Object.values(control?.value)?.find((a: any) => a.check === "true"));
    if (!isValid)
      return { 'checkInvalid': true };

    return null;
  }

}
