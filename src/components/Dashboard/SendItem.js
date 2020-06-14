import React, {Component} from "react";
import Navbar from "../Layout/Navbar";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import {Select} from "../Input";
import * as uuid from "uuid";
import {PostItem} from "../../store/actions/ItemActions";
import {connect} from "react-redux";

const google = window.google;
class SendItem extends Component {
  state = {
    name: "",
    location: "",
    destination: "",
    size: "",
    itemId: uuid.v4(),
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // this.props.sendItem(this.state);
  };

  handleChangeDestination = (e) => {
    this.setState({
      destination: e.target.value,
    });
  };

  static propTypes = {
    placeholder: PropTypes.string,
    onPlacesChanged: PropTypes.func,
  };

  render() {
    return (
      <div>
        <Navbar />
        <section className="container pt-6 pb-4">
          <form className="row" action="" onSubmit={this.handleSubmit}>
            <div className="col-sm-6 offset-sm-3">
              <div className="card border-primary">
                <h3 className="card-header border-primary text-center">
                  Send An Item
                </h3>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="name">What do you want to send?</label>
                    <input
                      id="name"
                      className="form-control"
                      type="text"
                      onChange={this.handleChange}
                      placeholder="Name/Description of Item to be sent"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="destination">I am sending to</label>
                    <input
                      id="destination"
                      ref="input"
                      value={this.state.destination}
                      onChange={this.handleChangeDestination}
                      className="form-control"
                      type="text"
                      placeholder="Search Destination"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="location">I am sending from</label>
                    <input
                      id="location"
                      ref="location"
                      onChange={this.handleChange}
                      className="form-control"
                      type="text"
                      placeholder="Seach Item current location"
                      required
                    />
                  </div>
                  <Select
                    label="Size of Item"
                    col="1"
                    id="size"
                    onChange={this.handleChange}
                    options={[
                      {value: "1", option: "1.5kg and less"},
                      {value: "2", option: "1.5kg to 3kg"},
                      {value: "3", option: "3kg to 5kg"},
                      {value: "4", option: "3kg to 5kg"},
                      {value: "5", option: "5kg to 10kg"},
                      {value: "6", option: "more than 10kg"},
                    ]}
                  />
                </div>
                <div className="card-footer d-flex justify-content-end">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Send Item"
                  />
                </div>
              </div>
            </div>

            {/* <div id="map"></div> */}
          </form>
        </section>
      </div>
    );
  }
  componentDidMount() {
    var input = ReactDOM.findDOMNode(this.refs.input);
    var input2 = ReactDOM.findDOMNode(this.refs.location);
    this.sendTo = new google.maps.places.Autocomplete(input);
    google.maps.event.addListener(
      this.sendTo,
      "place_changed",
      () => {
        this.setState({
          destination: this.sendTo.getPlace().formatted_address,
        });
      }
    );
    this.sendFrom = new google.maps.places.Autocomplete(input2);
    google.maps.event.addListener(
      this.sendFrom,
      "place_changed",
      () => {
        this.setState({
          location: this.sendFrom.getPlace().formatted_address,
        });
      }
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendItem: (creds) => dispatch(PostItem(creds)),
  };
};

export default connect(null, mapDispatchToProps)(SendItem);
