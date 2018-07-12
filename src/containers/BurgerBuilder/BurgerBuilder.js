import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner.styled';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';

// redux, react-redux
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

export class BurgerBuilder extends Component {
	state = {
		purchasing: false
	};

	componentDidMount() {
		this.props.onInitIngredients();
	}

	purchaseCancelHandler = () => {
		this.setState({
			purchasing: false
		});
	};

	purchaseContinueHandler = () => {
		this.props.onInitPurchase();
		this.props.history.push('/checkout');
	};

	purchaseHandler = () => {
		if (this.props.isAuthenticated) {
			this.setState({
				purchasing: true
			});
		} else {
			this.props.onSetAuthRedirectPath('./checkout');
			this.props.history.push('/auth');
		}
	};

	updatePurchaseState = (ingredients) => {
		const sum = Object.keys(ingredients).map((igKey) => ingredients[igKey]).reduce((sum, el) => {
			return sum + el;
		}, 0);

		return sum > 0;
	};

	render() {
		const disabledInfo = {
			...this.props.ingredients
		};

		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		let orderSummary = null;
		let burger = this.props.error ? <p> ingredients can 't be loaded</p> : <Spinner />;

		if (this.props.ingredients) {
			burger = (
				<Fragment>
					<Burger ingredients={this.props.ingredients} />;
					<BuildControls
						ingredientRemoved={this.props.onIngredientRemoved}
						ingredientAdded={this.props.onIngredientAdded}
						disabled={disabledInfo}
						price={this.props.totalPrice}
						purchaseable={this.updatePurchaseState(this.props.ingredients)}
						ordered={this.purchaseHandler}
						isAuth={this.props.isAuthenticated}
					/>
				</Fragment>
			);

			orderSummary = (
				<OrderSummary
					purchaseCancelled={this.purchaseCancelHandler}
					purchaseContinued={this.purchaseContinueHandler}
					ingredients={this.props.ingredients}
					price={this.props.totalPrice}
				/>
			);
		}

		return (
			<Fragment>
				<Modal modalClosed={this.purchaseCancelHandler} show={this.state.purchasing}>
					{orderSummary}
				</Modal>
				{burger}
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		ingredients: state.burgerBuilder.ingredients,
		totalPrice: state.burgerBuilder.totalPrice,
		error: state.burgerBuilder.error,
		isAuthenticated: state.auth.token !== null
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onIngredientAdded: (ingredientName) => dispatch(actions.addIngredient(ingredientName)),
		onIngredientRemoved: (ingredientName) => dispatch(actions.removeIngredient(ingredientName)),
		onInitIngredients: () => dispatch(actions.initIngredients()),
		onInitPurchase: () => dispatch(actions.purchaseInit()),
		onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
