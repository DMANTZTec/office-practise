import { Injectable, Injector, ComponentFactoryResolver, EmbeddedViewRef, ApplicationRef, ComponentRef } from '@angular/core';
import { EmbeddedTemplate } from '@angular/core/src/render3/definition_interfaces';

@Injectable()
export class ModalService {

  private _componentRef: ComponentRef<any>;

  constructor(private _componentFactoryResolver: ComponentFactoryResolver,
    private _appRef: ApplicationRef,
    private _injector: Injector
  ) { }

  appendComponentToModal(component: any, data: any) {
    this.removeComponentFromModal();

    // Create a component reference from the component
    this._componentRef = this._componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this._injector);

    // passing data to the component instance
    this._componentRef.instance.data = data;

    // Attach component to the appRef so that it's inside the ng component tree
    this._appRef.attachView(this._componentRef.hostView);

    // Get the DOM element from component
    const domEle = (this._componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    // Appending the component html in parent modal container
    const parentEle = document.getElementById('modal-container');
    parentEle.appendChild(domEle);

  }

  removeComponentFromModal() {
    if (this._componentRef) {
      this._appRef.detachView(this._componentRef.hostView);
      this._componentRef.destroy();
    }
  }

}
