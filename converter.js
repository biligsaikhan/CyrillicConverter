$(document).ready(function() {
	chrome.storage.sync.get(['value'], function(result) {
		$('#textbox').val(result.value)
	});
	function saver(boxval){
		var storesave = boxval;	
		chrome.storage.sync.set({'value': storesave}, function() {});
	}
	var defaultcheck = $("input[type='checkbox']").prop("checked") == true;
	defaultcheck;
	$("#textbox").keypress(function(event) {
		var checkedstate = $("input[type='checkbox']").prop("checked");
		if (checkedstate == true){
			switch(event.which){
				case 97: 
					var cursorPos = $('#textbox').prop('selectionStart')
					var selChar = $('#textbox').val().charAt(cursorPos-1);
					var curLastPos = cursorPos -1;
					if (selChar == "ы"){
						$('#textbox').val($('#textbox').val().slice(0, curLastPos));
						$('#textbox').insertAtCaret("я");
						event.preventDefault();
						event.stopPropagation();
						saver($('#textbox').val());
						break;
					}else if (selChar == "Ы"){
						$('#textbox').val($('#textbox').val().slice(0, curLastPos));
						$('#textbox').insertAtCaret("Я");
						event.preventDefault();
						event.stopPropagation();
						saver($('#textbox').val());
						break;
					}else{
						$('#textbox').insertAtCaret("а");
						event.preventDefault();
						event.stopPropagation();
						saver($('#textbox').val());
						break;
					}
				case 98: 
					$('#textbox').insertAtCaret("б");
					event.preventDefault();
					event.stopPropagation();
					saver($('#textbox').val());
					break;
				case 118: 
					$('#textbox').insertAtCaret("в"); 
					event.preventDefault();
					event.stopPropagation();
					saver($('#textbox').val());
					break;
				case 103: 
					$('#textbox').insertAtCaret("г"); 
					event.preventDefault();
					event.stopPropagation();
					saver($('#textbox').val());
					break;
				case 100: 
					$('#textbox').insertAtCaret("д"); 
					event.preventDefault();
					event.stopPropagation();
					saver($('#textbox').val());
					break;
				case 106: 
					$('#textbox').insertAtCaret("ж"); 
					event.preventDefault();
					event.stopPropagation();
					saver($('#textbox').val());
					break;
				case 122: 
					$('#textbox').insertAtCaret("з"); 
					event.preventDefault();
					event.stopPropagation();
					saver($('#textbox').val());
					break;
				case 105:
					var cursorPos = $('#textbox').prop('selectionStart')
					var selChar = $('#textbox').val().charAt(cursorPos-1);
					var curLastPos = cursorPos -1;
					if (selChar == "а" || selChar == "э" || selChar == "о" || selChar == "и" || selChar == "у" || selChar == "ү" || selChar == "А" || selChar == "Э" || selChar == "О" || selChar == "И" || selChar == "У" || selChar == "Ү"){
						$('#textbox').insertAtCaret("й");
						event.preventDefault();
						event.stopPropagation();
						saver($('#textbox').val());
						break;
					}else{
						$('#textbox').insertAtCaret("и");
						event.preventDefault();
						event.stopPropagation();
						saver($('#textbox').val());
						break;
					}
				case 107: 
					$('#textbox').insertAtCaret("к"); 
					event.preventDefault();
					event.stopPropagation();
					saver($('#textbox').val());
					break;
				case 108: 
					$('#textbox').insertAtCaret("л"); 
					event.preventDefault();
					event.stopPropagation();
					saver($('#textbox').val());
					break;
				case 109: 
					$('#textbox').insertAtCaret("м"); 
					event.preventDefault();
					event.stopPropagation();
					saver($('#textbox').val());
					break;
				case 110: 
					$('#textbox').insertAtCaret("н"); 
					event.preventDefault();
					event.stopPropagation();
					saver($('#textbox').val());
					break;
				case 111: 
					var cursorPos = $('#textbox').prop('selectionStart')
					var selChar = $('#textbox').val().charAt(cursorPos-1);
					var curLastPos = cursorPos -1;
					if (selChar == "ы"){
						$('#textbox').val($('#textbox').val().slice(0, curLastPos));
						$('#textbox').insertAtCaret("ё");
						event.preventDefault();
						event.stopPropagation();
						saver($('#textbox').val());
						break;
					}else if (selChar == "Ы"){
						$('#textbox').val($('#textbox').val().slice(0, curLastPos));
						$('#textbox').insertAtCaret("Ё");
						event.preventDefault();
						event.stopPropagation();
						saver($('#textbox').val());
						break;
					}else{
						$('#textbox').insertAtCaret("о");
						event.preventDefault();
						event.stopPropagation();
						saver($('#textbox').val());
						break;
					}
				case 113: 
					$('#textbox').insertAtCaret("ө"); 
					event.preventDefault();
					event.stopPropagation();
					saver($('#textbox').val());
					break;
				case 112: 
					$('#textbox').insertAtCaret("п"); 
					event.preventDefault();
					event.stopPropagation();
					saver($('#textbox').val());
					break;
				case 114: 
					$('#textbox').insertAtCaret("р"); 
					event.preventDefault();
					event.stopPropagation();
					saver($('#textbox').val());
					break;
				case 115: 
					$('#textbox').insertAtCaret("с"); 
					event.preventDefault();
					event.stopPropagation();
					saver($('#textbox').val());
					break;
				case 116: 
					$('#textbox').insertAtCaret("т"); 
					event.preventDefault();
					event.stopPropagation();
					saver($('#textbox').val());
					break;
				case 117: 
					var cursorPos = $('#textbox').prop('selectionStart')
					var selChar = $('#textbox').val().charAt(cursorPos-1);
					var curLastPos = cursorPos -1;
					if (selChar == "ы"){
						$('#textbox').val($('#textbox').val().slice(0, curLastPos));
						$('#textbox').insertAtCaret("ю");
						event.preventDefault();
						event.stopPropagation();
						saver($('#textbox').val());
						break;
					}else if (selChar == "Ы"){
						$('#textbox').val($('#textbox').val().slice(0, curLastPos));
						$('#textbox').insertAtCaret("Ю");
						event.preventDefault();
						event.stopPropagation();
						saver($('#textbox').val());
						break;
					}else{
						$('#textbox').insertAtCaret("у");
						event.preventDefault();
						event.stopPropagation();
						saver($('#textbox').val());
						break;
					}
				case 119: 
					$('#textbox').insertAtCaret("ү"); 
					event.preventDefault();
					event.stopPropagation();
					saver($('#textbox').val());
					break;
				case 102: 
					$('#textbox').insertAtCaret("ф"); 
					event.preventDefault();
					event.stopPropagation();
					saver($('#textbox').val());
					break;
				case 104:
					var cursorPos = $('#textbox').prop('selectionStart')
					var selChar = $('#textbox').val().charAt(cursorPos-1);
					var curLastPos = cursorPos -1;
					if (selChar == "ц"){
						$('#textbox').val($('#textbox').val().slice(0, curLastPos));
						$('#textbox').insertAtCaret("ч");
						event.preventDefault();
						event.stopPropagation();
						saver($('#textbox').val());
						break;
					}else if (selChar == "с"){
						$('#textbox').val($('#textbox').val().slice(0, curLastPos));
						$('#textbox').insertAtCaret("ш");
						event.preventDefault();
						event.stopPropagation();
						saver($('#textbox').val());
						break;
					}else if (selChar == "Ц"){
						$('#textbox').val($('#textbox').val().slice(0, curLastPos));
						$('#textbox').insertAtCaret("Ч");
						event.preventDefault();
						event.stopPropagation();
						saver($('#textbox').val());
						break;
					}else if (selChar == "С"){
						$('#textbox').val($('#textbox').val().slice(0, curLastPos));
						$('#textbox').insertAtCaret("Ш");
						event.preventDefault();
						event.stopPropagation();
						saver($('#textbox').val());
						break;
					}else{
						$('#textbox').insertAtCaret("х");
						event.preventDefault();
						event.stopPropagation();
						saver($('#textbox').val());
						break;
					}
				case 99: 
					$('#textbox').insertAtCaret("ц"); 
					event.preventDefault();
					event.stopPropagation();
					saver($('#textbox').val());
					break;
				case 126: 
					var cursorPos = $('#textbox').prop('selectionStart')
					var selChar = $('#textbox').val().charAt(cursorPos-1);
					var curLastPos = cursorPos -1;
					if (selChar == "ъ"){
						$('#textbox').val($('#textbox').val().slice(0, curLastPos));
						$('#textbox').insertAtCaret("Ъ");
						event.preventDefault();
						event.stopPropagation();
						saver($('#textbox').val());
						break;
					}else{
						$('#textbox').insertAtCaret("ъ");
						event.preventDefault();
						event.stopPropagation();
						saver($('#textbox').val());
						break;
					}
				case 121: 
					$('#textbox').insertAtCaret("ы"); 
					event.preventDefault();
					event.stopPropagation();
					saver($('#textbox').val());
					break;
				case 96: 
					var cursorPos = $('#textbox').prop('selectionStart')
					var selChar = $('#textbox').val().charAt(cursorPos-1);
					var curLastPos = cursorPos -1;
					if (selChar == "ь"){
						$('#textbox').val($('#textbox').val().slice(0, curLastPos));
						$('#textbox').insertAtCaret("Ь");
						event.preventDefault();
						event.stopPropagation();
						saver($('#textbox').val());
						break;
					}else{
						$('#textbox').insertAtCaret("ь");
						event.preventDefault();
						event.stopPropagation();
						saver($('#textbox').val());
						break;
					}
				case 101:
					var cursorPos = $('#textbox').prop('selectionStart')
					var selChar = $('#textbox').val().charAt(cursorPos-1);
					var curLastPos = cursorPos -1;
					if (selChar == "ы"){
						$('#textbox').val($('#textbox').val().slice(0, curLastPos));
						$('#textbox').insertAtCaret("е");
						event.preventDefault();
						event.stopPropagation();
						saver($('#textbox').val());
						break;
					}else if (selChar == "Ы"){
						$('#textbox').val($('#textbox').val().slice(0, curLastPos));
						$('#textbox').insertAtCaret("Е");
						event.preventDefault();
						event.stopPropagation();
						saver($('#textbox').val());
						break;
					}else{
						$('#textbox').insertAtCaret("э");
						event.preventDefault();
						event.stopPropagation();
						saver($('#textbox').val());
						break;
					}
				case 65:
					var cursorPos = $('#textbox').prop('selectionStart')
					var selChar = $('#textbox').val().charAt(cursorPos-1);
					var curLastPos = cursorPos -1;
					if (selChar == "Ы"){
						$('#textbox').val($('#textbox').val().slice(0, curLastPos));
						$('#textbox').insertAtCaret("Я");
						event.preventDefault();
						event.stopPropagation();
						saver($('#textbox').val());
						break;
					}else{
						$('#textbox').insertAtCaret("А");
						event.preventDefault();
						event.stopPropagation();
						saver($('#textbox').val());
						break;
					}
				case 66: 
					$('#textbox').insertAtCaret("Б"); 
					event.preventDefault();
					event.stopPropagation();
					saver($('#textbox').val());
					break;
				case 86: 
					$('#textbox').insertAtCaret("В"); 
					event.preventDefault();
					event.stopPropagation();
					saver($('#textbox').val());
					break;
				case 71: 
					$('#textbox').insertAtCaret("Г"); 
					event.preventDefault();
					event.stopPropagation();
					saver($('#textbox').val());
					break;
				case 68: 
					$('#textbox').insertAtCaret("Д"); 
					event.preventDefault();
					event.stopPropagation();
					saver($('#textbox').val());
					break;
				case 74: 
					$('#textbox').insertAtCaret("Ж"); 
					event.preventDefault();
					event.stopPropagation();
					saver($('#textbox').val());
					break;
				case 90: 
					$('#textbox').insertAtCaret("З"); 
					event.preventDefault();
					event.stopPropagation();
					saver($('#textbox').val());
					break;
				case 73:
					var cursorPos = $('#textbox').prop('selectionStart')
					var selChar = $('#textbox').val().charAt(cursorPos-1);
					var curLastPos = cursorPos -1;
					if (selChar == "А" || selChar == "Э" || selChar == "О" || selChar == "И" || selChar == "У" || selChar == "Ү"){
						$('#textbox').insertAtCaret("Й");
						event.preventDefault();
						event.stopPropagation();
						saver($('#textbox').val());
						break;
					}else{
						$('#textbox').insertAtCaret("И");
						event.preventDefault();
						event.stopPropagation();
						saver($('#textbox').val());
						break;
					}
				case 75: 
					$('#textbox').insertAtCaret("К"); 
					event.preventDefault();
					event.stopPropagation();
					saver($('#textbox').val());
					break;
				case 76: 
					$('#textbox').insertAtCaret("Л"); 
					event.preventDefault();
					event.stopPropagation();
					saver($('#textbox').val());
					break;
				case 77: 
					$('#textbox').insertAtCaret("М"); 
					event.preventDefault();
					event.stopPropagation();
					saver($('#textbox').val());
					break;
				case 78: 
					$('#textbox').insertAtCaret("Н"); 
					event.preventDefault();
					event.stopPropagation();
					saver($('#textbox').val());
					break;
				case 79: 
					var cursorPos = $('#textbox').prop('selectionStart')
					var selChar = $('#textbox').val().charAt(cursorPos-1);
					var curLastPos = cursorPos -1;
					if (selChar == "Ы"){
						$('#textbox').val($('#textbox').val().slice(0, curLastPos));
						$('#textbox').insertAtCaret("Ё");
						event.preventDefault();
						event.stopPropagation();
						saver($('#textbox').val());
						break;
					}else{
						$('#textbox').insertAtCaret("О");
						event.preventDefault();
						event.stopPropagation();
						saver($('#textbox').val());
						break;
					}
				case 81: 
					$('#textbox').insertAtCaret("Ө"); 
					event.preventDefault();
					event.stopPropagation();
					saver($('#textbox').val());
					break;
				case 80: 
					$('#textbox').insertAtCaret("П"); 
					event.preventDefault();
					event.stopPropagation();
					saver($('#textbox').val());
					break;
				case 82: 
					$('#textbox').insertAtCaret("Р"); 
					event.preventDefault();
					event.stopPropagation();
					saver($('#textbox').val());
					break;
				case 83: 
					$('#textbox').insertAtCaret("С"); 
					event.preventDefault();
					event.stopPropagation();
					saver($('#textbox').val());
					break;
				case 84: 
					$('#textbox').insertAtCaret("Т"); 
					event.preventDefault();
					event.stopPropagation();
					saver($('#textbox').val());
					break;
				case 85: 
					var cursorPos = $('#textbox').prop('selectionStart')
					var selChar = $('#textbox').val().charAt(cursorPos-1);
					var curLastPos = cursorPos -1;
					if (selChar == "Ы"){
						$('#textbox').val($('#textbox').val().slice(0, curLastPos));
						$('#textbox').insertAtCaret("Ю");
						event.preventDefault();
						event.stopPropagation();
						saver($('#textbox').val());
						break;
					}else{
						$('#textbox').insertAtCaret("У");
						event.preventDefault();
						event.stopPropagation();
						saver($('#textbox').val());
						break;
					}
				case 87: 
					$('#textbox').insertAtCaret("Ү"); 
					event.preventDefault();
					event.stopPropagation();
					saver($('#textbox').val());
					break;
				case 70: 
					$('#textbox').insertAtCaret("Ф"); 
					event.preventDefault();
					event.stopPropagation();
					saver($('#textbox').val());
					break;
				case 72: 
					var cursorPos = $('#textbox').prop('selectionStart')
					var selChar = $('#textbox').val().charAt(cursorPos-1);
					var curLastPos = cursorPos -1;
					if (selChar == "Ц"){
						$('#textbox').val($('#textbox').val().slice(0, curLastPos));
						$('#textbox').insertAtCaret("Ч");
						event.preventDefault();
						event.stopPropagation();
						saver($('#textbox').val());
						break;
					}else if (selChar == "С"){
						$('#textbox').val($('#textbox').val().slice(0, curLastPos));
						$('#textbox').insertAtCaret("Ш");
						event.preventDefault();
						event.stopPropagation();
						saver($('#textbox').val());
						break;
					}else{
						$('#textbox').insertAtCaret("Х");
						event.preventDefault();
						event.stopPropagation();
						saver($('#textbox').val());
						break;
					}
				case 67: 
					$('#textbox').insertAtCaret("Ц"); 
					event.preventDefault();
					event.stopPropagation();
					saver($('#textbox').val());
					break;
				case 89: 
					$('#textbox').insertAtCaret("Ы"); 
					event.preventDefault();
					event.stopPropagation();
					saver($('#textbox').val());
					break;
				case 69: 
					var cursorPos = $('#textbox').prop('selectionStart')
					var selChar = $('#textbox').val().charAt(cursorPos-1);
					var curLastPos = cursorPos -1;
					if (selChar == "Ы"){
						$('#textbox').val($('#textbox').val().slice(0, curLastPos));
						$('#textbox').insertAtCaret("Е");
						event.preventDefault();
						event.stopPropagation();
						saver($('#textbox').val());
						break;
					}else{
						$('#textbox').insertAtCaret("Э");
						event.preventDefault();
						event.stopPropagation();
						saver($('#textbox').val());
						break;
					}
				case 13:
					return true;
					saver($('#textbox').val());
					break;
				case 10:
					$(".label").trigger("click");
					event.preventDefault();
					event.stopPropagation();
					saver($('#textbox').val());
					break;
				default: 
					$('#textbox').insertAtCaret(event.key);
					event.preventDefault();
					event.stopPropagation();
					saver($('#textbox').val());
					break;
			}
		}else{
			switch(event.which){
				case 13:
					return true;
					saver($('#textbox').val());
					break;
				case 10:
					$(".label").trigger("click");
					event.preventDefault();
					event.stopPropagation();
					saver($('#textbox').val());
					break;
				default: 
					$('#textbox').insertAtCaret(event.key);
					event.preventDefault();
					event.stopPropagation();
					saver($('#textbox').val());
					break;
			}
		}
		event.preventDefault();
		event.stopPropagation();
	});
});

