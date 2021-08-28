import React from 'react'

export default class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pressed: false
        };
    };

    render() {
        const { title, price, description, color, isSelected } = this.props;
        //const { ...props } = this.props;

        const handleChange = () => {
            this.setState({ pressed: !this.state.pressed });
        }


        return (

            //<div className={"card " + (isSelected ? "selected" : "")}>
            <div onClick={handleChange} className={this.state.pressed ? "card selected" : "card"}>
                <div className="card-body">
                    {/* <div className="card-color"> */}
                    <div className={color}>
                        <h4 className="card-title">Безлимитный {title}</h4>
                        <p className="card-price">руб <span>{price}</span> /мес</p>
                    </div>
                    <div className="card-description">до {description} Мбит/сек</div>
                </div>
                <div className="card-footer">
                    <p className="card-text">Объем включенного трафика не ограничен</p>
                    {/* {addedToCart
                        ? <AddToCartForm addedToCart={addedToCart} />
                        : <AddToCartButton />
                    } */}
                </div>
            </div >

        );
    }
}