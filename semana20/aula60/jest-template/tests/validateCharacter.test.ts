import { Character, validateCharacter, performAttackInversion } from '../src/characters'

test("empty name test", () => {
    const result = validateCharacter({
        name: "",
        life: 1500,
        strength: 20,
        defense: 5
    })

    expect(result).toBe(false)
})

test("zero life test", () => {
    const result = validateCharacter({
        name: "Tadeu",
        life: 0,
        strength: 20,
        defense: 5
    })

    expect(result).toBe(false)
})

test("zero strength test", () => {
    const result = validateCharacter({
        name: "Tadeu",
        life: 1500,
        strength: 0,
        defense: 5
    })

    expect(result).toBe(false)
})

test("zero defense test", () => {
    const result = validateCharacter({
        name: "Tadeu",
        life: 1500,
        strength: 20,
        defense: 0
    })

    expect(result).toBe(false)
})

test("life test, strength or defense with negative value", () => {
    const result = validateCharacter({
        name: "Tadeu",
        life: -1500,
        strength: 20,
        defense: 10
    })

    expect(result).toBe(false)
})

test("valid information test", () => {
    const result = validateCharacter({
        name: "Tadeu",
        life: 1500,
        strength: 20,
        defense: 10
    })

    expect(result).toBe(true)
})

test("Creating True Mocks", () => {
    const validatorMock = jest.fn(() => {
        return true
    })
})

test("Creating False Mocks", () => {
    const validatorMock = jest.fn(() => {
        return false
    })
})

test("test perform attack", () => {
    const validatorMock = jest.fn(() => {
        return true;
    });

    const attacker: Character = {
        name: "Tadeu",
        life: 1500,
        defense: 150,
        strength: 400,
    };

    const defender: Character = {
        name: "Tatiana",
        life: 1500,
        defense: 200,
        strength: 320,
    };

    performAttackInversion(attacker, defender, validatorMock as any);

    expect(defender.life).toEqual(1300);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
});

test("Return invalid character error", () => {
    expect.assertions(4);
    const validatorMock = jest.fn(() => {
        return false;
    });

    const attacker: Character = {
        name: "Tadeu",
        life: 1500,
        defense: -150,
        strength: 400,
    };

    const defender: Character = {
        name: "Tatiana",
        life: 1500,
        defense: 200,
        strength: -320,
    };

    try {
        performAttackInversion(attacker, defender, validatorMock as any);
    } catch (err) {
        expect(err.message).toBe("Invalid character");
        expect(validatorMock).toHaveBeenCalled();
        expect(validatorMock).toHaveBeenCalledTimes(1);
        expect(validatorMock).toHaveReturnedTimes(1);
    }
});