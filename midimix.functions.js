// functions.js
var parameters = {
	offset: 25
  ,
	control: function(data1, data2)
 	{
 		if(data1 >= this.offset && data1 < this.offset + 8 ){
			cursorDevice.getParameter(data1 - this.offset).set(data2,128);
 		}
 	},

	envelope: function(data1, data2)
 	{
 		if(data1 >= this.offset - 8 && data1 < this.offset){
			cursorDevice.getEnvelopeParameter(data1 - (this.offset - 8)).set(data2,128);
 		}
 	},

	common: function(data1, data2)
	{
		if(data1 >= this.offset - 16 && data1 < this.offset -8){
			cursorDevice.getCommonParameter(data1 - (this.offset - 16)).set(data2,128);
		}
	},

	macro: function(data1, data2)
	{
		if(data1 >= (this.offset + 32) && data1 < (this.offset + 40)){
			cursorDevice.getMacro(data1 - (this.offset +32)).set(data2,128);
		}
	},
	pageScroll: function(data1, data2)
 	{
 		if(data1 == 33 && data2 != 0){
 			cursorDevice.setParameterPage(0);
 		}else if(data1 ==34 && data2 != 0){
 			cursorDevice.setParameterPage(1);
 		}else if(data1 ==35 && data2 != 0){
 			cursorDevice.setParameterPage(2);
 		}else if(data1 ==36 && data2 != 0){
 			cursorDevice.setParameterPage(3);
 		}else if(data1 ==37 && data2 != 0){
 			cursorDevice.setParameterPage(4);
 		}else if(data1 ==38 && data2 != 0){
 			cursorDevice.setParameterPage(5);
 		}else if(data1 ==39 && data2 != 0){
 			cursorDevice.setParameterPage(6);
 		}else if(data1 ==40 && data2 != 0){
 			cursorDevice.setParameterPage(7);
 		}else if(data1 ==49 && data2 != 0){
 			cursorDevice.setParameterPage(8);
 		}else if(data1 ==50 && data2 != 0){
 			cursorDevice.setParameterPage(9);
 		}else if(data1 ==51 && data2 != 0){
 			cursorDevice.setParameterPage(10);
 		}else if(data1 ==52 && data2 != 0){
 			cursorDevice.setParameterPage(11);
 		}else if(data1 ==53 && data2 != 0){
 			cursorDevice.setParameterPage(12);
 		}else if(data1 ==54 && data2 != 0){
 			cursorDevice.setParameterPage(13);
 		}else if(data1 ==55 && data2 != 0){
 			cursorDevice.setParameterPage(14);
 		}else if(data1 ==56 && data2 != 0){
 			cursorDevice.setParameterPage(15);
 		}
 	},

 	update: function()
 	{
 		for(var p = 0; p <8; p ++)
 		{
 			cursorDevice.getParameter(p).setIndication(true)
 		}
 	}

}
