import { State } from './state';

class Context {
  private state: State;

  constructor(initialState: State) {
    this.state = initialState;
  }

  public request() {
    this.state.handle();
  }

  public setState(newState: State) {
    this.state = newState;
  }
}

export { Context };
