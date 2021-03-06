import { Component, OnInit } from '@angular/core';
import {StadService} from '../../services/stad.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-stad',
  templateUrl: './stad.component.html',
  styleUrls: ['./stad.component.scss']
})
export class StadComponent implements OnInit {
  stadList: any;
  showAll = true;
  constructor(public stadService: StadService) { }
ngOnInit(): void {
  this.getAllStad();
   }

  getAllStad(){
this.stadService.getAll()
// tslint:disable-next-line: no-shadowed-variable
.subscribe(( stads: any) =>
    {
      this.stadList = stads;
      console.log(this.stadList);
    },
    err => console.log(err)
            );
        }
        addStad(taskform: NgForm){
          this.stadService.setStad(taskform.value)
          .subscribe(msn => this.getAllStad());
          console.log('entro');
          this.showAll = true;
        }
}

