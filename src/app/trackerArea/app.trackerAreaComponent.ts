import {Router, ActivatedRoute, Params} from '@angular/router';
import {OnInit, Component} from '@angular/core';
import { TaskTrackerService } from '../services/tasktrackerService'


@Component({
  selector: 'app-trackerArea',
  templateUrl: './trackerArea.html',
  styleUrls: ['../app.component.css']
})

export class trackerAreaComponent implements OnInit {
  task_name = 'Task Name'
  content_text = 'Tracker Area'
  person_name = "Person Name"
  next_person_name = "Next Person Name"

  constructor(private activatedRoute: ActivatedRoute, private trackerService: TaskTrackerService) {
    var url = activatedRoute.snapshot['_routerState'].url;
    var urlParts = url.split("/")
    this.task_name = urlParts[2]
    this.content_text = this.task_name + " Tracker";
  }

  ngOnInit(){
    this.getInfo();
  };


  getInfo() {
    this.trackerService.getTaskInfo(this.task_name)
      .subscribe((data: any) => {
        this.parseData(data);
      });
  };


  parseData(res) {
    if(!res.status) {
      window.alert(res.response);
      return;
    }

    let obj = JSON.parse(res.response);
    this.person_name = obj.currTurnName;
    this.next_person_name = obj.nextTurnName;
  }


  onDoneClick() {
    this.trackerService.updateTaskDone(this.task_name, this.person_name, this.next_person_name)
      .subscribe((data: any) => {
        this.parseData(data);
      });
  }





}
