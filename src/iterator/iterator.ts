interface Iterator<T> {
  hasNext(): boolean;
  next(): void;
  getCurrentElement(): T;
}

export { Iterator };
