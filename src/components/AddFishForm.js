import React from 'react'
import PropTypes from "prop-types";

class AddFishForm extends React.Component {

    static propTypes = {
        addFish: PropTypes.func
    };

    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createFish = event => {
        event.preventDefault();
        const fish = {
            name: this.nameRef.value.value,
            price: parseFloat(this.nameRef.value.value),
            status: this.nameRef.value.value,
            desc: this.nameRef.value.value,
            image: this.nameRef.value.value,
        };
        this.props.addFish(fish);
        // refresh the form
        event.currentTarget.reset();
    };

    render() {
        return (
    <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <input name="price" ref={this.priceRef} type="text" placeholder="Price" />
        <select name="status" ref={this.statusRef}>
            <option value="available">Fresh!</option>
            <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" ref={this.descRef} placeholder="Desc" />
        <input name="image" ref={this.imageRef} type="text" placeholder="Image" />
        <button type="submit">+ Add Fish</button>
    </form>
        );
    };
}


export default AddFishForm