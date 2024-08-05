import Team from "../src/team";
import Character from "../src/character";

test('Проверка создания класса Team', () => {
    const team = new Team();
    const expectedTeam = {
        members: new Set()
    };
    expect(team).toEqual(expectedTeam);
});

test('Проверка добавления персонажа в команду c ошибкой', () => {
    const character = new Character('John');
    const team = new Team();
    team.add(character);
    expect(team.add(character)).toThrow('Этот персонаж уже в команде');
});


test('Проверка успешного добавления персонажа в команду', () => {
    const character = new Character('John');
    const team = new Team();
    team.add(character);
    const set = new Set;
    set.add({name: 'John'});
    const expectedTeam = {
        members: set
    };
    expect(team.members).toEqual(expectedTeam.members);
});


test('Проверка добавления всех персонажей', () => {
    const character = new Character('Bowerman')
    const character2 = new Character('Swordsman')
    const character3 = new Character('Magician')

    const team = new Team();
    team.addAll(character, character2, character3);
    expect(team.members.has(character)).toBe(true);
    expect(team.members.has(character2)).toBe(true);
    expect(team.members.has(character3)).toBe(true);
})

test('Проверка добавления всех персонажей в массив', () => {
    const character = new Character('Bowerman')
    const character2 = new Character('Swordsman')
    const character3 = new Character('Magician')

    const team = new Team();
    team.addAll(character, character2, character3);
    const expectedArray = [character, character2, character3]
    expect(team.toArray()).toEqual(expectedArray);
})