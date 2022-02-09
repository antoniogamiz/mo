import { Gesture } from "./entities/Gestures";
import { computeWinner } from "./Game";

const { Rock, Scissors } = Gesture;

test('Rock beats scissors', () => {
    const winningGesture = computeWinner(Rock, Scissors);

    expect(winningGesture).toBe(Rock);
});