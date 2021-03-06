import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { BnkService } from 'src/app/services/bnk.service';

@Component({
  selector: 'app-bnk-girl-list',
  templateUrl: './bnk-girl-list.component.html',
  styleUrls: ['./bnk-girl-list.component.scss']
})
export class BnkGirlListComponent implements OnInit {

  members: Member[];
  constructor(private bnkService: BnkService) { }

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers() {
    this.bnkService.list().subscribe((response: Member[])=>{
      this.members = response;
    });
  }

}
