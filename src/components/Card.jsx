import React from 'react'

export default class Card extends React.Component {
    render() {
        const { title, price, description, isSelected } = this.props;

        return (

            <div className={"card " + (isSelected ? "selected" : "")}>
                <div className="card-body">
                    <div className="card-color">
                        <h4 className="card-title">Безлимитный {title}</h4>
                        <p className="card-price">руб <span>{price}</span> /мес</p>
                    </div>
                    <p className="card-description">до {description} Мбит/сек</p>
                </div>
                <div className="card-footer">
                    <p className="card-text">Объем включенного трафика не ограничен</p>
                    {/* {addedToCart
                        ? <AddToCartForm addedToCart={addedToCart} />
                        : <AddToCartButton />
                    } */}
                </div>
            </div>

        );
    }
}