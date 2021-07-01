import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {

  @Input() startRating: any = 0;
  stars: Array<number> = [1,2,3,4,5];
  @Output() starRatingToParent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  newStarRating(indexValue: any): void {
    this.startRating = indexValue;
    this.starRatingToParent.emit(this.startRating);
  }

}
