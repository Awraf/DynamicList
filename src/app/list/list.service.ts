import {Injectable} from '@angular/core';

export interface IListItem {
  id: number;
  group: string;
  caption: string;
  completed: boolean;
  date?: any;
}

@Injectable({providedIn: 'root'})
export class ListService {
  public list: IListItem[] = [
    {id: 1, group: 'shop', caption: 'Item1', completed: false, date: new Date()},
    {id: 2, group: 'remove', caption: 'Item2', completed: true},
    {id: 3, group: 'shop', caption: 'Item3', completed: false, date: new Date()},
    {id: 4, group: 'obsoleted', caption: 'Item4', completed: false, date: new Date()},
  ];

  getGroups(): string[] {
    const groups = this.list.map(item => item.group);
    return [...new Set(groups)];
  }


  onChange(id: number): void {
    const indx = this.list.findIndex(x => x.id === id);
    this.list[indx].completed = !this.list[indx].completed;
  }

  remove(id: number): void {
    this.list = this.list.filter(l => l.id !== id);
  }
}
