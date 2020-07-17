// Convert feet to mile
// FeetToMile function 
function feetToMile(feet){
    // Check Input is valid or not
    if(feet >= 0){
        var mile = feet/5280;
        return mile;
    }
    else{
        var message ="Wrong input. Length cannot be negative or string";
        return message;
    }
}
// Uncomment if you want to know result

// var result=feetToMile(100);
// console.log(result);


// find the wood quantity neeeded to make chair, table and bed.
//Wood Calculator function
function woodCalculator(chair,table,bed){
    // Check input is valid or not
    if(chair >= 0 && table>= 0 && bed >= 0){
        var wood = (chair *1) + (table* 3) + (bed * 5);
        return wood;
    }
    else{
        var message ="Wrong input.Furniture amount cannot be negative or string";
        return message;
    }
}
// Uncomment if you want to know result

// var result = woodCalculator(2,3,-4);
// console.log(result);

// Find the bricks amount needed to make a building
// Brick Calculator Function
function brickCalculator(buldingLevel){
    // Check Input is valid or not
    if(buldingLevel >= 0 && buldingLevel <= 10 ){
        bricks = buldingLevel * 15000;
        return bricks;
    }
    else if(buldingLevel >= 11 && buldingLevel <= 20 ){
        buldingLevel = buldingLevel- 10;
        bricks = ((buldingLevel * 12000) + 150000); 
        return bricks;
    }
    else if(buldingLevel >= 21 ){
        buldingLevel = buldingLevel- 20;
        bricks = ((buldingLevel * 10000) + 150000 + 120000);
        return bricks;
    }
    else{
        var message="Wrong input. Level cannot be negative or string";
        return message;
    }
}
// Uncomment if you want to know result

// var result = brickCalculator(-25);
// console.log(result);


//Find smallest name of your friend in the group
//Tiny name finder function
function tinyFriend(friendsName){
    // Check input is array or not
    if(Array.isArray(friendsaName)){
        tinyName = friendsName[0];
        for(i = 1; i < friendsName.length;i++){     
            if (tinyName.length > friendsName[i].length){
            tinyName = friendsName[i];
            }
        }
        return tinyName;
    }
    else{
        var message = "Wrong Input. Please input your friends name.";
        return message;
    }
}

// Uncomment if you want to know result

// var friendsaName=["rafique","shafique","rafi","sumon"];
// var result = tinyFriend(friendsaName);
// console.log(result);