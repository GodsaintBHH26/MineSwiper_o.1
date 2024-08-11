const mine = Math.random();

console.log(mine);

let score = 0;
let hiScore = 0;

let intMine = ' ';

function setMine(){
    if(mine>0 && mine<0.111){
        intMine = '1';
    }else if(mine>0.111 && mine<0.222){
        intMine = '2';
    }else if(mine>0.222 && mine<0.333){
        intMine = '3';
    }else if(mine>0.333 && mine<0.444){
        intMine = '4';
    }else if(mine>0.444 && mine<0.555){
        intMine = '5';
    }else if(mine>0.555 && mine<0.666){
        intMine = '6';
    }else if(mine>0.666 && mine<0.777){
        intMine = '7';
    }else if(mine>0.777 && mine<0.888){
        intMine = '8';
    }else if(mine>0.888 && mine<0.999){
        intMine = '9';
    }else{
        intMine = '1';
    }
}

function checkMine(userChoice){
    switch(userChoice){
        case 1:
            if(userChoice == intMine){

            }else{

            }
    }

}




// 0---A----B-----C-----D---E----F-----G-----H---I----1
// A = 0 - 1.11
// B = 1.11 - 2.22
// C = 2.22 - 3.33
// D = 3.33 - 4.44
// E = 4.44 - 5.55
// F = 5.55 = 6.66
// G = 6.66 - 7.77
// H = 7.77 - 8.88
// I = 8.88 - 9.99

