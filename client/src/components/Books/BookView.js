import React, { Component } from 'react';
import { getBookWithReviewer, clearBookWithReviewer } from '../../actions'
import { connect } from 'react-redux';

class BookView extends Component {

	componentDidMount() {
		this.props.dispatch(getBookWithReviewer(this.props.match.params.id))
	}

	componentWillUnmount() {
		this.props.dispatch(clearBookWithReviewer());
	}

	renderBook = (book, reviewer) => {
		return (
			book ?
				<div className="br_container">
					<div className="br_header">
						<h2>{book.name}</h2>
						<h5>{book.author}</h5>
						<div className="br_reviewer">
							<span>Review by: </span>  {reviewer.name} {reviewer.lastname}
						</div>
					</div>
					<div className="br_review">
						{book.review}
					</div>
					<div className="br_box">
						<div className="left">
							<div>
								<span>Pages:</span> {book.pages}
							</div>
							<div>
								<span>Price:</span> {book.price}
							</div>
						</div>
						<div className="right">
							<span>Rating:</span> 
							<div>
								{book.rating}/5
							</div>
						</div>
					</div>
			</div>
				: null
		)
	}

	render() {
		let { book, reviewer } = this.props.books
		return (
			<div>
				{this.renderBook(book, reviewer)}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		books: state.books
	}
}

export default connect(mapStateToProps)(BookView);