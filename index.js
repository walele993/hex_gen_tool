#!/usr/bin/env node

import chalk from 'chalk';

function getRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const randomColor = getRandomHexColor();

// Display the color text in the actual color
console.log(chalk.hex(randomColor)(`Your random color is: ${randomColor}`));
