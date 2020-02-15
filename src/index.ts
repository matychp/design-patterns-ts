import { Originator } from './memento/originator';
import { Caretaker } from './memento/caretaker';

const originator = new Originator();
const caretaker = new Caretaker();
let previousContent;

try {
  originator.content = 'Chevrolet';
  caretaker.push(originator.createState());
  originator.content = 'Ford';
  caretaker.push(originator.createState());
  originator.content = 'Nissan';
  previousContent = caretaker.pop();
  if (previousContent !== undefined) {
    originator.restore(previousContent);
  }
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
