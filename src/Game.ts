import { Gesture } from "./entities/Gestures";

const { Rock, Scissors } = Gesture;

export function computeWinner(gesture1: Gesture, gesture2: Gesture) {
    if (gesture1 === Rock && gesture2 === Scissors)
        return Rock;
}