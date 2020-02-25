const things = ["Thing 1", "Thing 2", "Thing 3"];
const stuffs = ["Stuff A", "Stuff B", "Stuff C"];

function getThings() {
    return new Promise<string[]>(resolve => {
        setTimeout(() => resolve(things), 200);
    });
}

export function getStuffs() {
    return new Promise<string[]>(resolve => {
        setTimeout(() => resolve(stuffs), 200);
    });
}

export default getThings;