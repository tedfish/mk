import React from "react";
import Layout from '../components/layout'
import Search from '../components/search'
import Features from '../components/features'
import Seo from '../components/seo'
// import firebase from "../components/firebase"
// import ItemList from "../components/itemlist"
// import AddItemForm from '../components/additemform'
// import UpdateItem from "../components/updateitem";
import Container from '@material-ui/core/Container';
// import { makeStyles } from '@material-ui/core/styles'
const IndexPage = () => {
  // const initialItemState = [
  //   { id: null, name: "", type: "", qty: "", description: "" }
  // ];
  // const [editing, setEditing] = useState(false);
  // const [currentItem, setCurrentItem] = useState(initialItemState);
  // const editItem = item => {
  //   setEditing(true);
  //   setCurrentItem({
  //     id: item.id,
  //     name: item.name,
  //     type: item.type,
  //     qty: item.qty,
  //     description: item.description
  //   });
  // };
  // const updateItem = ({ currentItem }, updatedItem) => {
  //   console.log(
  //     "It send the item to the updated item function:",
  //     updatedItem,
  //     currentItem.id
  //   );
  //   setEditing(false);
  //   firebase
  //     .firestore()
  //     .collection("items")
  //     .doc(currentItem.id)
  //     .update(updatedItem);
  // };
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
      {/* <ItemList editItem={editItem} />
      <h2>Add Item</h2>
      {editing ? (
        <UpdateItem
          setEditing={setEditing}
          currentItem={currentItem}
          updateItem={updateItem}
        />
      ) : (
        <AddItemForm />
      )} */}
      </Container>
    </Layout>
  )
}
export default IndexPage