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

test('Paper beats rock', () => {
    const winningGesture = computeWinner(Paper, Rock);

    expect(winningGesture).toBe(Paper);
});

test('Rock looses versus paper', () => {
    const winningGesture = computeWinner(Rock, Paper);

    expect(winningGesture).toBe(Paper);
});

test('Rock looses versus Rock', () => {
    const winningGesture = computeWinner(Rock, Rock);

    expect(winningGesture).toBe(null);
});

test('Scissors draws versus Scissors', () => {
    const winningGesture = computeWinner(Scissors, Scissors);

    expect(winningGesture).toBe(null);
});

test('Paper draws versus Paper', () => {
    const winningGesture = computeWinner(Paper, Paper);

    expect(winningGesture).toBe(null);
});