import React, {Component, Fragment} from 'react';
import './styles.css';

import TodoItem from './TodoItem';

class TodoList extends Component {

    state = {
        tareas: [],
        tarea: ''
    }

    tarea = React.createRef();

    guardarTarea = e => {
        // console.log(e.target.value)
        // let tareas = [...this.state.tareas];
        this.setState({
            tarea: e.target.value
        })
    }

    agregarTarea = e => {
        e.preventDefault();

        let tareas = [...this.state.tareas];
        tareas.push(this.state.tarea)

        this.setState({
            tareas
        });
    }

    render() {
        return(
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="form offset-md-3 col-xs-12 col-md-6">
                            <form onSubmit={this.agregarTarea}>
                                <div className="form-group">
                                    <input ref={this.tarea} onChange={this.guardarTarea} type="text" className="form-control"  placeholder="¿Qué es lo que vas hacer?" />
                                    <input type="submit" value="Agregar tarea"/>
                                </div>
                                <div>
                                    {
                                        this.state.tareas.map((tarea, index) => {
                                            return <TodoItem tarea={tarea} key={index} />
                                        })
                                    }
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

}








export default TodoList;