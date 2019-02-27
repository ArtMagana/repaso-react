import React, {Component} from 'react';
import firebase from 'firebase';

import Chisme from './Chisme';

var config = {
    apiKey: "AIzaSyB4f4KZRJi5Qn4GIuVnFPWWDSGMyKipBJs",
    authDomain: "ironchismes.firebaseapp.com",
    databaseURL: "https://ironchismes.firebaseio.com",
    projectId: "ironchismes",
    storageBucket: "ironchismes.appspot.com",
    messagingSenderId: "965686157715"
};

firebase.initializeApp(config);


class Firebase extends Component {

    state = {
        posts: [],
        titulo: '',
        chisme: ''
    }

    titulo = React.createRef()
    chisme = React.createRef()


    crearTitulo = () => {
        this.setState({titulo: this.titulo.current.value});
    }

    crearChisme = () => {
        this.setState({chisme: this.chisme.current.value});
    }

    crearPost = e => {
        e.preventDefault();
        firebase.database().ref(`post${Date.now()}`).set({
            titulo: this.state.titulo,
            chisme: this.state.chisme
        })
    }

    componentWillMount() {
        firebase.database().ref().on('value', snapshot => {
            
            let post = Object.values(snapshot.val()).map((e, i) => {
                return e;
            });
            this.setState({posts:post})
            console.log(post)
        });
    }


    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <form onSubmit={this.crearPost}>
                            <div className="form-group">
                                <input onChange={this.crearTitulo} ref={this.titulo} type="text" className="form-control" placeholder='Título del post' />
                                <br/>
                                <textarea onChange={this.crearChisme} ref={this.chisme} className="form-group" cols="30" rows="10"></textarea>
                                <input type="submit" className='btn btn-block btn-danger' value="Postear"/>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                        {
                            this.state.posts.map((post, index) => {
                                return <Chisme key={index} info={post} />
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }

}


export default Firebase;


