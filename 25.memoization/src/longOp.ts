export function longOp(input: number) {
    var now = Date.now()
    var end = now + 3000
    while(now < end) {
        now = Date.now()
    }
    return input * 90
}

export const longOpMemo : any = (input: number) => {
    if (!longOpMemo.cache) {
        longOpMemo.cache = {}
    }
    if (!longOpMemo.cache[input]) {
        var now = Date.now()
        var end = now + 3000
        while (now < end) {
            now = Date.now()
        }
        return longOpMemo.cache[input] = input * 90
    }
    return longOpMemo.cache[input]
}