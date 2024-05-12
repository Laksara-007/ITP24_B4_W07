import React from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

class RoomDataView extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      showCreate: false,
      rooms: [],
      selectedRoom: [],
      type: "DELUX",
      description: "",
      price: 0,
    };
  }
  handleModal = () => {
    this.setState({ show: !this.state.show });
  };
  handleCreateModal = () => {
    this.setState({ showCreate: !this.state.showCreate });
  };
  loadTableData = () => {
    let tblRoom = [];

    axios({
      method: "get",
      url: "http://localhost:5000/api/v1/room",
      responseType: "stream",
    }).then((response) => {
      response.data.map((obj, index) => {
        tblRoom.push({
          ...obj,
          id: index + 1,
          actions: (
            <>
              {
                <div>
                  <Button
                    outline
                    color="primary"
                    onClick={() => this.editRow(obj)}
                  >
                    Edit
                  </Button>
                  {"  "}
                  <Button
                    outline
                    color="danger"
                    onClick={() => this.deleteRow(obj._id)}
                  >
                    Delete
                  </Button>
                </div>
              }
            </>
          ),
        });
      });
      this.setState({ rooms: tblRoom });
    });
  };
  deleteRow = (_id) => {
    axios({
      method: "delete",
      url: `http://localhost:5000/api/v1/room/${_id}`,
      responseType: "stream",
    }).then((response) => {
      this.loadTableData();
      alert("Successfully deleted");
    });
  };
  createHandler = () => {
    let { type, description, price } = this.state;
    axios({
      method: "post",
      url: `http://localhost:5000/api/v1/room/`,
      responseType: "stream",
      data: {
        type: type,
        description: description,
        price: price,
      },
    }).then(() => {
      this.loadTableData();
      alert("Successfully Updated");
      this.setState({
        showCreate: false,
      });
    });
  };
  editRow = (selectedRow) => {
    console.log(selectedRow);
    this.setState({
      show: !this.state.show,
      selectedRoom: selectedRow,
      type: selectedRow.type,
      description: selectedRow.description,
      price: selectedRow.price,
    });
  };
  submitHandler = () => {
    let { type, description, price, selectedRoom } = this.state;
    axios({
      method: "put",
      url: `http://localhost:5000/api/v1/room/${selectedRoom._id}`,
      responseType: "stream",
      data: {
        type: type,
        description: description,
        price: price,
      },
    }).then(() => {
      this.loadTableData();
      alert("Successfully Updated");
      this.handleModal();
    });
  };
  //state = { rooms: [] };

  componentDidMount() {
    this.loadTableData();
  }

  getValue = async (event) => {
    let value = event.target.value;
    this.setState({ [event.target.name]: value });
    console.log(this.state);
  };

  render() {
    let { rooms, selectedRoom, type, description, price } = this.state;
    console.log(this.state);
    const columns = [
      {
        name: "Type",
        selector: (row) => row.type,
      },
      {
        name: "Description",
        selector: (row) => row.description,
      },
      {
        name: "Price",
        selector: (row) => row.price,
      },
      {
        name: "Actions",
        selector: (row) => row.actions,
      },
    ];

    return (
      <div>
        <DataTable columns={columns} data={rooms} />
        <Button
          outline
          color="primary"
          style={{ margin: "10px" }}
          onClick={this.handleCreateModal}
        >
          Create Room
        </Button>
        <Modal isOpen={this.state.show} toggle={() => this.handleModal}>
          <ModalHeader toggle={this.handleModal}>Enter New values</ModalHeader>
          <ModalBody>
            <Form>
            <FormGroup>
                <Label for="Type">Type</Label>
                <Input
                  name="type"
                  id="type"
                  value={type}
                  onChange={this.getValue}
                  type="select"
                >
                  <option>DELUX</option>
                  <option>SUPREAME</option>
                  <option>VIP</option>
                  <option>STANDARD</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  type="Text"
                  name="description"
                  id="UpdateDescription"
                  value={description}
                  onChange={this.getValue}
                />
              </FormGroup>
              <FormGroup>
                <Label for="Type">Price</Label>
                <Input
                  type="number"
                  name="price"
                  id="UpdatePrice"
                  value={price}
                  onChange={this.getValue}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button outline color="primary" onClick={this.submitHandler}>
              Submit
            </Button>{" "}
            <Button outline color="secondary" onClick={this.handleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>

        {/* create modal */}
        <Modal
          isOpen={this.state.showCreate}
          toggle={() => this.handleCreateModal}
        >
          <ModalHeader toggle={this.handleCreateModal}>
            create new room
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="Type">Type</Label>
                <Input
                  name="type"
                  id="type"
                  value={type}
                  onChange={this.getValue}
                  type="select"
                >
                  <option>DELUX</option>
                  <option>SUPREME</option>
                  <option>VIP</option>
                  <option>STANDARD</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  type="Text"
                  name="description"
                  id="UpdateDescription"
                  onChange={this.getValue}
                />
              </FormGroup>
              <FormGroup>
                <Label for="Type">Price per night</Label>
                <Input
                  type="number"
                  name="price"
                  id="UpdatePrice"
                  onChange={this.getValue}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button outline color="primary" onClick={this.createHandler}>
              Submit
            </Button>{" "}
            <Button outline color="secondary" onClick={this.handleCreateModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default RoomDataView;
