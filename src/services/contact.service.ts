import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, ObservableInput } from 'rxjs';
import { Subscription } from 'rxjs';
import { storageService } from '../services/storageService.js';
import { of } from 'rxjs';
import { Contact } from '../models/weather.model';

const CONTACTS_URL = '//localhost:3030/api/contact/';
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  //mock the server
  private _contactsDb: Contact[];

  private _contacts$ = new BehaviorSubject<Contact[]>([]);
  public contacts$ = this._contacts$.asObservable();
  constructor(private http: HttpClient) {}

  public getContactById(id: string) {
    return this.http.get<any>(CONTACTS_URL + id);
  }

  public deleteContact(id: string) {
    return this.http.delete<any>(CONTACTS_URL + id).subscribe((res) => {
      console.log('res:', res);
    });
  }

  public saveContact(contact: Contact) {
    return contact._id
      ? this.http.put<any>(CONTACTS_URL + contact._id, contact)
      : this.http.post<any>(CONTACTS_URL, contact);
  }

  public getEmptyContact() {
    return { name: '', phone: '', email: '' };
  }
}
