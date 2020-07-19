import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

export interface IListItem {
  id: number;
  group: string;
  caption: string;
  completed: boolean;
  date?: any;
}

@Injectable({providedIn: 'root'})
export class ListService {
  private list$: Observable<IListItem[]>;

  constructor(private httpClient: HttpClient) {
  }

  initData(): void {
    this.list$ = this.httpClient.get<any>('assets/ToDoList.json')
      .pipe(
        map(data => {
          const list = data.listData;
          return list.map(item => {
            return {
              id: item.id,
              group: item.group,
              caption: item.caption,
              completed: item.completed,
              date: item.date
            };
          });
        })
      );
  }

  getItems(defaultGroup: string, group?: string): Observable<IListItem[]> {
    if (group && group !== defaultGroup) {
      return this.list$.pipe(
        map(data => data.filter(item => item.group === group))
      );
    } else {
      return this.list$;
    }
  }

  getGroups(): Observable<string[]> {
    return this.list$.pipe(
      map(data => {
        return [...new Set(data.map(item => item.group))];
      })
    );
  }

  onChange(id: number): void {
    this.list$.pipe(
      map(data => data.find(item => item.id === id)),
      tap(item => item.completed = !item.completed)
    );
  }

  remove(id: number): void {
    this.list$ = this.list$.pipe(
      map(item => item.filter(element => element.id !== id))
    );
  }
}
