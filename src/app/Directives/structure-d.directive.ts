import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appStructureD]'
})
export class StructureDDirective {

  @Input() set appStructureD(condition: boolean) {
    if(!condition) {
      //Показать элементы
      this.viewContainer.createEmbeddedView(this.templateRef)
    } else {
      //Скрыть элементы
      this.viewContainer.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {

  }

}
