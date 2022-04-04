var p1score = 0;
var p2score = 0;
var p3score = 0;
var p4score = 0;
for(var i=0;i<50;i++){
    function play(p1,p2,p3,p4){
        // p1 choices
        if(p1 === 'rock'& p2 === 'scissors'){
            p1score++;
            p2score--;
        }else if(p1 === 'rock' & p3 === 'scissors'){
            p1score++;
            p3score--;
        }else if(p1 === 'rock' & p4 === 'scissors'){
            p1score++;
            p4score--;
        }else if(p1 === 'rock' & p2 === 'paper'){
            p1score--;
            p2score++;
        }else if(p1 === 'rock' & p3 === 'paper'){
            p1score--;
            p3score++;
        }else if(p1 === 'rock' & p4 === 'paper'){
            p1score--;
            p4score++;
        }else if(p1 === 'paper' & p2 === 'scissors'){
            p1score--;
            p2score++;
        }else if(p1 === 'paper' & p3 === 'scissors'){
            p1score--;
            p3score++;
        }else if(p1 === 'paper' & p4 === 'scissors'){
            p1score--;
            p4score++;
            // p2 choices
        }else if(p2 === 'rock' & p3 === 'paper'){
            p2score--;
            p3score++;
        }else if(p2 === 'rock' & p4 === 'paper'){
            p2score--;
            p4score++;
        }else if(p2 === 'rock' & p3 === 'scissors'){
            p2score++;
            p3score--;
        }else if(p2 === 'rock' & p4 === 'scissors'){
            p2score++;
            p4score--;
        }else if(p2 === 'paper' & p3 === 'scissors'){
            p2score--;
            p3score++;
        }else if(p2 === 'paper' & p4 === 'scissors'){
            p2score--;
            p4score++;
            // p3 choises
        }else if(p3 === 'rock' & p4 === 'scissors'){
            p3score++;
            p4score--;
        }else if(p3 === 'rock' & p4 === 'paper'){
            p3score--;
            p4score++;
        }else if(p3 === 'paper' & p4 === 'scissors'){
            p3score--;
            p4score++;
        }
        else{
            console.log("game drawn")
        }
    }

    var y = []
    for(var i=0; i<4; i++){
        var choice = ['rock','paper','scissors']
        var randomNumber = Math.floor(Math.random()*choice.length);
        var x = choice[randomNumber]
        y.push(x);
    }
    console.log(y);
    play(y[0],y[1],y[2],y[3])
    // score at end of each round
    console.log({'p1score':p1score,'p2score':p2score,'p3score':p3score,'p4score':p4score})
}
// score at the end of 50th round
console.log({'p1score':p1score,'p2score':p2score,'p3score':p3score,'p4score':p4score})
