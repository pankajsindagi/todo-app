angular.module("todoApp", []).controller("todoCtrl", function () {

	this.editMode = false;

	this.todos = [
		"Todo 1",
		"Todo 2",
		"Todo 3"
	];

	this.addNewTodo = function () {
		if (this.editMode) {
			alert("Disable Edit Mode")
		} else {
			if (this.newTodo) {
				this.todos.push(this.newTodo);
				this.newTodo = "";
			} else {
				alert("Please enter a Todo")
			}
		}
	}

	this.enableEditMode = function () {
		this.editMode = !this.editMode;
	}

	this.deleteTodo = function (index) {
		this.todos.splice(index, 1);
	}
});
