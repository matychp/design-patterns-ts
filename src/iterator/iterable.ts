import { Iterator } from './iterator';

interface Iterable<T> {
  createIterator(): Iterator<T>;
}

export { Iterable };
