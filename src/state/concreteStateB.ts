import { State } from './state';

class ConcreteStateB implements State {
  handle(): void {
    console.log('Handle concrete state B');
  }
}

export { ConcreteStateB };
