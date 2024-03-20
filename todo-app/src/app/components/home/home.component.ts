import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { EventsItems } from '../../EventsManagerItems';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
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
]
displayedColumns: string[] =['id','Title','Description','Location','Category','Actions']; 
c(){
  console.log("create")
};
e(id:number){console.log("edit",id)};
ds(id:number){console.log("details",id)};
dl(id:number){console.log("delete",id)};

}
 
