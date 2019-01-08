import { Injectable, Injector, ComponentFactoryResolver, EmbeddedViewRef, ApplicationRef, ComponentRef, NgZone } from '@angular/core';
import { EmbeddedTemplate } from '@angular/core/src/render3/definition_interfaces';
import * as $ from 'jquery';

@Injectable()
export class SharedService {

  private _componentRef: ComponentRef<any>;

  constructor(private _componentFactoryResolver: ComponentFactoryResolver,
    private _appRef: ApplicationRef,
    private _injector: Injector,
    private zone: NgZone
  ) { }

  appendComponentToModal(component: any, data: any, onInit?: (component: any) => void) {
    // this.removeComponentFromModal();

    // const parentEle = document.getElementById(data.parentEle);
    // check here if child exists

    // Appending the component html in parent modal container

    this.zone.run(() => {
      try {

        const parentEle = document.getElementById(data.parentEle);

        // Create a component reference from the component
        this._componentRef = this._componentFactoryResolver
          .resolveComponentFactory(component)
          .create(this._injector);

        // tslint:disable-next-line:no-unused-expression
        onInit && onInit(this._componentRef.instance);

        // passing data to the component instance
        // this._componentRef.instance.parentKPIList = data.parentKPIList;
        this._componentRef.instance.MRN = data.MRN;
        this._componentRef.instance.metIndicator = data.metIndicator;
        this._componentRef.instance._selectedSentenceBuilderOptions = data._selectedSentenceBuilderOptions;
        // Attach component to the appRef so that it's inside the ng component tree
        this._appRef.attachView(this._componentRef.hostView);

        // Get the DOM element from component
        const domEle = (this._componentRef.hostView as EmbeddedViewRef<any>)
          .rootNodes[0] as HTMLElement;


        if ($('#' + data.parentEle).children().length === 0) {
          parentEle.appendChild(domEle);
        } else {
          parentEle.innerHTML = '';
          parentEle.appendChild(domEle);
        }

        parentEle.appendChild(domEle);

      } catch (e) {
        throw e;
      }
    }


    );




  }

  // removeComponentFromModal() {
  //   if (this._componentRef) {
  //     this._appRef.detachView(this._componentRef.hostView);
  //     this._componentRef.destroy();
  //   }
  // }

}
