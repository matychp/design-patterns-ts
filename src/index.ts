import { ArrayAggregate } from './iterator/arrayAggregate';

const weasleys = [
  'Arthur',
  'Molly',
  'Bill',
  'Charlie',
  'Percy',
  'Fred',
  'George',
  'Ron',
  'Ginny',
];

const arrayAggregate = new ArrayAggregate(weasleys);

const arrayIterator = arrayAggregate.createIterator();

while (arrayIterator.hasNext()) {
  const currentElement = arrayIterator.getCurrentElement();
  console.log(`${currentElement} Weasley`);
  arrayIterator.next();
}
