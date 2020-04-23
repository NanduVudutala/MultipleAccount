var productDetails;
var products = [];
//document.getElementById("tbllist").style.visibility = "hidden";

function save() {
    var brand = document.getElementById('brand').value;
    var type = document.getElementById('type').value;
    var quantity = document.getElementById('quantity').value;
    var polish = document.getElementById('polish').value;
    var max = document.getElementById('max').value;

    productDetails = {
        name: brand,
        type: type,
        quantity: quantity,
        polish: polish,
        max: max
    }
    products.push(productDetails);
    //console.log(`Detailes : ${productDetails}`);
    //console.log(`Array : ${products}`);
    //console.log('Detailes : ' + productDetails.pname);
    //console.log(products);
    bindtolist();
    //bindtotable();
    displayTable();
};

function bindtolist() {
    console.log('bindtolist -' + products);
    var ulist = document.getElementById('list');
    ulist.innerHTML = "";
    products.forEach(product => {
        //console.log('Forloop:' + product.pname +'-'+ product.ppolish +'-'+ product.ptype +'-'+ product.pmax +'-'+ product.pquantity)
        ulist.innerHTML += '<li>' + product.name + '-' + product.polish + '-' + product.type + '-' + product.max + '-' + product.quantity + '</li>';
    });
    console.log('ulist-' + ulist.innerHTML);
};

function displayTable() {
    // get the table to add rows to
    var table = document.getElementById('tbllist');
    table.innerHTML = "";
    var header = table.createTHead();
    var hrow = header.insertRow(0);
    // cycle through the array for each of the presidents
    for (var i = 0; i < products.length; i++) {
        // keep a reference to an individual president object
        var product = products[i];
        //console.log('displayTable - ' + product.ptype);

        // create a row element to append cells to
        //var row = document.createElement('tr');
        var row = table.insertRow(0);
        //console.log("row-" + row);

        // properties of the array elements
        var properties = ['name', 'type', 'quantity', 'polish', 'max'];

        // append each one of them to the row in question, in order
        for (var j = 0; j < properties.length; j++) {
            var hcell = hrow.insertCell(j);
            hcell.innerHTML = properties[j];
            // create new data cell for names
            //var cell = document.createElement('td')
            var cell = row.insertCell(j);

            // set name of property using bracket notation (properties[j] is a string,
            // which can be used to access properties of president)
            cell.innerHTML = product[properties[j]];
            // add to end of the row
            row.appendChild(cell);
        }

        // add new row to table
        table.appendChild(row);
        document.getElementById("tbllist").style.display = "block";
    }
};


