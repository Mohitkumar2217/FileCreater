
import fs from "fs";

import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const fileCreation = () => {
    rl.question("Enter file Name: ", (name) => {
        if (fs.existsSync(`${name}.txt`)) {
            console.log('File with name already exit:');
            console.log('Retry with new name');            
            fileCreation();
        }
        else {
            rl.question("Enter the content: ", (content) => {
                fs.writeFile(`${name}.txt`, content, "utf-8", (err) => {
                    if (err) {
                        console.error('Error writing the file');
                    }
                    else {
                        console.log(`File"${name}.txt" created successfully!`);
                    }
                })
            })
        }
    })
}
fileCreation();