import Character from "../src/character"

test('проверка создания класса Character', () => {
const character = new Character('Vasya');
const expectedCharacter = {
    name: 'Vasya'
};
expect(character).toEqual(expectedCharacter)
})