









loadAPI(1);

host.defineController("Akai", "Midimix", "1.0", "80c4f150-32c7-11e6-bdf4-0800200c9a66");
host.defineMidiPorts(1, 1);


var CC_RANGE_HI = 62
var CC_RANGE_LO = 16


function init()
{
  host.getMidiInPort(0).setMidiCallback(onMidiPort1);
  noteIn = host.getMidiInPort(0).createNoteInput("Notes");
}

function onMidiPort1(status, data1, data2)
{

}




function exit()
{
  println("exit")
}
