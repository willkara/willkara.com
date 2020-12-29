import { Injectable } from '@angular/core';
import API from '@aws-amplify/api';
import { Observable } from 'rxjs';
import { Project } from './models/project';

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

  getProjects(): Promise<any> {
    return API.get(this.apiName, this.path, this.myInit);
  }
}
