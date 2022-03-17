import { getMember, getMembers, addMember, removeMember, updateMember } from './crudMember';

test('Get members generates correct SQL query', async () => {
    expect(getMembers()).toEqual("SELECT * FROM members");
})

test('Get member by id generates correct SQL query', async () => {
    expect(getMember(5)).toEqual("SELECT * FROM members WHERE id = 5");
})

test('Add member generates correct SQL query', async () => {
    const memberToAdd = {
        firstname: "Jonatan",
        lastname: "Hallenberg"
    }
    expect(addMember(memberToAdd)).toEqual("INSERT INTO members(firstname, lastname) VALUES('Jonatan', 'Hallenberg')");
})

test('Remove member generates correct SQL query', async () => {
    expect(removeMember(7)).toEqual("DELETE FROM members WHERE id = 7");
});

test('Update member with firstname generates correct SQL query', async () => {
    expect(updateMember(7, "Eva")).toEqual("UPDATE members SET firstname = 'Eva' WHERE id = 7");
});

test('Update member with lastname generates correct SQL query', async () => {
    expect(updateMember(7, null, "Jonsson")).toEqual("UPDATE members SET lastname = 'Jonsson' WHERE id = 7");
});

test('Update member with firstname and lastname generates correct SQL query', async () => {
    expect(updateMember(7, "Eva", "Jonsson")).toEqual("UPDATE members SET firstname = 'Eva', lastname = 'Jonsson' WHERE id = 7");
});




