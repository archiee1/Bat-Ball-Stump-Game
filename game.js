let scoreStr=localStorage.getItem('Score');
        let score;
        resetScore(scoreStr)


    //Score will survive browser refresh

    function resetScore(ScoreStr){
    score=JSON.parse(scoreStr) || {
        win: 0,
        lose: 0,
        tie: 0,

        
    };
     score.displayScore=function(){
        return `Score: Won:${score.win}, Lost:${score.lose}, Tie:${score.tie}`;
     };
      showResult();
    }
       
    function generateComputerChoice(){
        let randomNumber=Math.random() * 3;

        if(randomNumber > 0 && randomNumber <=1){
            return 'Bat';
        }
        else if(randomNumber > 1 && randomNumber <=2){
            return 'Ball';
        }
        else{
            return 'Stump';
        }
    }  
    
    function getResult(userMove, computerMove){
        if(userMove==='Bat'){
            if(computerMove==='Ball'){
                score.win++;
                return 'User won';
    }      else if(computerMove==='Bat'){
               score.tie++;
               return 'Its a tie';
    }      else if(computerMove==='Stump'){
               score.lose++;
             return 'Computer has won';
    }
        }
    else if(userMove==='Ball'){
        if(computerMove==='Ball'){
            score.tie++;
        return 'Its a tie';
    } else if(computerMove==='Bat'){
        score.lose++;
        return 'Computer has won';
    }else if(computerMove==='Stump'){
        score.win++;
        return 'User won';
    }

    } else if(userMove==='Stump'){
        if(computerMove==='Ball'){
            score.lose++;
        return 'Computer has won';
    } else if(computerMove==='Bat'){
        score.win++;
        return 'User won';
    }else if(computerMove==='Stump'){
        score.tie++;
        return 'Its a tie';
    }}}

    function showResult(userMove, computerMove, result){
        localStorage.setItem('Score', JSON.stringify(score));
        document.querySelector('#user-move').innerHTML= userMove !== undefined?  `You have chosen ${userMove}`: '';
        document.querySelector('#computer-move').innerHTML= computerMove!==undefined? `Computer have chosen ${computerMove}`:'';
        document.querySelector('#result').innerHTML= result!==undefined? result : '' ;
        document.querySelector('#score').innerHTML= score.displayScore();
    }