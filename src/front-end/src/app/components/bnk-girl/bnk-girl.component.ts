import { Component, OnInit, Input } from '@angular/core';
import { Member } from 'src/app/models/member';

@Component({
  selector: 'app-bnk-girl',
  templateUrl: './bnk-girl.component.html',
  styleUrls: ['./bnk-girl.component.scss']
})
export class BnkGirlComponent implements OnInit {

  @Input() member: Member;
  constructor() { }

  ngOnInit(): void {
  }

}
