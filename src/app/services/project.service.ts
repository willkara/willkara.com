import { Injectable } from '@angular/core';
import API from '@aws-amplify/api';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  apiName = 'projectListAPI';
  path = '/projects';

  constructor() {}

  getProjects(): void {
    console.log('qqqqqqqqqqq');
  }
}