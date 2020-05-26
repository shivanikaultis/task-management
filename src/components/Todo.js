import React, {Component} from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.listItems = this.props.listItems.filter(list => list.name === 'Todo');
    }

    render() {
        return (
            <div className= "list-container">
                <div>{this.listItems && this.listItems.length> 0 ? this.listItems[0].name : null}</div>
                {this.listItems && this.listItems[0].cards.length > 0?this.listItems[0].cards.map((card) =>
                    (
                        <React.Fragment>
                        <div className="card-box">{card}
                            <div onClick={e => this.props.moveCardHandler(this.listItems[0].name, card)} className="move-state-indicator">Move card</div>
                            <div onClick={e => this.props.deleteCardHandler(this.listItems[0].name, card)} className="move-state-indicator">Delete</div>
                        </div>
                        </React.Fragment>
                    )
                ): null}
                <div className="add-card" onClick={(e)=>this.props.addCardHandler(this.listItems[0].name)}>+ Add a card</div>
            </div>
        );
    }
}
export default Todo;