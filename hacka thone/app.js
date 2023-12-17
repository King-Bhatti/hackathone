import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
const firebaseConfig = {
    apiKey: "AIzaSyBisTDJZiR4Gwx5FgHxipBG28tP8f5sl2M",
    authDomain: "test1-2e387.firebaseapp.com",
    projectId: "test1-2e387",
    storageBucket: "test1-2e387.appspot.com",
    messagingSenderId: "728708237387",
    appId: "1:728708237387:web:ec78d76abb3310956ee5ce",
    measurementId: "G-3G0T2YS63Y"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const analytics = getAnalytics(app);

var list = document.getElementById("list");

function addTodo() {
    var todo_item = document.getElementById("todo-item");
    


    // create li tag with text node
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
   var myObject = {
        li: liText.nodeValue
      };
      
      // Add a new document with a generated id to Firestore
      var myObject = {
        todo: liText.nodeValue
      };
      
      // Wrap the code in an async function
      const addTodoToFirestore = async () => {
        // Add a new document with a generated id to Firestore
        const docRef = await addDoc(collection(db, "myobject"), myObject);
        console.log("Document written with ID: ", docRef.id);
      };
      
      // Call the async function
      addTodoToFirestore();


    // create delete button
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delBtn.setAttribute("class", "btn")
    delBtn.setAttribute("onclick", "deleteItem(this)")
    delBtn.appendChild(delText)

    // create edit button
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDIT")
    editBtn.appendChild(editText)
    editBtn.setAttribute("onclick", "editItem(this)")


    li.appendChild(delBtn)
    li.appendChild(editBtn)

    list.appendChild(li)

    todo_item.value = ""
}

function deleteItem(e) {
    e.parentNode.remove()
}

function editItem(e) {
  var val = prompt("Enter updated value",e.parentNode.firstChild.nodeValue)
  e.parentNode.firstChild.nodeValue = val;
}

function deleteAll() {
    list.innerHTML = ""
}