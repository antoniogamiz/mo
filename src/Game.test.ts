import { Gesture } from "./entities/Gestures";
import { computeWinner } from "./Game";

const { Rock, Paper, Scissors } = Gesture;

test('Rock - Scissors -> Rock', () => {
    const winningGesture = computeWinner(Rock, Scissors);

    expect(winningGesture).toBe(Rock);
});

test('Scissors - Rock -> Rock', () => {
    const winningGesture = computeWinner(Scissors, Rock);

    expect(winningGesture).toBe(Rock);
});

test('Scissors - Paper -> Scissors', () => {
    const winningGesture = computeWinner(Scissors, Paper);

    expect(winningGesture).toBe(Scissors);
});

test('Paper - Scissors -> Scissors', () => {
    const winningGesture = computeWinner(Scissors, Paper);

    expect(winningGesture).toBe(Scissors);
});

test('Paper - Rock -> Paper', () => {
    const winningGesture = computeWinner(Paper, Rock);

    expect(winningGesture).toBe(Paper);
});

test('Rock - Paper -> Paper', () => {
    const winningGesture = computeWinner(Rock, Paper);

    expect(winningGesture).toBe(Paper);
});

test('Rock - Rock -> Draw', () => {
    const winningGesture = computeWinner(Rock, Rock);

    expect(winningGesture).toBe(null);
});

test('Scissors - Scissors -> Draw', () => {
    const winningGesture = computeWinner(Scissors, Scissors);

    expect(winningGesture).toBe(null);
});

test('Paper - Paper -> Draw', () => {
    const winningGesture = computeWinner(Paper, Paper);

    expect(winningGesture).toBe(null);
});