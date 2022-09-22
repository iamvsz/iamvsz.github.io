import { Component, OnInit } from '@angular/core';
import { LongUrl } from './models/long-url.model';
import { ShortUrl } from './models/short-url.model';
import { BitlyService } from './services/bitly.service';
import {Clipboard} from '@angular/cdk/clipboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'ShorTen';
  longURL!: LongUrl;
  URL = new LongUrl();
  shortURL: ShortUrl = new ShortUrl;

  constructor(private bitly: BitlyService, private clipboard: Clipboard) { }

  shortenUrl() {
    this.bitly.shortenUrl(this.URL).subscribe(data => {
      this.shortURL.link = data.link;
      this.shortURL.long_url = data.long_url;
    })
  }
}
