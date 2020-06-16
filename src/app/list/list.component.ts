import {Component, OnInit} from '@angular/core';
import {ListService} from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  constructor(public listService: ListService) {
  }

  ngOnInit(): void {
  }

  onChange(id: number): void {
    this.listService.onChange(id);
  }

  removeItem(id: number): void {
    this.listService.remove(id);
  }
}
