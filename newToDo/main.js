// main.js

$(document).ready(function(){
	//EVENT LISTENER FOR ADD BUTTON
	$("#addItem").on("click", addNewItem);
	$("#clearComplete").on("click", clearCompletedItem);
	$("#todos").on("change", ".completedItem", completeItem)
	$("#todos").on("click", ".fa-trash-alt", deleteItem);
	$("#todos").on("click", ".todoText", startEditing);
	$("#todos").on("click", ".saveItem", stopEditing);
	$("#newTodo").on("keypress", function(event){
		if(event.which === 13){
			addNewItem()
			event.preventDefault()
		}
	})

	function addNewItem(event){
		//GET VAL OF INPUT 
		let newToDotext = $("#newTodo").val()
		// alert(newToDotext)
		let newListItem = '<li><input class="completedItem" type= "checkbox"></input><span class="todoText">' + newToDotext + '</span><input type="text" class="editText"><button class="saveItem">Save</button><i class="far fa-trash-alt"></i></li>'
		//APPEND LI TO UL
		//$("#todos").append("<li>" + newToDotext + "</li>")
		//NEW APPEND W/ ICON
		$("#todos").append(newListItem)
		$("#newTodo").val("")
	}

	function deleteItem(event){
		$(this).parent().remove();
	}

	function completeItem(event){
		$(this).parent().toggleClass("done");
		$(this).sibling().css("display","none");
	}
	function startEditing(event){
		let currentText = $(this).parent().find(".todoText").text()
		$(this).parent().find(".editText").val(currentText)
		$(this).parent().find(".editText").show()
		$(this).parent().find(".saveItem").show()
		$(this).parent().find(".todoText").hide()
	}
	function stopEditing(event){
		$(this).hide()
		let editedItem = $(this).parent().find(".editText").val()
		$(this).parent().find(".editText").hide()
		$(this).parent().find(".todoText").text(editedItem)
		$(this).parent().find(".todoText").show()
	}
	function clearCompletedItem(event){
		$(".done").hide()
	}
});