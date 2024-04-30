fs.readFile('path_to_your_file.json', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:");
        console.error(err);
    } else {
        const obj = JSON.parse(data);
        console.log(obj);
    }
});
