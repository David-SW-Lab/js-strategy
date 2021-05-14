import { quack, swim } from '../duck';

export default function newDuck() {
  const display = () => {
    console.log('new duck display');
  };

  return {
    quack() {
      return quack();
    },
    swim() {
      return swim();
    },
    display() {
      return display();
    }
  };
}
