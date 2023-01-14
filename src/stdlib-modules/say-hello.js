import { execFileSync } from 'child_process';

export default function sayHello() {
    return execFileSync("echo", ['hello', 'world'], { encoding: 'utf8' }).trim();
}
