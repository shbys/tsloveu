export function runTuples(): void {
    const hat: [string, number] = ["hat", 100];
    const gloves: [string, number] = ["Gloves", 75];
    hat.forEach((o: string | number) => {
        if (typeof o === "string") {
            console.log(`String: ${o}`);
        } else {
            console.log(`Number: ${o.toFixed(2)}`);
        }
    });
    console.log('---------------------------------------------------------------');

    let products: [string, number][] = [["Hat", 100], ["Gloves", 75]];
    let tupleUnion: ([string, number] | boolean)[] = [true, false, hat, ...products];
    let basicUnion: (string | number | boolean)[] = [true, false, 123, 3434, false, true];
    tupleUnion.forEach(o => {
        if (o instanceof Array) {
            o.forEach(u => {
                if (typeof u === "string") {
                    console.log(`String: ${u}`);
                } else {
                    console.log(`Number: ${u.toFixed(2)}`);
                }
            });
        }
        else if (typeof o === "boolean") {
            console.log(`Boolean Value: ${o}`);
        }
    });
    console.log('---------------------------------------------------------------');

    basicUnion.forEach(o => {
        if (typeof o === "string") {
            console.log(`String: ${o}`);
        } else if (typeof o === "number") {
            console.log(`Number: ${o.toFixed(2)}`);
        } else {
            console.log(`Boolean Value: ${o}`);
        }
    });
}
