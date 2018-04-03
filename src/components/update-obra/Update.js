import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class Update extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      title: "",
      latitude: "",
      longitude: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.item.id,
      title: nextProps.item.title,
      latitude: nextProps.item.coords[0],
      longitude: nextProps.item.coords[1]
    });
  }

  updateItem() {
    this.props.handle.fnUpdateItem(this.state);
  }

  handleTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  handleLatitude(e) {
    this.setState({
      latitude: e.target.value
    });
  }

  handleLongitude(e) {
    this.setState({
      longitude: e.target.value
    });
  }

  render() {
    let { title, latitude, longitude } = this.state;

    return (
      <Form>
        <h4>Update Item</h4>
        <FormGroup>
          <Label for="title">Título</Label>
          <Input
            type="text"
            name="title"
            id="title"
            onChange={e => {
              this.handleTitle(e);
            }}
            value={title}
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
            value={latitude}
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
            value={longitude}
          />
        </FormGroup>

        <Button onClick={() => this.updateItem()}>Alterar</Button>
      </Form>
    );
  }
}

export default Update;
