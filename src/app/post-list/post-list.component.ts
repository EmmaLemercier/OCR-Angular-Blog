import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() createdAt: string;
  @Input() loveIts: number;
  constructor() { }

  ngOnInit() {
  }
  onAjouter() {
    this.loveIts++;
  }

  onSoustraire(){
    this.loveIts--;
  }

  getColor() {
    if (this.loveIts > 0) {
      return 'green';
    } else if (this.loveIts < 0){
      return 'red';
    }
  }
}
