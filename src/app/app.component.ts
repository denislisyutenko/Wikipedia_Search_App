import {Component} from '@angular/core';
import {WikiService} from './wiki.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: any[] = [];

  constructor(private wiki: WikiService) {
  }

  search(text: string): void {
    this.wiki.searchWiki(text).subscribe(res => {
      this.items = res;
    });
  }
}
