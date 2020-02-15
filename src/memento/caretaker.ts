import { Memento } from './memento';

class Caretaker {
  private mementos: Memento[];

  constructor() {
    this.mementos = [];
  }

  public push(memento: Memento) {
    this.mementos.push(memento);
  }

  public pop() {
    let lastMemento = this.mementos.pop();
    if (lastMemento === undefined) {
      throw new Error("There isn't a previous memento");
    }
    return lastMemento;
  }
}

export { Caretaker };
