import {Component, OnInit} from '@angular/core';
import {IListItem, ListService} from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public list: IListItem[];
  public groups: string[];
  public selectedGroup: string;

  private updateList() {
    this.list = this.listService.getItems(this.selectedGroup);
  }

  constructor(private listService: ListService) {
    this.groups = this.listService.getGroups();
    this.list = this.listService.getItems();
  }

  ngOnInit(): void {
    this.selectedGroup = 'all';
  }

  onChange(id: number): void {
    this.listService.onChange(id);
  }

  onChangeGroup() {
      this.updateList();
  }

  removeItem(id: number): void {
    this.listService.remove(id);
    this.updateList();
  }
}
