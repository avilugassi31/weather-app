import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from '../models/weather.model';
import { ContactService } from './contact.service';
@Injectable({
  providedIn: 'root',
})
export class ContactResolver implements Resolve<Observable<Contact>> {
  constructor(private ContactService: ContactService) {}

  resolve(route: ActivatedRouteSnapshot) {
    console.log('route', route);
    const { id } = route.params;
    return this.ContactService.getContactById(id);
  }
}
