import { Injectable } from '@angular/core';
import API from '@aws-amplify/api';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  apiName = 'homeAPI';
  path = '/contacts';

  constructor() {}

  sendContact(): void {
    console.log('wwwwwwwwwwwwww');
  }
}
