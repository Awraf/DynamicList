import {Component, OnInit} from '@angular/core';
import {IListItem, ListService} from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  private readonly DEFAULT_SELECTED_GROUP = 'all';

  public list: IListItem[];
  public groups: string[];
  public selectedGroup: string;

  private updateList() {
    this.listService.getItems(this.DEFAULT_SELECTED_GROUP, this.selectedGroup)
      .subscribe(list => this.list = list);
  }

  constructor(private listService: ListService) {
    this.list = [];
    this.groups = [];
  }

  ngOnInit(): void {
    this.listService.initData();
    this.listService.getGroups()
      .subscribe(groups => {
        this.groups = groups;
      });
    this.updateList();
    this.selectedGroup = this.DEFAULT_SELECTED_GROUP;
  }

  onChange(id: number): void {
    this.listService.onChange(id);
    const element = this.list.find(item => item.id === id);
    if (element) {
      element.completed = !element.completed;
    }
  }

  onChangeGroup() {
    this.updateList();
  }

  removeItem(id: number): void {
    this.listService.remove(id);
    this.updateList();
  }
}
