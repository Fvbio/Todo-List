import React, {Component} from "react";

class TodoItems extends Component {
	constructor(props){
		super(props);
		this.creerTache = this.creerTache.bind(this);
	}
	creerTache(item){
		return <li onClick={() => this.supprimer(item.key)} key={item.key}>{item.text}</li>
	}
	supprimer(key){
		this.props.delete(key);
	}
	render(){
		var todoEntries = this.props.entries;
		var listItems = todoEntries.map(this.creerTache);

		return(
			<ul className="theList">
				{listItems}
			</ul>
		);
	}
};

export default TodoItems;
