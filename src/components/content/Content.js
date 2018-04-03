import React from "react";

import { Container, Row, Col } from "reactstrap";

import Listagem from "./../listagem-obras/Listagem";
import Update from "./../update-obra/Update";
import Add from "./../add-obra/Add";

import firebaseApp from "./../../FirebaseApp";

import CSS from "./Content.css";

class Content extends React.Component {
  state = {
    itemUpdate: {},
    fnCallback: propsFromChild => {
      this.setUpdateItem(propsFromChild);
    },
    fnUpdateItem: item => {
      this.updateItem(item);
    },
    fnSaveItem: item => {
      this.saveItem(item);
    },
    fnDeleteItem: item => {
      this.deleteItem(item);
    }
  };

  componentDidMount() {
    this.obrasDb = firebaseApp.database();
  }

  saveItem(item) {
    this.obrasDb.ref("obras").push(item);
  }

  setUpdateItem(item) {
    this.setState({
      itemUpdate: item
    });
  }

  updateItem(item) {
    this.obrasDb.ref("obras/" + item.id).update({ title: item.title });
    this.obrasDb
      .ref("obras/" + item.id + "/coords")
      .update({ latitude: item.latitude, longitude: item.longitude });
  }

  deleteItem(item) {
    this.obrasDb.ref("obras/" + item.id).remove();
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md="4" style={{ backgroundColor: "#cdcdcd" }}>
            <Listagem items={this.state} />
          </Col>
          <Col md="4" style={{ backgroundColor: "#ececec" }}>
            <Update item={this.state.itemUpdate} handle={this.state} />
          </Col>
          <Col md="4" style={{ backgroundColor: "#9e9e9e" }}>
            <h4>Add new Item</h4>
            <Add handle={this.state} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Content;
