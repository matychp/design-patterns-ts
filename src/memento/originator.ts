import { Memento } from './memento';

class Originator {
  private _content: string;

  constructor() {
    this._content = '';
  }

  public set content(newContent: string) {
    this._content = newContent;
  }

  public get content(): string {
    return this._content;
  }

  public createState() {
    return new Memento(this._content);
  }

  public restore(memento: Memento) {
    this._content = memento.content;
  }
}

export { Originator };
