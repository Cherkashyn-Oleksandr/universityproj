//calcFunction.js
//JavaScript Document


Fcalc = document.calc;

FlagNewNum = false;

CurrentNum=0;
PendingOP = "";

document.onkeydown = function (e) {
    switch (e.key) {
        case '1':
            NumPressed(1)
            break
        case '2':
            NumPressed(2)
            break
        case '3':
            NumPressed(3)
            break
        case '4':
            NumPressed(4)
            break
        case '5':
            NumPressed(5)
            break
        case '6':
            NumPressed(6)
            break
        case '7':
            NumPressed(7)
            break
        case '8':
            NumPressed(8)
            break
        case '9':
            NumPressed(9)
            break
        case '0':
            NumPressed(0)
            break
        case '.':
            Decimal()
            break
        case '+':
            Operation('+')
            break
        case '-':
            Operation('-')
            break
        case '*':
            Operation('*')
            break
        case '/':
            Operation('/')
            break
        case '%':
            Percent()
            break
        case 'Backspace':
            Back()
            break
        case 'Enter':
            Operation('=')
            break
        case ',':
            Neg()
            break
        case 'c':
            Clear()
            break
        default:
            break
    }
}
function NumPressed(Num){
	
	if(FlagNewNum){
		if(Fcalc.ReadOut.value == "0"){
	        Fcalc.ReadOut.value = Num;
		}else{
			Fcalc.ReadOut.value += Num;
		}
	}else{
		Fcalc.ReadOut.value = Num;
		FlagNewNum = true;
	}
}


function Clear(){
	Fcalc.ReadOut.value = "0";   //"0."
	FlagNewNum = false;
	
}

function Back(){
	
	if(Fcalc.ReadOut.value.length > 1){
		Fcalc.ReadOut.value =
				Fcalc.ReadOut.value.substring(0,Fcalc.ReadOut.value.length-1);
	}else{
		Fcalc.ReadOut.value = "0";
	}
}

function Neg(){
	Fcalc.ReadOut.value*=-1;
}


function Decimal(){
	
 // if(FlagNewNum == false)
	 if(!FlagNewNum){
		 Fcalc.ReadOut.value = "0.";
		 FlagNewNum = true;
	 }else{
		 
		 if((Fcalc.ReadOut.value).indexOf(".")==-1){
								Fcalc.ReadOut.value += ".";
		 }
	 }
	
}

function Operation(Sign){
	
	switch(Sign){
		case '-':
		case '+':
		case '/':
        case '*':
       
		    CurrentNum=parseFloat(Fcalc.ReadOut.value);
		    PendingOP=Sign;
		    FlagNewNum = false;
            break;
        case '%':
            CurrentNum = parseFloat(Fcalc.ReadOut.value)/100;
            PendingOP = Sign;
            FlagNewNum = false;
            break;
		
		case '=':
		   switch(PendingOP){
               case '-':
                   
						CurrentNum-=parseFloat(Fcalc.ReadOut.value);
				break;
			   case '+':
						CurrentNum+=parseFloat(Fcalc.ReadOut.value);
				break;
				case '*':
						CurrentNum*=parseFloat(Fcalc.ReadOut.value);
					break;
		   		  
			  case '/':
			 		if(Fcalc.ReadOut.value!=0){
						CurrentNum/=parseFloat(Fcalc.ReadOut.value);
					}
					else{
						CurrentNum = "Cannot divide by zero";
                   }
               
                   break;
							
				break;
		   }
		   
		Fcalc.ReadOut.value = CurrentNum;
		FlagNewNum = false;
		
		
		break;
	}
	
}