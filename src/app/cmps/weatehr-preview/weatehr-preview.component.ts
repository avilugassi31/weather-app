import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'weather-preview',
  templateUrl: './weatehr-preview.component.html',
  styleUrls: ['./weatehr-preview.component.scss'],
})
export class WeatehrPreviewComponent implements OnInit {
  @Input() location: any;
  constructor() {}

  ngOnInit(): void {
    console.log(this.location);
  }
}
