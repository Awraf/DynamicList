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

  private updateList(): void {
    if ( this.selectedGroup &&  this.selectedGroup !== 'all') {
      this.list = this.listService.list.filter(item => item.group ===  this.selectedGroup);
    } else {
      this.list = this.listService.list;
    }
  }

  constructor(private listService: ListService) {
    this.updateList();
    this.groups = this.listService.getGroups();
  }

  ngOnInit(): void {
    this.selectedGroup = 'all';
  }

  onChange(id: number): void {
    this.listService.onChange(id);
    this.list = this.listService.list;
  }

  onChangeGroup() {
      this.updateList();
  }

  removeItem(id: number): void {
    this.listService.remove(id);
    this.updateList();
  }
}
