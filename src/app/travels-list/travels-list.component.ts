import { Component, OnInit } from '@angular/core';
import { TravelsService } from "../shared/travels.service";

@Component({
  selector: 'app-travels-list',
  templateUrl: './travels-list.component.html',
  styleUrls: ['./travels-list.component.sass']
})
export class TravelsListComponent implements OnInit {
  travelsArray = [];
  showDeletedMessage: boolean;
  searchText: string = "";

  constructor(private travelsService: TravelsService) { }

  ngOnInit() {
    this.travelsService.getTravels().subscribe(
      (list) => {
        this.travelsArray = list.map((item) => {
          return {
            $key: item.key,
            ...item.payload.val()
          }
        })
      });
  }

  onDelete($key) {
    if (confirm("Are you sure you want to delete this record?")) {
      this.travelsService.deleteTravels($key);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000)
    }
  }

  filterCondition(travels) {
    return travels.city.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }
}
