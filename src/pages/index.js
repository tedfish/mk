import React from 'react'
import Layout from '../components/layout'
import Search from '../components/search'
import Features from '../components/features'
import Seo from '../components/seo'
// import firebase from "../components/firebase"
import ItemList from "../components/itemlist"
import AddItemForm from '../components/additemform'
import Container from '@material-ui/core/Container';
// import { makeStyles } from '@material-ui/core/styles'
const IndexPage = () => {
  // firebase
  //   .firestore()
  //   .collection("items")
  //   .add({
  //     name: "Heineken",
  //     type: "beer",
  //     qty: 5,
  //     description:
  //       "Pale lager beer with 5% alcohol by volume produced by the Dutch brewing company Heineken International",
  //   })
  //   .then(ref => {
  //     console.log("Added document with ID: ", ref.id)
  //   })
  return (
    <Layout>
      <Seo title="Easy - Useful - Fun" />
      <Search />
      <Features />
      <Container>
      <ItemList />
      <h2>Add Item</h2>
      <AddItemForm />
      </Container>
    </Layout>
  )
}
export default IndexPage