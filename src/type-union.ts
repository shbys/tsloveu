import { City } from "./enums";

function getMixedValueForOverrides(input: 1): 1;
function getMixedValueForOverrides(input: 2 | 3): "hello" | true;
function getMixedValueForOverrides(input: 4): City.London;
function getMixedValueForOverrides(input: number): 1 | "hello" | true | City.London {
    switch (input) {
        case 1:
            return 1;
        case 2:
            return "hello";
        case 3:
            return true;
        case 4:
        default:
            return City.London;
    }
}

export function runTypeUnion(): void {
    const first = getMixedValueForOverrides(1);
    const second = getMixedValueForOverrides(2);
    const third = getMixedValueForOverrides(3);
    const fourth = getMixedValueForOverrides(4);
    console.log(`first = ${first}, second = ${second}, third = ${third}, fourth = ${fourth}`);
    console.log('---------------------------------------------------------------');

    // type aliases
    type comboType = [string, number | true, 1 | 2 | 3, City][];
    function getComboTypeValue(input: comboType): comboType {
        return [["Apples", 100, 2, City.London], ["Oranges", true, 3, City.NY], ...input];
    }
    const result: comboType = getComboTypeValue([["Bananas", true, 1, City.Paris]]);
    console.log(`ComboTypeValue: ${result}, length = ${result.length}`);
    type Task = [number, string, boolean];
    type TaskCollection = Task[];
    function addTask(task: Task, sources: TaskCollection | null): TaskCollection {
        if (sources === null) {
            return [task];
        }

        return [...sources, task];
    }
    let tasks = addTask([1, "firsttask", false], []);
    tasks = addTask([2, "secondtask", true], tasks);
    tasks = addTask([3, "thirdtask", false], tasks);
    console.log(`tasks = ${tasks}`);
}