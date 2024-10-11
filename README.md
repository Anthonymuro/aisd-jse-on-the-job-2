# JavaScript Essentials On the Job


## Project Description 📄

Welcome back to your **JavaScript Essentials** "On The Job" project! This week, you’ll build on the concepts from last time by learning how to work with **arrays** to manage and display dynamic data. Arrays are crucial for handling lists of items—whether products, tasks, or messages—and this project will help you understand how to manipulate and update these data sets effectively.

In this project, you will:
  - **Create arrays** that store products and their details.
  - **Add new items** to the arrays using the `push` method.
  - **Remove items** when necessary using the `pop` method.
  - **Extract portions of the data** with the `slice` method.
  - **Combine arrays** using the `concat` method.

By the end of this assignment, you’ll have hands-on experience in dynamically managing data and preparing it for communication purposes—whether it's an inventory update, weekly report, or promotional message.

---

## Scenario 🌟

You’ve been tasked with creating a message to send out to clients, detailing the **available products** for the week, their **prices**, and your **store hours**. As products are added or removed throughout the week, you need to ensure that the message is dynamically updated before it’s sent out.

Your responsibilities include:
1. **Listing Products and Prices**: Start by creating arrays that store all the current products and their prices.
2. **Updating Product Inventory**: Throughout the week, new products may arrive, and others may go out of stock. You’ll use array methods to dynamically add or remove products from the inventory.
3. **Highlighting Featured Products**: Use the `slice` method to select a few special items to highlight in the weekly message.
4. **Sending the Final Message**: After updating the arrays, combine the existing inventory with any new arrivals and finalize the message, ensuring it includes the products, prices, and store hours.

### Task Overview:
  - **Create and Display Products**: Build arrays for the products and their prices, and start by displaying the full inventory.
  - **Add New Products**: Use the `push` method to add new products as they come in during the week.
  - **Remove Out-of-Stock Products**: Use the `pop` method to remove any products that are no longer available.
  - **Feature Products**: Use the `slice` method to select a few products to feature in the message for the week.
  - **Update Inventory with New Arrivals**: Use the `concat` method to combine existing products with new ones before sending the final message.

  ## Resources 📦

Free stock images and videos can be downloaded at https://www.pexels.com.

Utilize documentation such as [W3 Schools](https://www.w3schools.com/) and [MDN](https://developer.mozilla.org/en-US/) for all things related to HTML and CSS.

Use AI tools such as ChatGPT and Claude to help you learn. As you integrate AI tools into your learning process, it's essential to use them responsibly. AI can be a powerful resource to assist you, but it’s important to ensure that you truly understand and engage with the content it generates. This will not only enhance your learning experience but also help you develop critical thinking and problem-solving skills.

## Checkpoint 2 ✋

## Getting Started 📄
In this assignment, you'll build the foundational logic that powers behind-the-scenes systems for generating dynamic emails in an eCommerce store. You'll use JavaScript **arrays** to manage product inventory, add new stock, remove unavailable items, and highlight featured products. By the end, you'll generate a dynamic message, just like the automated emails sent to customers, keeping them updated on your store's products, prices, and hours. This hands-on project mirrors real-world eCommerce tasks, giving you essential skills for managing dynamic data efficiently.

## Expected Project Structure 🏗️
Your folder name may vary based on your selection of the eCommerce store type.

```plaintext
PawsClawsPetStore_2/
│
├── index.js
├── README.md
```

## Deliverables ✅

## 1. **Create the Project Folder and Files**
  Again, Your folder name may vary based on your selection of the eCommerce store type.

  - [ ] Create a folder named `PawsClawsPetStore_2` to store all your project files.
  
  - [ ] Now `cd` into that new folder you created.
   
  - [ ] Inside the `PawsClawsPetStore_2` folder, create a file named `index.js`. This will be your main JavaScript file.

## 2. **Starting from Last Week's Data**
In this step, you will build upon the variables you created in last week's assignment. You will begin with the variables in your `index.js` file, which represent your store's name, products, prices, and store hours. The goal for this step is to remove the `console.log()` statements temporarily and focus on how to structure your data more efficiently for later use.

Your folder name may vary based on your selection of the eCommerce store type. 

### Example from Last Week (OTJ-1)

- [ ] Retrieve your variable code from the last OTJ assignment

**Remember, your code may vary. Below is an example from last week's OTJ-1 assignment.**

```javascript
const storeName = "Paws & Claws";
const storeType = "Pet Store";

const product1 = "Dog Food";
const product2 = "Cat Litter";
const product3 = "Bird Seed";
const product4 = "Fish Tank";
const product5 = "Hamster Cage";

const price1 = 29.99;
const price2 = 15.49;
const price3 = 12.99;
const price4 = 89.99;
const price5 = 34.50;

const storeHours = "Monday - Friday: 9 AM - 6 PM, Saturday: 10 AM - 4 PM, Sunday: Closed";
```

In this step, remove the `console.log()` statements for now. These variables will later be used to manage and manipulate the store's inventory dynamically.

---

## 3. **Starting Our Data Gathering for the Customer Message**

In this step, you will begin **gathering data** to generate the message that will go out to customers. Your task here is to retrieve the store details (name, type, and products) and log them. This will form the foundation of the message sent out about your store's offerings.

We’ll start by **logging the store details** to the console, preparing to provide important information such as the store name, type, and the products offered.

### Example Code for Step Three:

- [ ] Use `console.log()` to display a message introducing your store

**Remember, your code will vary based on your selection of the eCommerce store type and your specific variable names.**

```javascript
console.log(`Welcome to ${storeName}! We are the best ${storeType} in town.`);
console.log("Here are the products we currently offer:");
```

### What You Did in This Step:

  - **Gathering Information**: You started by retrieving the store’s name and type and preparing to send this information in the message.
  - **Logging to the Console**: You used `console.log()` to display the introductory message and prepare to showcase the product offerings.
  - **Preparing the Message**: This step sets up the basic structure for the message, ensuring that key store details are captured and displayed.
  
---

## 4. **Building Our Arrays and Logging Products and Prices**

In this step, we will build arrays from the variables representing your products and prices. This is the next step in **gathering data** for the message that will be sent to customers. We will also log the products and prices to the console to ensure that they are correctly set up.

### Example Code for Step Four:

- [ ] Build arrays from the variables you previously created

**Again, your code may vary based on your selection of the eCommerce store type and your specific variable names.**

```javascript
// Build arrays from the product and price variables
let products = [product1, product2, product3, product4, product5];
let prices = [price1, price2, price3, price4, price5];

// Display the initial product list
console.log("Products:", products);
console.log("Prices:", prices);
```

### What You Did in This Step:

 - **Created Arrays**: You created two new arrays, `products` and `prices`, using the original product and price variables.
- **Building Arrays**: You gathered the products and prices into arrays to make it easier to manage and display them.
- **Logging the Arrays**: You used `console.log()` to display the full list of products and their prices, ensuring that your data is properly structured for the upcoming message.
  
---

## 5. **Using Push to Add a Product to Our In-Stock List**

In this step, we will use the `push` method to add a new product and its price to our existing product and price arrays. This continues to build on the customer message that we're generating. By adding new products to our stock list, we ensure that the latest inventory is always up to date.

### Example Code for Step Five:

- [ ] Use the `push` method to add a new product to your store

**Your code may vary based on your selection of the eCommerce store type and the specific variable names you've used, but the push method will remain the same in structure**

```javascript
// Example of push: Add a new product to the store
products.push("Pet Shampoo");
prices.push(12.0);
console.log("We've added a new product! Products:", products);
console.log("Updated Prices:", prices);
```

### What You Did in This Step:
- **Adding New Products**: You used the `push` method to add a new product ("Pet Shampoo") and its price to your existing arrays.
- **Logging Updates**: You logged the updated products and prices to ensure that the new product and price were added correctly.
  
---

## 6. **Oops! Something is Out of Stock: Removing an Item from the Array**

In this step, we’ll simulate a situation where a product goes out of stock and must be removed from our inventory. We will use the `pop` method to remove the last item in the products and prices arrays. This ensures that customers see an up-to-date list of what’s available.

### Example Code for Step Six:

- [ ] Use the `pop` method to remove a product from your store

**Your code may look slightly different depending on the eCommerce store type you chose and how you’ve named your variables, but the pop method will remain the same in structure.**

```javascript
// Example of pop: Remove the last product from the store
products.pop();
prices.pop();
console.log("Unfortunately, Pet Shampoo is out of stock. Products:", products);
console.log("Updated Prices:", prices);
```

### What You Did in This Step:

- **Handling Out-of-Stock Items**: You used the `pop` method to remove the last product and its corresponding price from the arrays, simulating an out-of-stock scenario.
- **Logging the Updated Arrays**: After removing the item, you logged the updated product and price arrays to confirm that the out-of-stock product is no longer listed.
- **Ensuring Data Accuracy**: By removing unavailable items, you help maintain accurate and up-to-date inventory information for the message going out to customers.

---

## 7. **Selecting Featured Products from the Array**

In this step, we’ll select a few **featured products** to highlight in the message going out to customers. We will use the `slice` method to pull a subset of the products from the array. This allows you to showcase specific products in the weekly message, ensuring customers know about the special items available.

### Example Code for Step Seven:

- [ ] Use the `slice` method to select a subset of products from your array

**Your code may vary based on your chosen eCommerce store type and how you've named your variables, but the concept of using `slice` to select featured items will be the same.**

```javascript
// Example of slice: Show a selection of featured products
let featuredProducts = products.slice(0, 3);
console.log("This week, our featured products are:", featuredProducts);
```

### What You Did in This Step:

  - **Highlighting Featured Products**: You used the `slice` method to select the first three products in the array to feature in your message.
  - **Logging the Featured Products**: After slicing the array, you logged the featured products to ensure they were correctly selected for the message.
  - **Preparing for Promotion**: By selecting featured products, you can focus attention on specific items in your message, encouraging customer interest in those products.

---

## 8. **Adding New Items to the Store's Inventory**

In this step, we’ll add new products that have just arrived but were not initially included in the in-stock list. We will use the `concat` method to merge the new products and their prices with the existing arrays. This ensures that the store’s inventory is updated and reflects all available items.

### Example Code for Step Eight:

- [ ] Use the `concat` method to merge new products into your existing inventory.

**Your code may vary depending on your selected eCommerce store type and how you've named your variables, but the concept of using `concat` to add new items to your arrays will remain the same.**

```javascript
// Example of concat: Add new products from a shipment to the store's inventory
let newProducts = ["Cat Toy", "Dog Leash"];
let newPrices = [9.99, 14.99];
products = products.concat(newProducts);
prices = prices.concat(newPrices);

console.log("We have new arrivals! Products:", products);
console.log("Updated Prices:", prices);
```

### What You Did in This Step:

  - **Adding New Products**: You used the `concat` method to merge the new product array with the existing product array, expanding the store's inventory.
  - **Updating Prices**: The new prices were also added to the existing price array using `concat`, ensuring that both products and prices are updated simultaneously.
  - **Logging the Updated Inventory**: After concatenating the new items, you logged both the updated products and prices to verify the new additions.

---

## 9. **Closing the Customer Message with Store Hours**

In this final step, we’ll use the remaining variables to close the customer message with a friendly closing statement and the store hours for reference. This ensures customers are provided with essential information before wrapping up the message.

### Example Code for Step Nine:

- [ ] Use the remaining variables to complete the message with a closing statement and store hours.

**Your code may vary depending on your chosen eCommerce store type and how you've named your variables, but the structure of the closing message will remain the same.**

```javascript
console.log(`Thanks for visiting ${storeName}`);
console.log(`Here are our store hours for reference: ${storeHours}`);
```

### What You Did in This Step:

  - **Closing the Message**: You used the `storeName` variable to create a closing statement, thanking customers for visiting.
  - **Including Store Hours**: The `storeHours` variable was used to display the store's operating hours, providing essential information for customers.
  - **Finalizing the Customer Message**: By adding the store's closing and hours, you ensured that all necessary details are included in the final customer message.

---

## 10. **Running Your Code with Node.js and Generating the Final Message**

Now that you've successfully built the data structure for your store's inventory and customer message, it's time to run your code using Node.js and see the output.

### Step Instructions:

- [ ] Use the terminal to navigate to your project folder.
- [ ] Run the following command to execute your `index.js` file:

```bash
node index.js
```

### Expected Output:

When you run the file, you should see the following type of output based on the products, prices, and store hours you've entered:

```bash
Welcome to Paws & Claws! We are the best Pet Store in town.
Here are the products we currently offer:
Products: [ 'Dog Food', 'Cat Litter', 'Bird Seed', 'Fish Tank', 'Hamster Cage' ]
Prices: [ 29.99, 15.49, 12.99, 89.99, 34.5 ]
We've added a new product! Products: [ 'Dog Food', 'Cat Litter', 'Bird Seed', 'Fish Tank', 'Hamster Cage', 'Pet Shampoo' ]
Updated Prices: [ 29.99, 15.49, 12.99, 89.99, 34.5, 12 ]
Unfortunately, Pet Shampoo is out of stock. Products: [ 'Dog Food', 'Cat Litter', 'Bird Seed', 'Fish Tank', 'Hamster Cage' ]
Updated Prices: [ 29.99, 15.49, 12.99, 89.99, 34.5 ]
This week, our featured products are: [ 'Dog Food', 'Cat Litter', 'Bird Seed' ]
We have new arrivals! Products: [ 'Dog Food', 'Cat Litter', 'Bird Seed', 'Fish Tank', 'Hamster Cage', 'Cat Toy', 'Dog Leash' ]
Updated Prices: [ 29.99, 15.49, 12.99, 89.99, 34.5, 9.99, 14.99 ]
Thanks for visiting Paws & Claws!
Here are our store hours for reference: Monday - Friday: 9 AM - 6 PM, Saturday: 10 AM - 4 PM, Sunday: Closed
```

### Explanation:

- **Building the Data Structure**: Throughout this assignment, you've built a dynamic data structure that stores your products and prices in arrays. You've updated these arrays as new products were added or removed, ensuring the store's inventory is always accurate.
- **Formulating a Message**: The console output you see represents the final message generated for customers, showing them the available products, featured items, and store hours in a clear, structured format.
- **Practical Application**: This process mirrors how dynamic inventory systems work in real-world eCommerce applications, where products must be updated, and customers need to be informed promptly.

By running your code and reviewing the output, you've successfully simulated the logic behind a dynamic store inventory and customer messaging system!


## 11. **Pushing Your Code to GitHub**
In this section, you will save your project to a GitHub repository, which allows you to store your code online, collaborate with others, and keep track of changes over time.

- [ ]  Initialize Git, add all files, and commit your work:

```bash
git init
git add .
git commit -m "Initial commit: Your commit message here"

```

- [ ]  Push your work to GitHub:

```bash
git remote add origin [your-repo-url]
git push -u origin main

```
## 

# Conclusion 📄

In this assignment, you successfully built a dynamic system for managing a store’s inventory using JavaScript arrays and array methods. You’ve learned how to add new products, remove out-of-stock items, highlight featured products, and prepare a customer message complete with store hours. These skills are crucial for managing data in real-world applications, especially in eCommerce environments where inventory and messaging must be constantly updated.

As you continue to advance, you’ll build on this foundation to create more sophisticated systems, further improving how you handle and present data dynamically.

---

## Grading Criteria 💯

| Criteria                                   | Exemplary Performance (Full Marks) | Proficient Performance (Partial Marks) | Developing Performance (Half Marks) | Needs Improvement (No Marks) |
|--------------------------------------------|------------------------------------|----------------------------------------|-------------------------------------|------------------------------|
| **Technical Acceptance Criteria (60 pts)** | 54-60                              | 42-53                                  | 30-41                               | 0-29                         |
| **Workflow Appropriacy (15 pts)**          | 14-15                              | 11-13                                  | 8-10                                | 0-7                          |
| **Documentation (15 pts)**                 | 14-15                              | 11-13                                  | 8-10                                | 0-7                          |
| **User Experience (10 pts)**               | 9-10                               | 7-8                                    | 5-6                                 | 0-4                          |

## ### Solution codebase 👀
🛑 **Only use this as a reference** 🛑

💾 **Not something to copy and paste** 💾

**Note:**  This lab references a solution file located [here](https://github.com/HackerUSA-CE/aisd-jse-on-the-job-1/tree/solution) (link not shown).


---
© All rights reserved to ThriveDX# aisd-jse-on-the-job-2