import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule} from '@angular/material/button'
import { EventsItems } from './EventsManagerItems';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatButtonModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Events App';
  itemslist:EventsItems[]=[{
    "id": 1,
    "Title": "freshman party",
    "Description": "the first party of new academic tear.",
    "Location":"WIUT ATB backyard",
    "CategoryId": 1,
    "Category": {
      "id": 1,
      "Name": "Party"
    }
  },
  {
    "id": 2,
    "Title": "time management workshop",
    "Description": "time management workshop by Evgeniy Tsoy.",
    "Location":"SHB student zone",
    "CategoryId": 2,
    "Category": {
      "id": 2,
      "Name": "Workshop"
    }
  },
  {
    "id": 3,
    "Title": "new year ball",
    "Description": "magical new year ball with WIUT.",
    "Location":"osiyo grand hall",
    "CategoryId": 1,
    "Category": {
      "id": 1,
      "Name": "Party"
    }
  },
  {
    "id": 4,
    "Title": "international day",
    "Description": "international day, cultural exchange at Wiut.",
    "Location":"lyceum hall",
    "CategoryId": 3,
    "Category": {
      "id": 3,
      "Name": "Social engagement"
    }
  },
  {
    "id": 5,
    "Title": "guest lecture",
    "Description": "lecture by Shateni.",
    "Location":"lecture hall",
    "CategoryId": 3,
    "Category": {
      "id": 3,
      "Name": "Social engagement"
    }
  },
  {
    "id": 6,
    "Title": "kindness day",
    "Description": "kindness day, by warm heart.",
    "Location":"WIUT",
    "CategoryId": 3,
    "Category": {
      "id": 3,
      "Name": "Social engagement"
    }
  },
  {
    "id": 7,
    "Title": "social workshop",
    "Description": "workshop for all workers at wiut.",
    "CategoryId": 2,
    "Location":"WIUT ATB",
    "Category": {
      "id": 2,
      "Name": "Workshop"
    }
  },
  {
    "id": 8,
    "Title": "last party",
    "Description": "last party of the year.",
    "Location":"IB backyard",
    "CategoryId": 1,
    "Category": {
      "id": 1,
      "Name": "Party"
    }
  }
]}