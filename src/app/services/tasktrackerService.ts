import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class TaskTrackerService {

  private API_URL = 'http://api.yogeshjadhav.website/';
  constructor(private http: HttpClient) {  }

  getTaskInfo(task_name) {
    var url = this.API_URL + 'tasktracker/fetch/info/' + task_name;
    var res = this.http.get(url);
    return res;
  }

  updateTaskDone(task_name, person_name, next_person_name) {
    var url = this.API_URL + 'tasktracker/update/task';
    const formData: FormData = new FormData();
    formData.append('taskName', task_name);
    formData.append('currTurnName', person_name);
    formData.append('nextTurnName', next_person_name);

    var res = this.http.post<FormData>(url, formData);
    return res;
  }

}
