var s = '';

for(var i = 10; i >= 0; i--){

    for(var k = 10; k > i; k--) {
        s += ' ';
    }

    for(var j = 0; j < i; j++){
        s += '*'; 
    }
    s += '\n';
}

console.log(s);