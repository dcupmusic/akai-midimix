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
 		if(data1 >= this.offset - 9 && data1 < this.offset){
			cursorDevice.getEnvelopeParameter(data1 - (this.offset - 9)).set(data2,128);
 		}
 	},

	common: function(data1, data2)
	{
		if(data1 >= this.offset - 17 && data1 < this.offset - 9){
			cursorDevice.getCommonParameter(data1 - (this.offset - 17)).set(data2,128);
		}
	},

	macro: function(data1, data2) {
	    var macroIndex = data1 - (this.offset +32);

	    if (macroIndex >= 0 && macroIndex < 8) {
	         cursorDevice.getMacro(macroIndex).getAmount().set(data2, 128);
	      }
	   },
	pageScroll: function(data1, data2) {
if (data2 != 0) {
if (data1 >= 33 && data1 <= 39)
cursorDevice.setParameterPage(data1 - 33);
if (data1 === 40)
cursorDevice.setParameterPage(7);
if (data1 >= 49 && data1 <= 56)
cursorDevice.setParameterPage(data1 - 41);
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
