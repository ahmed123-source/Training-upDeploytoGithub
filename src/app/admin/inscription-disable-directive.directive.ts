import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appInscriptionDisableDirective]'
})
export class InscriptionDisableDirectiveDirective {
  @HostBinding('class.link-is-disabled') status: boolean=false;
  @Input()
  set appInscriptionDisableDirective(value:boolean) {
  this.status = value;
  }
  constructor() { }

}
