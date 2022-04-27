//Javascript for Final Project - Leah Bos
//April 25, 2021

//arrays
var aStoreItems = [];
var aCartItems = [];  
            
//constructors
//constructor for store items
function Store_Item(id, name, price, qtyOnHand, maxPerCustomer, category, shippingCost, description, image)
{
    this.id = id; //id for product
    this.name = name; //product name
    this.price = price; //price of item
    this.qtyOnHand = qtyOnHand; //total number of item available
    this.maxPerCustomer = maxPerCustomer; //max qty allowed in cart
    this.category = category; //category of item (designer)
    this.shippingCost = shippingCost; //shipping cost
    this.description = description; //description of product
    this.image = image; //link to image file    
    this.reviews = []; //array    
}

//add items to aStoreItems array
aStoreItems.push ( new Store_Item("00001", "Eloise Booty", 1395.00, 5, 2, "Christian Louboutin", 35.00, "Christian Louboutin black Veau Velours booties featuring an ultra thin 100mm stiletto and signature red bottom sole.", "images/louboutin/Eloise Booty.jpg") );
aStoreItems.push ( new Store_Item("00002", "Follies Strass", 1445.00, 7, 2, "Christian Louboutin", 25.00, "Christian Louboutin mesh overlay in cream featuring perfectly placed strass, a 100mm stiletto and signature red bottom sole.", 'images/louboutin/Follies Strass.jpg') );
aStoreItems.push ( new Store_Item("00003", "Galatavi", 1075.00, 9, 3, "Christian Louboutin", 25.00, "This Christian Louboutin elegant pump combines black Veau Velours with tonal fishnet and features a slim 100mm stiletto and signature red bottom sole.", 'images/louboutin/Galatavi.jpg') );
aStoreItems.push ( new Store_Item("00004", "Hot Chick - White", 875.00, 15, 5, "Christian Louboutin", 25.00, "The unique, notched cut Christian Louboutin pump in patent white features a slim 100mm stiletto and signature red bottom sole.", 'images/louboutin/Hot Chick - white.jpg') );
aStoreItems.push ( new Store_Item("00005", "Hot Chick - Multi", 895.00, 4, 1, "Christian Louboutin", 25.00, "Make a statement in this patterned Christian Louboutin pump featuring a 100mm stiletto and signature red bottom sole.", 'images/louboutin/Hot Chick.jpg') );
aStoreItems.push ( new Store_Item("00006", "Iriza - White", 895.00, 10, 5, "Christian Louboutin", 25.00, "This timeless pointed toe Christian Louboutin pump in textured white leather features a snakeskin pattern, a 100mm stiletto and signature red bottom sole.", 'images/louboutin/Iriza - white.jpg') );
aStoreItems.push ( new Store_Item("00007", "Iriza - Opulent Blue", 895.00, 3, 1, "Christian Louboutin", 25.00, "This pointed toe Christian Louboutin pump is the epitomy of elegance featuring Blueberry Veau Velours and a satin touch, with a 100mm stiletto and signature red bottom sole.", 'images/louboutin/Iriza.jpg') );
aStoreItems.push ( new Store_Item("00008", "Kate", 875.00, 20, 5, "Christian Louboutin", 25.00, "This sophisticated Christian Louboutin pump in nude nappa leather features a 100mm stiletto and signature red bottom sole.", 'images/louboutin/Kate.jpg') );
aStoreItems.push ( new Store_Item("00009", "Victorilla", 1375.00, 4, 2, "Christian Louboutin", 35.00, "This strappy Christian Louboutin pump features a black perforated suede pointed toe, a 100mm stilleto and signature red bottom sole.", 'images/louboutin/Victorilla.jpg') );
aStoreItems.push ( new Store_Item("00010", "Anouk", 795.00, 12, 3, "Jimmy Choo", 25.00, "Make a statement in this classic Jimmy Choo pointed toe pump in bold red patent leather featuring a 120mm stiletto.", 'images/choo/anouk.jpg') );
aStoreItems.push ( new Store_Item("00011", "Love 85", 975.00, 3, 1, "Jimmy Choo", 25.00, "This Jimmy Choo pump features a dramatic print coupled with a simple shape and a thin 85mm stiletto.", 'images/choo/love85.jpg') );
aStoreItems.push ( new Store_Item("00012", "Love 100 - Nude", 795.00, 12, 4, "Jimmy Choo", 25.00, "Elegant pointed toe Jimmy Choo pumps in ballet pink suede featuring a thin 100mm stiletto.", 'images/choo/love100 - beige.jpg') );
aStoreItems.push ( new Store_Item("00013", "Love 100 - Black", 795.00, 20, 5, "Jimmy Choo", 25.00, "Classic, elegant pointed toe Jimmy Choo pumps in black suede featuring a thin 100mm stiletto.", 'images/choo/love100.jpg') );
aStoreItems.push ( new Store_Item("00014", "Love 100 - Lace", 1295.00, 5, 1, "Jimmy Choo", 25.00, "This dramatic, yet sohpisticated Jimmy Choo pump in black suede features lace detailing and 100mm stiletto.", 'images/choo/love100-lace.jpg') );
aStoreItems.push ( new Store_Item("00015", "Romy 100 - Navy", 795.00, 9, 3, "Jimmy Choo", 25.00, "Sophisticated pointed toe Jimmy Choo pump in navy suede features 100mm stiletto.", 'images/choo/romy100.jpg') );
aStoreItems.push ( new Store_Item("00016", "Romy 100 - White", 795.00, 12, 3, "Jimmy Choo", 25.00, "Sophisticated pointed toe Jimmy Choo pump in white satin features 100mm stiletto.", 'images/choo/romy100-white.jpg') );
aStoreItems.push ( new Store_Item("00017", "Saeda", 1175.00, 3, 4, "Jimmy Choo", 25.00, "This pointed toe black suede Jimmy Choo pump features an open heel with delicate crystal ankle embellishment and a 100mm stiletto.", 'images/choo/saeda100.jpg') );
aStoreItems.push ( new Store_Item("00018", "Cordonetto Pump", 1690.00, 2, 1, "Dolce & Gabbana", 35.00, "Beautifully embroidered black lace peep-toe Dolce & Gabbana pumps with a 105mm stiletto.", 'images/d&g/cordonetto.jpg') );
aStoreItems.push ( new Store_Item("00019", "Eel Pump", 1125.00, 4, 1, "Dolce & Gabbana", 25.00, "Classic Dolce & Gabbana pump in deep red textured eel, featuring a 105mm stiletto.", 'images/d&g/eel.jpg') );
aStoreItems.push ( new Store_Item("00020", "Goatskin Pump", 1125.00, 10, 3, "Dolce & Gabbana", 25.00, "Classic, sophisticated Dolce & Gabbana black pumps with gold logo embellishment on a 105mm stiletto heel.", 'images/d&g/goatskin.jpg') );
aStoreItems.push ( new Store_Item("00021", "Grosgrain Pump", 1125.00, 2, 3, "Dolce & Gabbana", 25.00, "Black mesh Dolce & Gabbana pumps with grosgrain detail feature double straps and a 105mm stiletto heel.", 'images/d&g/grosgrain.jpg') );
aStoreItems.push ( new Store_Item("00022", "Mesh Pump", 1410.00, 6, 2, "Dolce & Gabbana", 35.00, "These bold Dolce & Gabbana black mesh pumps feature a leather t-strap and 105mm stiletto.", 'images/d&g/mesh.jpg') );
aStoreItems.push ( new Store_Item("00023", "Patent Pink Pump", 990.00, 15, 5, "Dolce & Gabbana", 25.00, "This classic shaped Dolce & Gabbana pump is pretty in pink and features a 90mm stiletto heel.", 'images/d&g/patent-pink.jpg') );
aStoreItems.push ( new Store_Item("00024", "Patent Red Pump", 990.00, 20, 5, "Dolce & Gabbana", 25.00, "This classic shaped Dolce & Gabbana pump in bold red features a 90mm stiletto heel.", 'images/d&g/patent-red.jpg') );
aStoreItems.push ( new Store_Item("00025", "Python Pump", 1690.00, 2, 1, "Dolce & Gabbana", 25.00, "These statement python skin Dolce & Gabbana pumps feature a multicoloured pointed toe and a 105mm stiletto.", 'images/d&g/python.jpg') );
aStoreItems.push ( new Store_Item("00026", "T-Strap Pump", 1125.00, 4, 1, "Dolce & Gabbana", 35.00, "This elegant Dolce & Gabbana black mesh pump features a t-strap detail and 105mm stiletto", 'images/d&g/tstrap.jpg') );
aStoreItems.push ( new Store_Item("00027", "Black Velvet Pump", 2935.00, 15, 5, "Dolce & Gabbana", 35.00, "This showstopping Dolce & Gabbana soft black velvet pump features a chunky 105mm heel and mini rhinestone embriodered embellighment.", 'images/d&g/velvet.jpg') );
aStoreItems.push ( new Store_Item("00028", "Blush Velvet Pump", 2935.00, 4, 1, "Dolce & Gabbana", 35.00, "Prepare to dazzle in this Dolce & Gabbana soft blush velvet pump featuring a 105mm stiletto heel and mini rhinestone embriodered embellighment.", 'images/d&g/patent-pink.jpg') );
aStoreItems.push ( new Store_Item("00029", "Anais", 1060.00, 10, 3, "Yves Saint Laurent", 25.00, "Sophisticated Yves Saint Laurent nude low pump in a 550mm kitten heel with a double bow feature.", 'images/ysl/anais.jpg') );
aStoreItems.push ( new Store_Item("00030", "Anja - Black", 835.00, 20, 4, "Yves Saint Laurent", 25.00, "The ultimate classic Yves Saint Laurent black leather pump featuring a 105mm stiletto.", 'images/ysl/anja.jpg') );
aStoreItems.push ( new Store_Item("00031", "Anja - Nude", 835.00, 15, 4, "Yves Saint Laurent", 25.00, "The ultimate classic Yves Saint Laurent nude suede pump featuring a 105mm stiletto.", 'images/ysl/anja-beige.jpg') );
aStoreItems.push ( new Store_Item("00032", "Opyum Slingback", 1420.00, 6, 1, "Yves Saint Laurent", 35.00, "Yves Saint Laurent black slingback leather pumps with an incredible 110mm structured YSL gold heel.", 'images/ysl/opyum slingback.jpg') );
aStoreItems.push ( new Store_Item("00033", "Opyum", 1290.00, 8, 2, "Yves Saint Laurent", 35.00, "The classic Yves Saint Laurent black leather pump with a dazzling twist - a 110mm structured YSL gold heel.", 'images/ysl/opyum.jpg') );              
           
//constructor for cart items
function Cart_Item(id, price, qty, shippingCost)
{
    this.id = id; //id for product
    this.price = price; //price of item
    this.qty = qty; //quantity of item in cart
    this.shippingCost = shippingCost; //shipping cost               
}

//functions

//page load function
//on page load, display all store items and cart
function pageLoad()
{
    //display current date & time 
    var dateTime = new Date();
    var dateOutput = document.getElementById("datetime");
    dateOutput.innerHTML = dateTime;

    //populate store items array to display on page
    displayItems(aStoreItems);
    //dispaly cart on page load
    displayCart();
}     
            
//display store items function            
//display shop items with details (shown & hidden) on home page (all or filtered, depending on value passed to function)
function displayItems(products)
{              
    //clear output div
    var outputDiv = document.getElementById("displayOutput");
    outputDiv.innerHTML = "";

    //add each item to own div to optimize mobile-first display (avoiding table to allow for more responsive design)                
    //create div for each item
    for (let index = 0; index < products.length; index ++)
    {             
        //create div
        var itemDiv = document.createElement("div"); 
        itemDiv.className = "item"; 
                    
        //create img element for each div                    
        var newImage = document.createElement("img");
        newImage.src = products[index].image;
        newImage.className = "productimage";

        //create p element for product info
        var itemInfo = document.createElement("p");

        //call currency converter function to display chosen currency
        var priceToDisplay = convertedPrice(aStoreItems[index]);

        //create add to cart button
        var addToCartButton = document.createElement("input");
        addToCartButton.type = "button";
        addToCartButton.value = "Add to Cart";
        addToCartButton.className = "cartbutton";
        addToCartButton.addEventListener("click", function (){
            //add to cart function
            if (aCartItems.length > 0)
            {      
                //check if item already in cart (if any ids are duplicated)
                var productAlreadyInCart = false;
                                
                for (var i = 0; i < aCartItems.length; i++)  
                {      
                    if (products[index].id == aCartItems[i].id) //product already in cart
                    {
                        productAlreadyInCart = true;

                        //check if number in cart is greater than max allowed per customer
                        if (products[index].maxPerCustomer <= aCartItems[i].qty) 
                        {
                            //max has been reached, alert user
                            window.alert("Maximum number of this product has already been added to cart.");
                        }  
                        else if (products[index].maxPerCustomer > aCartItems[i].qty) 
                        {    
                            //max has not been reached, update quantity in cart
                            aCartItems[i].qty++;

                            if (products[index].qtyOnHand >= 1)
                            {
                                //if there is at least one of this product (quantity on hand), reduce quantity available in store items
                                products[index].qtyOnHand--;
                            }
                            else
                            {
                                //if the quantity on hand = 0, alert user product is sold out
                                window.alert("Sorry, this product is sold out.");
                            }
                        }
                    }
                    else //product not already in cart
                    {
                        productAlreadyInCart = false;
                    }
                }//end inner for

                //if product not already in cart
                if (productAlreadyInCart == false)                         
                {
                    //if at least 1 quantity on hand, add to cart array
                    if (products[index].qtyOnHand >= 1)
                    {
                        aCartItems.push( new Cart_Item (products[index].id, products[index].price, 1, products[index].shippingCost) );

                        //reduce quantity on hand by 1
                        products[index].qtyOnHand--;
                    }
                    else 
                    {
                        //if the quantity on hand = 0
                        window.alert("Sorry, this product is sold out.");
                    }
                }//end inner if
            }//end if 
            else //nothing in cart array, add to cart array
            {
                //if at least 1 quantity on hand, add to cart array
                if (products[index].qtyOnHand >= 1)
                {
                    aCartItems.push( new Cart_Item (products[index].id, products[index].price, 1, products[index].shippingCost) );

                    //reduce quantity on hand by 1
                    products[index].qtyOnHand--;
                }
                else 
                {
                    //if the quantity on hand = 0
                    window.alert("Sorry, this product is sold out.");
                }
            }//end else
                                
            //reload cart display
            displayCart();
            //update store items display to reflect change in quantity available
            updateDisplays();
        });//end add to cart function
                                        
        //enter item data for div
        itemInfo.innerHTML = "Product ID: " + products[index].id + "<br>" + products[index].name + "<br> $" + priceToDisplay.toFixed(2) + "<br>" + "Number available: " + products[index].qtyOnHand + "<br>" + "Limit per customer: " + products[index].maxPerCustomer;                    

        //create summary & details elements for hidden details (designer, shipping, description & reviews)
        var itemDetails = document.createElement("details");
        var itemSummary = document.createElement("summary");
        var itemDetailsToShow = document.createElement("p");
        var reviewDiv = document.createElement("div");
        reviewDiv.innerHTML = displayReviews();
        reviewDiv.className = "reviews";

        //add review button (allow user to submit review)
        var reviewButton = document.createElement("input");
        reviewButton.type = "button"
        reviewButton.value = "Submit a Review";
        reviewButton.className = "reviewbutton";
        reviewButton.addEventListener("click", function (){
            //submit review button function
            //prompt to capture user reviews 
            var newReview = window.prompt("Enter your review:");
            //add new review to array
            products[index].reviews.push(newReview);
            //update review display
            displayItems(products);                    
        });//end submit review function                      
                    
        //function to display reviews array
        function displayReviews()
        {
            if (products[index].reviews.length == 0) //if there are no reviews
            {
                reviewDiv.innerHTML = "This item has not been reviewed yet."
            }
            else //if there are reviews for the prodect, display reviews array
            {
                reviewDiv.innerHTML = products[index].reviews.join("<br>");
            }                        
        }//end display reviews function

        //enter item data for hidden details div
        itemSummary.innerHTML = "More Details";
        itemDetailsToShow.innerHTML = "Designer: " + aStoreItems[index].category + "<br>" + "Shipping Cost: $" + aStoreItems[index].shippingCost + "<br>" + "Description: " + aStoreItems[index].description + "<br><br>" + "Reviews:";  
                                  
        //append summary, details & reviews to details element
        itemDetails.appendChild(itemSummary);
        itemDetails.appendChild(itemDetailsToShow);
        itemDetails.appendChild(reviewDiv);
        itemDetails.appendChild(reviewButton);
                                                        
        //append image to item div
        itemDiv.appendChild(newImage);

        //append info to item div
        itemDiv.appendChild(itemInfo); 

        //append add to cart button to div
        itemDiv.appendChild(addToCartButton);

        //append more details to output div
        itemDiv.appendChild(itemDetails);

        //append item div to output div
        outputDiv.appendChild(itemDiv);

        //call reviews function to populate reviews display
        displayReviews();
    }//end for loop creating div for each item    
}//end display items function              

//display cart function
//displays cart array
function displayCart()
{
    //clear cart contents
    document.getElementById("cartDisplay").innerHTML = "";
                
    if (aCartItems.length == 0) //if no items in cart
    {
        document.getElementById("cartDisplay").innerHTML = "No Items in Cart";
        //if no items in cart, do not show option to remove item from cart
        document.getElementById("remove").hidden = true;
    }
    else //if there are items in cart
    {
        //create div for cart output
        var cartOutput = document.getElementById("cartDisplay");

        // create table for items added to cart                    
        //create table
        var cartTable = document.createElement("table");

        //create table body
        var cartTableBody = document.createElement("tbody");

        //header row
        var headerRow = document.createElement("tr");

        //header columns
        var idTh = document.createElement("th");
        idTh.innerHTML = "Item ID";
        idTh.className = "tableheader";
        var priceTh = document.createElement("th");
        priceTh.innerHTML = "Price";
        priceTh.className = "tableheader";
        var qtyTh = document.createElement("th");
        qtyTh.innerHTML = "Quantity";
        qtyTh.className = "tableheader";
        var totalTh = document.createElement("th");
        totalTh.innerHTML = "Subtotal";
        totalTh.className = "tableheader";

        //append columns to the row
        headerRow.appendChild(idTh);
        headerRow.appendChild(priceTh);
        headerRow.appendChild(qtyTh);
        headerRow.appendChild(totalTh);

        //append row to the body
        cartTableBody.appendChild(headerRow);

        //table row for each item added to cart
        for (var index = 0; index < aCartItems.length; index++)
        {
            //create row for the item
            var theRow = document.createElement("tr");

            //create columns
            var tempID = document.createElement("td");
            var tempPrice = document.createElement("td");
            var tempQty = document.createElement("td");
            tempQty.className = "qtycolumn";
            var tempTotal = document.createElement("td");

            //call currency converter function to display chosen currency
            var cartPriceToDisplay = convertedPrice(aCartItems[index]);                        

            //populate cell with data
            tempID.innerHTML = aCartItems[index].id;
            tempPrice.innerHTML = "$" + cartPriceToDisplay.toFixed(2);
            tempQty.innerHTML = aCartItems[index].qty;
            tempTotal.innerHTML = "$" + (parseFloat(cartPriceToDisplay) * aCartItems[index].qty).toFixed(2); 

            //append cells to the row
            theRow.appendChild(tempID);
            theRow.appendChild(tempPrice);
            theRow.appendChild(tempQty);
            theRow.appendChild(tempTotal);

            //append row to the table body
            cartTableBody.appendChild(theRow);
        }//end for 

        //append table body to the table
        cartTable.appendChild(cartTableBody);

        //append the table to the output div
        cartOutput.appendChild(cartTable);                

        //append totals div to output div
        cartOutput.appendChild(calculateTotal());

        //if there are items in cart, show option to remove items
        document.getElementById("remove").hidden = false;
    }//end else
}//end displayCart function

//calculate totals function
//calculates subtotals of each product, and totals including shipping & tax
function calculateTotal()
{
    //calculate cart subtotal
    var subtotal = 0;

    //calculate totals per item & add to subtotal
    for (var index = 0; index < aCartItems.length; index++)
    {
        var totalPerItem = aCartItems[index].qty * convertedPrice(aCartItems[index]); ;
        subtotal += totalPerItem;
    }

    //calculate shipping
    var shipping = 0;

    for (var index = 0; index < aCartItems.length; index++)
    {
        var totalShipping = aCartItems[index].qty * aCartItems[index].shippingCost;
        shipping += totalShipping;
    }

    //calculate tax
    var tax = (subtotal + shipping)*0.13;

    //output subtotal, shipping, subtotal + shipping, tax, total
    //create div for totals info
    var cartTotals = document.createElement("div");
    cartTotals.innerHTML = "Items Subtotal: $" + subtotal.toFixed(2) + "<br>" + "Estimated Shipping: $" + shipping.toFixed(2) + "<br><br>Subtotal: $" + (subtotal + shipping).toFixed(2) + "<br>" + "Estimated Tax: $" + tax.toFixed(2) + "<br>Order Total: $" + (subtotal + shipping + tax).toFixed(2);
                    
    return cartTotals;                
}

//currency converter function
//changes all currency displayed on page based on user selection
function convertedPrice(items)
{
    //get value of currency selector radio button
    //defauly currency is CAD
    var currencySelected = document.querySelector("input[name='currencySelector']:checked").value;
    var adjustedPrice = 0;

    if (currencySelected == "$USD")
    {
        //if currency selected is USD, multiply by exchange rate
        adjustedPrice = (items.price) * 1.25;
    }
    else if (currencySelected == "$CAD")
    {
        //if currency selected is CAD, currency is default
        adjustedPrice = items.price;
    }

    return adjustedPrice; 
}
                  
//function to update store & cart displays
//called when currency selector radio button changed and cart quantities changed
function updateDisplays()
{
    if (document.getElementById("ddFilter").value == "View All")
    {
        //if filter selector is set to View All, show all items in store items array            
        displayItems(aStoreItems);
    }
    else
    {
        //if designer is chosen from drop down, only display filtered items
        filterByDesigner();
    }
                
    displayCart();  
}

//filter by designer function
//filter items by designer based on selection from dropdown, only filtered items are displayed
function filterByDesigner()
{
    //get designer selected from dropdown
    var selectedDesigner = document.getElementById("ddFilter").value;
    //create array for items filtered by designer
    var itemsFiltered = [];

    for (var index = 0; index < aStoreItems.length; index++)
    {
        if (selectedDesigner == aStoreItems[index].category)
        {
            //if product category (designer) matches selection from drop down, add that product to filtered array
            itemsFiltered.push(aStoreItems[index]);
            //pdate display with only those products
            displayItems(itemsFiltered);
        }
        else if (selectedDesigner == "View All")
        {
            //if "View All" selected in drop down, show all products
            displayItems(aStoreItems);
        }
    }                
}

//remove item from cart function
//removes all or some of a product specified by user, based on product id & quantity to remove
function removeFromCart()
{
    //get product id value from textbox
    var itemToRemove = document.getElementById("tbRemoveItem").value;
    //get quantity to remove from textbox
    var qtyRemovedFromCart = parseInt(document.getElementById("tbQtyToRemove").value);

    for (var index = 0; index < aCartItems.length; index++)
    {
        if (itemToRemove == aCartItems[index].id) //if product is in cart
        {
            if (qtyRemovedFromCart >= aCartItems[index].qty)
            {
                //if the quantity to remove is greater than the quantity of that product in the cart, remove that product from cart array
                aCartItems.splice(index, 1);
            }
            else
            {
                //if quantity to remove is less than number of the specified product in cart, reduce the quantity of the product in the cart
                aCartItems[index].qty = aCartItems[index].qty - qtyRemovedFromCart;
            }
                        
            for (var i = 0; i < aStoreItems.length; i++)
            {
                //add quantity removed from cart back to available quantity in store items
                if (itemToRemove == aStoreItems[i].id)
                {
                    aStoreItems[i].qtyOnHand = aStoreItems[i].qtyOnHand + qtyRemovedFromCart;
                }
            } 
                        
            //update cart display with product removed
            displayCart();  

            //update store items display with updated quantity   
            updateDisplays();
        }
        else 
        {
            //if product id not in cart, display error message
            window.alert("Sorry, we did not find that product ID in your cart.");
        }
    }//end for
                
    //reset remove from cart id textbox                
    document.getElementById("tbRemoveItem").value = "";
    document.getElementById("tbRemoveItem").placeholder = "Enter Product ID";

    //reset remove from cart qty textbox                
    document.getElementById("tbQtyToRemove").value = "";
    document.getElementById("tbQtyToRemove").placeholder = "Enter Quantity to Remove";
}

//call pageLoad function when page loads
pageLoad();