export enum DoorState {
    OPEN,
    CLOSED
}

export class Door {
    constructor(public state: DoorState = DoorState.CLOSED) { }
    toggle() {
        this.state = this.state === DoorState.CLOSED ? DoorState.OPEN : DoorState.CLOSED;
    }
}

export function createDoors(size: number): Door[] {
    const doors = [];
    for (let i = 0; i < size; i++)
        doors.push(new Door());
    return doors;
}

export function play(size: number) {
    const doors: Door[] = createDoors(size);
    for (let step = 1; step < size; step++) {
        for (let i = step - 1; i < size; i += step) {
            doors[i].toggle()
        }
    }
    return doors;
}


export function printDoors(doors: Door[]) {
    return doors.map(printDoor).join('');
}

export function printDoor(door: Door) {
    if (door.state === DoorState.CLOSED) return '#';
    return '@'
}

// const doors = play(100);
// console.log(printDoors(doors));

