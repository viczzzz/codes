

$(document).ready(function(){

function ImageSwitcher(choices, i) {
	i = 0;
	
	this.Next = function() {
		hide_current_image();
		show_next_image();
	}
	
	const hide_current_image = function() {
		if(choices){
			choices[i].style.visibility = "hidden";
			i += 1;
		}
	}
	const show_next_image = function() {
		if(choices){
			if(i == (choices.length)) {
				i = 0;
			}
			choices[i].style.visibility = "visible";
		}
	}
}
  
    let pants = $(".pant");
	let shirts = $(".shirt");
    let background = $(".bg");
    
    //********************************************* */THIS PART SHOULD BE CHANGED

	const shirt_picker = new ImageSwitcher(shirts);
	document.getElementById("shirt_button").onclick = function() { shirt_picker.Next(); };
	
	const pants_picker = new ImageSwitcher(pants);
	document.getElementById("pant_button").onclick = function() {pants_picker.Next(); };
	
	const bg_picker = new ImageSwitcher(background);
	document.getElementById("bg_button").onclick = function() {bg_picker.Next(); };

});
//*************************************************** */

  $("#shirt_button").click(function(){
  $("#shirt-menu").css("visibility", "visible"); });
//************************************************** */
  const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext("2d");
    canvas.width = 530;
    canvas.height = 530;

    const background = new Image();
    background.src = 'C:\Users\elenp\Desktop\Pics\fashion-runway-rental-redcarpetsystems-dot-com-01-535x535.jpg';

    const  ModelOne = new Image();
    ModelOne.src = 'C:\Users\elenp\Desktop\Pics\girl-320265_960_720.png';

    const ModelTwo = new Image();
    ModelTwo.src = 'C:\Users\elenp\Desktop\Pics\Human_body.png';

    const ModelThree = new Image();
    ModelThree.src = 'C:\Users\elenp\Desktop\Pics\Low-Poly-Human-Male.png';

    