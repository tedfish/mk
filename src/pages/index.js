import React, { useState } from "react";
import firebase from "../components/firebase";
import Layout from '../components/layout'
import Search from '../components/search'
import Features from '../components/features'
import Seo from '../components/seo'
import ItemList from "../components/itemlist";
import AddItemForm from "../components/additemform";
import "../styles/global.css";
import UpdateItem from "../components/updateitem";
import Container from '@material-ui/core/Container';
export default () => {
  const initialItemState = [
    { id: null, name: "", type: "", qty: "", description: "" }
  ];
  const [editing, setEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState(initialItemState);
  const editItem = item => {
    setEditing(true);
    setCurrentItem({
      id: item.id,
      name: item.name,
      type: item.type,
      qty: item.qty,
      description: item.description
    });
  };
  const updateItem = ({ currentItem }, updatedItem) => {
    console.log(
      "It send the item to the updated item function:",
      updatedItem,
      currentItem.id
    );
    setEditing(false);
    firebase
      .firestore()
      .collection("items")
      .doc(currentItem.id)
      .update(updatedItem);
  };
  return (
    <Layout>
      <Seo title="Easy - Useful - Fun" />
      <Search />
      <Features />
      <Container>
      <ItemList />
      <h2>Add Item</h2>
      {editing ? (
        <UpdateItem
          setEditing={setEditing}
          currentItem={currentItem}
          updateItem={updateItem}
        />
      ) : (
        <AddItemForm />
      )}
      </Container>
    </Layout>
  );
};