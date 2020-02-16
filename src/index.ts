import { Originator } from './memento/originator';
import { Caretaker } from './memento/caretaker';

const originator = new Originator();
const caretaker = new Caretaker();

try {
  originator.content = 'Chevrolet';
  caretaker.push(originator.createState());
  originator.content = 'Ford';
  caretaker.push(originator.createState());
  originator.content = 'Nissan';
  originator.restore(caretaker.pop());
  console.log(originator.content);
  originator.restore(caretaker.pop());
  console.log(originator.content);
  originator.restore(caretaker.pop());
  console.log(originator.content);
  console.log(originator.content);
  console.log(originator.content);
} catch (error) {
  console.log(error);
}
