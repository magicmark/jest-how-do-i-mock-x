import { setTimeout as asyncSetTimeout } from "node:timers/promises";

export default function main() {
    setTimeout(() => {
        // throw new Error('yikes');
    }, 500);
    return asyncSetTimeout(1000, 'yo');
}