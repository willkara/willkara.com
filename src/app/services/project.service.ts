import { Injectable } from '@angular/core';
import API from '@aws-amplify/api';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  apiName = 'homeAPI';
  path = '/projects';
  myInit = {
    // OPTIONAL
    headers: {}, // OPTIONAL
    response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
  };

  constructor() {}

  getProjects(): void {
    console.log('qqqqqqqqqqq');
    API.get(this.apiName, this.path, this.myInit)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
}
