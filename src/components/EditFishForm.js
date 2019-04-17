import React from "react";
import PropTypes from "prop-types";

class EditFishForm extends React.Component {

    static propTypes = {
        fish: PropTypes.shape({
            name: PropTypes.string,
            status: PropTypes.string,
            desc: PropTypes.string,
            image: PropTypes.string,
            price: PropTypes.number,
        }),
        index: PropTypes.string,
        updateFish: PropTypes.func,
    };

    handleChange = event => {
        // update that fish
        // 1. take a copy of the current fish
        const updatedFish = {
            ...this.props.fish,
            [event.currentTarget.name]: event.currentTarget.value
        };
        this.props.updateFish(this.props.index, updatedFish);
    };

    render() {
        return (
        <div className="fish-edit">
            <input
                name="name"
                type="text"
                onChange={this.handleChange}
                value={this.props.fish.name}
            />
            <input
                name="price"
                type="text"
                onChange={this.handleChange}
                value={this.props.fish.price}
            />
            <select
                name="status"
                type="text"
                onChange={this.handleChange}
                value={this.props.fish.status}
            >
                <option value="available">New!</option>
                <option value="unavailable">Sold Out!</option>
            </select>
            <textarea
                name="desc"
                onChange={this.handleChange}
                value={this.props.fish.desc}
            />
            <input
                name="image"
                type="text"
                onChange={this.handleChange}
                value={this.props.fish.image}
            />
            <button onClick={() => this.props.deleteFish(this.props.index)}>
                Remove Magazine
            </button>
        </div>
    )}
};

export default EditFishForm;
