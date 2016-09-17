


// by Duncan MacLennan






loadAPI(1);

host.defineController("Akai", "Midimix", "1.0", "80c4f150-32c7-11e6-bdf4-0800200c9a66");
host.defineMidiPorts(1, 1);
host.addDeviceNameBasedDiscoveryPair(["MIDI mix"], ["MIDI mix"]);

//load externals
load("midimix.functions.js")

//define the range of CCs

var CC_RANGE_HI = 120;
var CC_RANGE_LO = 100;

var parameterIds = [];

//------------------------------------ Init -----------------------------------//
function init()
{
  //-------- Set MIDI callbacks / port
  host.getMidiInPort(0).setMidiCallback(onMidiPort1);

	//Sends Notes to Bitwig, with no input filters.
  noteIn = host.getMidiInPort(0).createNoteInput("Notes");
  noteIn.setShouldConsumeEvents(false);

  //Creates an array of user controls with the proper amount of CC#s


  //Creating a view onto the selected device
	cursorDevice = host.createEditorCursorDevice(2);

  	parameters.update();

}

function onMidiPort1(status, data1, data2)
{
	//Checks if the MIDI data is a CC
	if (isChannelController(status))
	{
		//if it is, check if the CC is within our range
		if (data1 >= CC_RANGE_LO && data1 <= CC_RANGE_HI)
		{
			//if it is, get the index of the CC in our userControls
			//And set the value of the control to the value of our CC


		}else{
			//Running our control Functions
			parameters.control(data1,data2)

      parameters.pageScroll(data1, data2);
			}
	//Note Data
	}else{
    parameters.pageScroll(data1, data2);
	}
}




function exit()
{
  println("exit")
}
