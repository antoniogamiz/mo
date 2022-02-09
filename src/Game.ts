import { Gesture } from "./entities/Gestures";

const { Rock, Paper, Scissors } = Gesture;

export function computeWinner(gesture1: Gesture, gesture2: Gesture) {
    if (gesture1 === Rock && gesture2 === Scissors || gesture2 === Rock && gesture1 === Scissors)
        return Rock;
    if (gesture1 === Scissors && gesture2 === Paper || gesture2 === Paper && gesture1 === Scissors)
        return Scissors;
    if (gesture1 === Paper && gesture2 === Rock || gesture2 === Paper && gesture1 === Rock)
        return Paper;
}