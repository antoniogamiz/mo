import { createDoors, Door, DoorState, play, printDoor, printDoors } from "./doors";


test('When creating a new door, its default state is closed', () => {
    const newDoor = new Door();

    expect(newDoor.state).toBe(DoorState.CLOSED);
});

test('When toggling a closed door, its state is changed to open', () => {
    const door = new Door();

    door.toggle();

    expect(door.state).toBe(DoorState.OPEN);
});

test('When toggling an open door, its state is changed to closed', () => {
    const door = new Door();
    door.toggle();

    door.toggle();

    expect(door.state).toBe(DoorState.CLOSED);
});

test('When creating the door list, the list is of the right size', () => {
    const size = 10;
    const doors = createDoors(size);

    expect(doors.length).toBe(size);
});

test('When printing a closed door, the # character is used', () => {
    const door = new Door(DoorState.CLOSED);

    expect(printDoor(door)).toBe('#');
});

test('When printing an open door, the @ character is used', () => {
    const door = new Door(DoorState.OPEN);

    expect(printDoor(door)).toBe('@');
});

test('When printing doors, the correct string is generated', () => {
    const doors = [new Door(DoorState.OPEN), new Door(DoorState.CLOSED), new Door(DoorState.CLOSED)];

    expect(printDoors(doors)).toBe('@##');
});

test('When playing with 1 door, the correct answer is #', () => {
    const doors = play(1)
    expect(printDoors(doors)).toBe('#');
});

test('When playing with 2 doors, the correct answer is @@', () => {
    const doors = play(2)
    expect(printDoors(doors)).toBe('@@');
});

test('When playing with 3 doors, the correct answer is @#@', () => {
    const doors = play(3)
    expect(printDoors(doors)).toBe('@#@');
});

test('When playing with 4 doors, the correct answer is @###', () => {
    const doors = play(4)
    expect(printDoors(doors)).toBe('@###');
});