import { Context } from './state/context';
import { ConcreteStateA } from './state/concreteStateA';
import { ConcreteStateB } from './state/concreteStateB';

const context = new Context(new ConcreteStateA());
context.request();

context.setState(new ConcreteStateB());
context.request();
