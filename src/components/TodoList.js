import React, {Component} from "react";
import TodoItems from "./TodoItems";

class TodoList extends Component {
	constructor(props){
		super(props);
		this.state = {items: []};
		this.ajouterTache = this.ajouterTache.bind(this);
		this.supprimerTache = this.supprimerTache.bind(this);
	}
	ajouterTache(e){
		if(this._inputElement.value !== ""){
			var newItem = {
				text: this._inputElement.value, 
				key: Date.now()
			};
	
			this.setState((prevState) => {
				return {
					items: prevState.items.concat(newItem)
				};
			});
		
			this._inputElement.value = "";
		}
		console.log(this.state.items);
		e.preventDefault();
	}
	supprimerTache(key){
		var filteredItems = this.state.items.filter(function(item) {
			return (item.key !== key);
		});
		
		this.setState({
			items: filteredItems
		});
	}
	render(){
		return(
			<div className="todoListMain">
			  <div className="header">
			    <form onSubmit={this.ajouterTache}>
			      <input ref={(a) => this._inputElement = a} placeholder="Entrer une tâche:">
			      </input>
			      <button type="submit">AJOUTER</button>
			    </form>
			    <TodoItems entries={this.state.items} delete={this.supprimerTache} />
			  </div>
		        </div>
		);
	}
}

export default TodoList; 
