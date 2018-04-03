import React from "react";
import firebaseApp from "./../../FirebaseApp";
import Item from "./../item/Item";

export default class Listagem extends React.Component {
  itemsRef;
  state = { obras: {} };

  constructor(props) {
    super(props);
    this.handleObras = this.handleObras.bind(this);
  }

  componentWillUnmount() {
    firebaseApp.removeBinding(this.itemsRef);
  }

  componentDidMount() {
    this.itemsRef = firebaseApp.database().ref("obras");
    this.handleObras();
  }

  handleObras() {
    this.itemsRef.on("value", snap => {
      let data = [];
      snap.forEach(sn => {
        data.push({
          id: sn.key,
          value: sn.val()
        });
      });

      this.setState({
        obras: data
      });
    });
  }

  render() {
    let { obras } = this.state;
    let comp = obras ? (
      <Item
        global={this.props}
        obras={obras}
        itemUpdate={this.props.itemUpdate}
      />
    ) : null;

    return <div>{comp}</div>;
  }
}
