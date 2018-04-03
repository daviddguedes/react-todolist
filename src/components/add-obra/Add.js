import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class Add extends React.Component {
  coords = {};
  state = {
    title: ""
  };

  handleTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  handleLatitude(e) {
    this.coords.latitude = e.target.value;
  }

  handleLongitude(e) {
    this.coords.longitude = e.target.value;
  }

  async addItem() {
    await this.setState({
      ...this.state,
      coords: this.coords
    });

    this.props.handle.fnSaveItem(this.state);
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="title">Título</Label>
          <Input
            type="text"
            name="title"
            id="title"
            onChange={e => {
              this.handleTitle(e);
            }}
          />
        </FormGroup>

        <FormGroup>
          <Label for="latitude">Latitude</Label>
          <Input
            type="text"
            name="latitude"
            id="latitude"
            onChange={e => {
              this.handleLatitude(e);
            }}
          />
        </FormGroup>

        <FormGroup>
          <Label for="longitude">Longitude</Label>
          <Input
            type="text"
            name="longitude"
            id="longitude"
            onChange={e => {
              this.handleLongitude(e);
            }}
          />
        </FormGroup>

        <Button onClick={() => this.addItem()}>Add</Button>
      </Form>
    );
  }
}

export default Add;
