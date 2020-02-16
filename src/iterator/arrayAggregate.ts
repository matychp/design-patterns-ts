import { Aggregate } from './aggregate';
import { Iterator } from './iterator';

class ArrayAggregate<T> implements Aggregate<T> {
  private _items: T[] = [];

  constructor(items: T[]) {
    this._items = [...items];
  }

  createIterator(): Iterator<T> {
    return new ArrayIterator<T>(this._items);
  }
}

class ArrayIterator<T> implements Iterator<T> {
  private index: number = 0;
  private _items: T[] = [];

  constructor(items: T[]) {
    this._items = [...items];
  }

  hasNext(): boolean {
    return this.index < this._items.length;
  }

  next(): void {
    this.index++;
  }

  getCurrentElement(): T {
    return this._items[this.index];
  }
}

export { ArrayAggregate };
