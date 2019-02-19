import React, { Component } from "react"
import axiosInstance from "../../axios-orders"
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary"
import BuildControls from "./../../components/Burger/BuildControls/BuildControls"
import Burger from "./../../components/Burger/Burger"
import Modal from "./../../components/UI/Modal/Modal"
import Spinner from "./../../components/UI/Spinner/Spinner"
import withErrorHandler from "./../../hoc/withErrorHandler/withErrorHandler"

const INGREDIENT_PRICES = {
   salad: 0.5,
   cheese: 0.4,
   meat: 1.3,
   bacon: 0.7,
}

class BurgerBuilder extends Component {
   state = {
      ingredients: null,
      totalPrice: 4,
      purchasable: false,
      purchasing: false,
      loading: false,
      error: false,
   }

   componentWillMount(props) {
      this.setState({
         ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 1,
            meat: 1,
         },
      })
      axiosInstance
         .get("ingredients.json")
         .then(response => {
            console.log(this.state.ingredients)
            this.setState({ ingredients: response.data })
         })
         .catch(error => {
            this.setState({ error: true })
            console.log(error)
         })
   }

   updatePurchaseState = ingredients => {
      const sum = Object.keys(ingredients)
         .map(igKey => {
            return ingredients[igKey]
         })
         .reduce((sum, el) => {
            return sum + el
         }, 0)

      this.setState({ purchasable: sum > 0 })
      console.log(sum)
   }

   addIngredientHandler = type => {
      const updatedCount = this.state.ingredients[type] + 1
      const updatedIngredients = { ...this.state.ingredients }
      updatedIngredients[type] = updatedCount

      /* Calculate the New Price */
      const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type]
      this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
      this.updatePurchaseState(updatedIngredients)
   }

   removeIngredientHandler = type => {
      if (this.state.ingredients[type] === 0) return
      const updatedCount = this.state.ingredients[type] - 1
      const updatedIngredients = { ...this.state.ingredients }
      updatedIngredients[type] = updatedCount

      /* Calculate the New Price */
      const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type]
      this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
      this.updatePurchaseState(updatedIngredients)
   }

   purchaseHandler = () => {
      this.setState({ purchasing: true })
   }

   cancelPurchaseHandler = () => {
      this.setState({ purchasing: false })
   }

   continuePurchaseHandler = () => {
      this.setState({ loading: true })
      const order = {
         ingredients: this.state.ingredients,
         price: this.state.totalPrice,
         customer: {
            name: "Max",
            address: {
               address: "Testreet 1",
               zipCode: "324324",
               country: "Germany",
            },
            email: "goxr3plus@gmail.com",
         },
         deliveryMethod: "fastest",
      }

      //Firebase specific
      axiosInstance
         .post("/orders.json", order)
         .then(response => this.setState({ loading: false, purchasing: false }))
         .catch(error => this.setState({ loading: false, purchasing: false }))
      // alert("You purchased bitch!")
   }

   render() {
      const disabledInfo = {
         ...this.state.ingredients,
      }

      for (let key in disabledInfo) disabledInfo[key] = disabledInfo[key] <= 0

      let orderSummary = null
      let burger = this.state.error ? <p style={{ textAlign: "center" }}> Ingredients can't be loaded </p> : <Spinner />
      if (this.state.ingredients !== null) {
         // Burger
         burger = (
            <>
               <Burger ingredients={this.state.ingredients} />
               <BuildControls
                  disabledInfo={disabledInfo}
                  add={this.addIngredientHandler}
                  remove={this.removeIngredientHandler}
                  totalPrice={this.state.totalPrice}
                  purchasable={this.state.purchasable}
                  purchaseHandler={this.purchaseHandler}
               />
            </>
         )

         // OrderSummary
         orderSummary = this.state.loading ? (
            <Spinner />
         ) : (
            <OrderSummary
               totalPrice={this.state.totalPrice.toFixed(2)}
               ingredients={this.state.ingredients}
               cancelPurchaseHandler={this.cancelPurchaseHandler}
               continuePurchaseHandler={this.continuePurchaseHandler}
            />
         )
      }

      if (this.state.loading) orderSummary = <Spinner />

      return (
         <>
            <Modal show={this.state.purchasing} cancelPurchaseHandler={this.cancelPurchaseHandler}>
               {orderSummary}
            </Modal>
            {burger}
         </>
      )
   }
}

export default withErrorHandler(BurgerBuilder, axiosInstance)
