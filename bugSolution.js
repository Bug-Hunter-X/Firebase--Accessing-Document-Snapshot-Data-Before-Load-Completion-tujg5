**Corrected Code (JavaScript):**

```javascript
db.collection('users').doc('someId').get().then((doc) => {
  if (doc.exists) {
    const userName = doc.data().name;
    console.log(userName);
  } else {
    console.log('No such document!');
  }
}).catch((error) => {
  console.error('Error getting document:', error);
});
```

**Corrected Code (Swift):**

```swift
db.collection("users").document("someId").getDocument { (document, error) in
    if let document = document, let data = document.data(), let userName = data["name"] as? String {
        print(userName)
    } else {
        print("No such document or name field")
    }
}
```
This corrected code utilizes the `.then()` method for promises to handle the asynchronous data retrieval and error handling. Alternatively, `async/await` can be used for better readability.