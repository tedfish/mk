import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import "../styles/global.css";
const useItems = () => {
  const [items, setItems] = useState([]); //useState() hook, sets initial state to an empty array
  useEffect(() => {
    firebase
      .firestore() //access firestore
      .collection("items") //access "items" collection
      .onSnapshot(snapshot => {
        //You can "listen" to a document with the onSnapshot() method.
        const listItems = snapshot.docs.map(doc => ({
          //map each document into snapshot
          id: doc.id, //id and data pushed into items array
          ...doc.data() //spread operator merges data to id.
        }));
        setItems(listItems); //items is equal to listItems
      });
      const unsubscribe = firebase
      .firestore() 
      .collection("items") 
      .onSnapshot(snapshot => {
        const listItems = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))
        setItems(listItems)
      })
      //called the unsubscribe--closing connection to Firestore.
    return () => unsubscribe()
  }, []);
  return items;
};
const ItemList = () => {
  const listItem = useItems();
  return (
    <table className="tg">
      <tbody>
        <tr>
          <td className="tg-ycr8">Name</td>
          <td className="tg-ycr8">Type</td>
          <td className="tg-i81m">Qty</td>
          <td className="tg-a02x">Description</td>
        </tr>
      </tbody>
      {listItem.map(item => (
        <tbody key={item.id}>
          <tr>
            <td className="tg-ycr8">{item.name}</td>
            <td className="tg-ycr8">{item.type}</td>
            <td className="tg-i81m">{item.qty}</td>
            <td className="tg-a02x">{item.description}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};
export default ItemList;