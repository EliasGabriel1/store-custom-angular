// data.service.ts
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { categoria, menu, vitrine } from './api';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  private itemsSubject: Subject<string[]> = new Subject<string[]>();

  constructor() {}

  getMenu(): string[] {
    return menu;
  }

  getCategoria(): string[] {
    return categoria;
  }

  getVitrine(): string[] {
    return vitrine;
  }

  getItems(): string[] {
    return this.items;
  }

  addItem(item: string): void {
    this.items.push(item);
    this.itemsSubject.next(this.items);
  }

  getItemsObservable(): Observable<string[]> {
    return this.itemsSubject.asObservable();
  }
}
