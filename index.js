
const express = require('express');
const app = express();

app.use(express.static('public'))

app.listen(8080, function() {
    console.log('listening on 8080')
})

app.get('/', function(req, res) {
  res.sendFile(__dirname +'/index.html')
})

app.get('/write', function(req, res) {
    res.sendFile(__dirname +'/write.html')
})

app.post('/on1', function(req, res){
    const spawn = require("child_process").spawn;
    const pythonProcess = spawn('python',["./Servo_control.py",'on',4,3.77,5]);
    pythonProcess.stdout.on('data', (data) => {
        console.log(data.toString());
        // Do something with the data returned from python script
    });
    pythonProcess.stderr.on('data', (data) => {
        console.log(data.toString());
    });
    res.sendFile(__dirname +'/index.html')
});
app.post('/off1', function(req, res){
    const spawn = require("child_process").spawn;
    const pythonProcess = spawn('python',["./Servo_control.py",'off',4,6.25,5]);
    pythonProcess.stdout.on('data', (data) => {
        console.log(data.toString());
        // Do something with the data returned from python script
    });
    pythonProcess.stderr.on('data', (data) => {
        console.log(data.toString());
    });
    res.sendFile(__dirname +'/index.html')
});
app.post('/on2', function(req, res){
    const spawn = require("child_process").spawn;
    const pythonProcess = spawn('python',["./Servo_control.py",'on',17,6.25,5]);
    pythonProcess.stdout.on('data', (data) => {
        console.log(data.toString());
        // Do something with the data returned from python script
    });
    pythonProcess.stderr.on('data', (data) => {
        console.log(data.toString());
    });
    res.sendFile(__dirname +'/index.html')
});
app.post('/off2', function(req, res){
    const spawn = require("child_process").spawn;
    const pythonProcess = spawn('python',["./Servo_control.py",'off',17,3.77,5]);
    pythonProcess.stdout.on('data', (data) => {
        console.log(data.toString());
        // Do something with the data returned from python script
    });
    pythonProcess.stderr.on('data', (data) => {
        console.log(data.toString());
    });
    res.sendFile(__dirname +'/index.html')
});
