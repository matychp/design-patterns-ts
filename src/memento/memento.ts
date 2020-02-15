class Memento {
  constructor(private _content: string) {}

  public get content(): string {
    return this._content;
  }
}

export { Memento };
