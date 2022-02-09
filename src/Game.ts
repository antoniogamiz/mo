import { Gesture } from "./entities/Gestures";

const { Rock, Paper, Scissors } = Gesture;

export function computeWinner(gesture1: Gesture, gesture2: Gesture) {
    const gestures = [gesture1, gesture2].sort();

    if (areEquals(gestures, [Rock, Scissors]))
        return Rock;
    if (areEquals(gestures, [Scissors, Paper]))
        return Scissors;
    if (areEquals(gestures, [Paper, Rock]))
        return Paper;

    return null;
}

const areEquals = (array1, array2) => array2.filter(e => !array1.includes(e)).length === 0;