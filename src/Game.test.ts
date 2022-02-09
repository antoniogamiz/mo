import { Gesture } from "./entities/Gestures";
import { computeWinner } from "./Game";

const { Rock, Paper, Scissors } = Gesture;

test('Rock beats scissors', () => {
    const winningGesture = computeWinner(Rock, Scissors);

    expect(winningGesture).toBe(Rock);
});

test('Scissors looses versus scissors', () => {
    const winningGesture = computeWinner(Scissors, Rock);

    expect(winningGesture).toBe(Rock);
});

test('Scissors beats paper', () => {
    const winningGesture = computeWinner(Scissors, Paper);

    expect(winningGesture).toBe(Scissors);
});

test('Paper looses versus scissors', () => {
    const winningGesture = computeWinner(Scissors, Paper);

    expect(winningGesture).toBe(Scissors);
});