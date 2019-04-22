import { Injectable } from '@angular/core';
import { CanActivate,Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { GetnameService } from '../getname.service';


@Injectable({
  providedIn: 'root'
})
export class EmployeedetailsService  implements CanActivate,CanActivateChild{
  
  constructor(private getnameService:GetnameService,private _router:Router) { }
  private (_router:Router){

  }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean
  {
  const employeedetails=this.getnameService.getEmployeeById(+route.paramMap.get('id'));
   // return true;
   if(employeedetails==true){
     return true;
   }
   else{
     this._router.navigate(['notFound']);
     return false;
   }

  }
  
 canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean 
  {
    return true;
  }
}
