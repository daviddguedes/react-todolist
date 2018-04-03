import React from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

class Item extends React.Component {
  state = { obras: [], itemsArray: [] };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  async componentWillReceiveProps(nextProps) {
    await this.setState({ obras: nextProps.obras, itemsArray: [] });
    this.montItems();
  }

  montItems() {
    let { obras } = this.state;
    let itemsArray1 = [];

    for (let i in obras) {
      let id = obras[i].id;
      let latitude = obras[i].value.coords.latitude;
      let longitude = obras[i].value.coords.longitude;
      let title = obras[i].value.title;

      itemsArray1.push({
        id: id,
        title: title,
        coords: [latitude, longitude]
      });
    }

    this.setState({ itemsArray: itemsArray1 });
  }

  handleClick(item) {
    this.props.global.items.fnCallback(item);
  }

  deleteItem(item) {
	  this.props.global.items.fnDeleteItem(item);
  }

  render() {
    let { itemsArray } = this.state;

    return (
      <div>
        <h4>List Items</h4>
        <ListGroup>
          {itemsArray
            ? itemsArray.map(r => {
                return <ListGroupItem key={r.id}>
                    <p>Nome: {r.title}</p>
                    <p>
                      Latitude: {r.coords[0]} | Longitude: {r.coords[1]}
                    </p>
                    <Button color="link" onClick={() => this.handleClick(r)}>
                      Edit
                    </Button>
                    <Button color="link" onClick={() => this.deleteItem(r)}>
                      Delete
                    </Button>
                  </ListGroupItem>;
              })
            : null}
        </ListGroup>
      </div>
    );
  }
}

export default Item;
