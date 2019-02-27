import React, {Component} from 'react';



class TodoList extends Component {

    componentDidUpdate() {
        this.props.inputElement.current.focus()
    }

    render() {
        return(
            <div>
                <form onSubmit={this.props.addItem}>
                    <input
                        placeholder="Task"
                        ref={this.props.inputElement}
                        value={this.props.currentItem.text}
                        onChange={this.props.handleInput} />
                    <button type="submit"> Add Task </button>
                </form>
                
            </div>
        );
    }
}

export default TodoList;