import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public hours: Date[] = [];
  public tracks: Track[] = [
    {
      id: 20987,
      title: 'Web'
    },
    {
      id: 15356,
      title: 'Data'
    },
    {
      id: 20988,
      title: 'Cloud'
    },
    {
      id: 20990,
      title: 'Other'
    }
  ]

  constructor() { }

  ngOnInit(): void {
    const year = 2021;
    const month = 10;
    const day = 16;
    const hours2 = [ 
      [9, 0],
      [9, 30],
      [10, 30],
      [11, 30],
      [13, 0],
      [14, 0],
      [15, 0],
      [16, 0],
    ]
    this.hours = hours2.map(h => 
      new Date(year, month-1, day, h[0], h[1])
    );
  }
}

interface Track {
  id: number;
  title: string;
}
