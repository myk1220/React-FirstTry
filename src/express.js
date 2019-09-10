let express = require('express');
let app = express();

const result= [
        {
            name:"mic",
            age:"18",
            sex:"man"
        },
        {
            name:"bai",
            age:"12",
            sex:"woman"
        },
        {
            name:"mc",
            age:"28",
            sex:"man"
        },
        {
            name:"代阳松",
            age:'27',
            sex:'man'
        }
]


app.get('/api/test', (req, res) => res.send(result));
app.listen(3002, () => console.log('Example app listening on port 3002!'));