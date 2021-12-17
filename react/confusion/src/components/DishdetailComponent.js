import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    render() {
        if (this.props.dishr != null) {
            return (
                <div className="row">
                    <div className="col-md-5 col-12 m-1">
                        {this.renderDish(this.props.dishr)}
                    </div>
                    <div className="col-md-5 col-12 m-1">
                        {this.renderComments(this.props.dishr.comments)}
                    </div>
                </div>
            );
        }
        else
            return (
                <div>Hello Dish</div>
            )
    }
    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div>No shit</div>
            );
    }
    renderComments(comments) {
        if (comments != null) {
            const list = comments.map((comments) => {
                return (
                    <ul id={comments.id} className="list-unstyled">
                        <li>{comments.comment}</li>
                        <li>{comments.author}</li>
                    </ul>
                );
            });
            return (
                <div>
                    <h4>Comments</h4>
                    <div>{list}</div>
                </div>
            );
        }
        else 
        return(
            <div>No comments</div>
        );
}
}

export default DishDetail; 