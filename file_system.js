var fs = require('fs');

var file1 = ""

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

var createFile = () => {
    readline.question('Enter Filename:', name => {
        console.log("here")
        file1 = name + ".txt";
        fs.writeFile(name, '', function (err) {
            if (err) throw err;
            console.log(`File ${name} created successfully`);
        });
        // readline.close();
        repeat();
    });
}

var writeFile = () => {
    readline.question('Enter Content:', content => {
        fs.writeFile(file1, content, function (err) {
            if (err) throw err;
            console.log(`Content added successfully`);
        });
        readline.close();
    });
    repeat();
}

var readFile = () => {
    fs.readFile(file1, function (err, data) {
        if (err) throw err;
        console.log(`${data}`);
    });
    repeat();
}

var deleteFile = () => {

    fs.unlink(file1, function (err) {
        if (err) throw err;
        console.log(`File ${file1} deleted successfully`);
    });
    repeat();

}

var appendFile = () => {
    readline.question('Enter Content:', content => {
        fs.appendFile(file1, content, function (err) {
            if (err) throw err;
            console.log(`Content appended successfully`);
        });
        readline.close();
    });
    repeat();
}

var renameFile = () => {
    readline.question('Enter New File Name:', newName => {
        fs.rename(file1, newName, function (err) {
            if (err) throw err;
            console.log(`File rename to ${newName} successfully`);
            file1 = newName + ".txt"
        });
        readline.close();
    });
    repeat();
}

var instructions = () => {
    console.log("---------FILE MENU--------")
    console.log("0.Create File")
    console.log("1.Write File")
    console.log("2.Read File")
    console.log("3.Delete File")
    console.log("4.Append File")
    console.log("5.Replace File Content")
    console.log("6.Rename File")
    console.log("7.exit")
}

var menu = () => {
    readline.question('Enter Choice:', option => {
        switch (option) {
            case '0': createFile()
                break;
            case '1': writeFile()
                break;
            case '2': readFile()
                break;
            case '3': deleteFile()
                break;
            case '4': appendFile()
                break;
            case '5': writeFile()
                break;
            case '6': renameFile()
                break;
            default:
                console.log("Invalid choice!")

        }
        readline.close();
    });
}

var repeat = () => {
    instructions()
    menu()
}
repeat();