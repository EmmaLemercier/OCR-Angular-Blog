import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title : 'Mon premier post',
      content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, accumsan sit cursus. Lorem ipsum dolor sit ing elit.',
      loveIts : 0,
      createdAt : new Date()
    },
    {
      title : 'Mon deuxième post',
      content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, accumsan sit cursus. Lorem ipsum dolor sit ing elit.',
      loveIts : 0,
      createdAt : new Date()
    },
    {
      title : 'Mon troisième post',
      content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, accumsan sit cursus. Lorem ipsum dolor sit ing elit.',
      loveIts : 0,
      createdAt : new Date()
    }
  ];


}
