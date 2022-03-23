import { Component, Injector, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { inputUUID } from 'src/app/core/utils/input-uuid';
import { ControlValueAccessorConnectorComponent } from '../control-value-accessor-connector';

type InputType = 'color' | 'date' | 'datetime-local' | 'month' | 'number' | 'text' | 'time' | 'url' | 'week' | 'email';

const masks = {
  cpf: '000.000.000-00',
  cnpj: '00.000.000/0000-00',
  ccExpiryDate: '00/0000',
  ccSecurityCode: '0009',
  cnh: '00000000000',
  rg: '00.000.000-0',
  date: '00/00/0000',
  licensePlate: 'SSS 0A00',
  cellphone: '(00) 00000-0000'
};

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true
    }
  ]
})
export class InputComponent extends ControlValueAccessorConnectorComponent {
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() type: InputType = 'text';
  @Input() maxlength: number = 9999;
  @Input() value: any;
  @Input() disabled: boolean = false;
  @Input() set mask(value: keyof typeof masks) {
    this.useMask = masks[value];
  }

  id = inputUUID();
  useMask: string = '';

  constructor(injector: Injector) {
    super(injector);
  }
}
