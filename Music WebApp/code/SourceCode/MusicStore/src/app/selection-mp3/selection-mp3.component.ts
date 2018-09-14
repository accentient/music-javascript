import {  Component, OnInit } from '@angular/core';
import {CheckboxModule} from 'primeng/checkbox';


@Component({
  selector: 'app-selection-mp3',
  templateUrl: './selection-mp3.component.html',
  styleUrls: ['./selection-mp3.component.scss']
})
export class SelectionMp3Component implements OnInit {

  constructor() { }

 baseTracks:any =  [
  {
    "artist": "Britney Spears",
    "track":"Oops I did it again",
    "genre": "Pop",
    "image":"assets/albumOops.jpg"
  },
{
    "artist": "Justin Timberlake",
    "track":"Cry Me A River",
    "genre": "Pop",
    "image":"assets/albumJustified.jpg"
  },
  {
    "artist": "Tim McGraw",
    "track":"I Need You",
    "genre": "Western",
    "image":"assets/albumLetItGo.jpg"
  },
  {
    "artist": "Willie Nelson",
    "track":"Whiskey River",
    "genre": "Western",
    "image":"assets/albumShotgunWillie.jpg"
  },
  {
    "artist": "Guns N' Roses",
    "track":"Paradise City",
    "genre": "Rock",
    "image":"assets/albumAppetiteForDestruction.jpg"
  },
  {
    "artist": "AC/DC",
    "track":"Thunderstruck",
    "genre": "Rock",
    "image":"assets/albumTheRazorsEdge.jpg"
  },
  {
    "artist": "Sungha Jung",
    "track":"Merry Go Round of Life",
    "genre": "Classical",
    "image":"assets/albumHowlSoundtrack.jpg"
  },
  {
    "artist": "Wolfgang Amadeus Mozart",
    "track":"The Magic Flute",
    "genre": "Classical",
    "image":"assets/albumBestOfMozart.jpg"
  }
];

  genres:any = [
    {
      genre:"Western", 
      selected: false
    },
    {
      genre:"Pop", 
      selected: false
    },
    {
      genre:"Classical", 
      selected: false
    },
    {
      genre:"Rock", 
      selected: false
    },

                ];

  tracks: any [];
  

  ngOnInit() {
    this.tracks = this.baseTracks;
  }

  onClickGenre(genre:string):void{
    this.tracks = this.baseTracks.filter(x=>{
      if (x.genre === genre){
        return x;
      }
    })
    console.log(this.tracks);
  }

}
