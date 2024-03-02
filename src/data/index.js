const fs = require('fs');
const path = require('path')



module.exports = {
    loadData: (filenameJSON = "productsDataBase") => {
        const pathJSON = path.join(__dirname, `./${filenameJSON}.json`);
        const dataJSON = fs.readFileSync(pathJSON, 'utf-8');
        const dataJS = JSON.parse(dataJSON); 
        return dataJS;
    },
    saveData: (data, filenameJSON = "productsDataBase") => {
        const pathJSON = path.join(__dirname, `./${filenameJSON}.json`);
        const dataSTRING = JSON.stringify(data, null, 3);
        fs.writeFileSync(pathJSON, dataSTRING, 'utf-8');
    } }