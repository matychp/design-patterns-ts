import { State } from './state';

class ConcreteStateA implements State {
  handle(): void {
    console.log('Handle concrete state A');
  }
}

export { ConcreteStateA };
