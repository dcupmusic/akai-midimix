


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
			//Running our control Functions
			parameters.control(data1,data2)
      parameters.envelope(data1,data2)
      parameters.common(data1, data2)
      parameters.macro(data1,data2)
      parameters.pageScroll(data1, data2);

	//Note Data

}




function exit()
{
  println("exit")
}
