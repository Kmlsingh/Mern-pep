function getUserDetails(cb) {
    if (Math.random() > 0.5) {
        cb();
    }
}

function deliverItem(productId, address) {
    console.log("Product Delivered", productId, address);
}

getUserDetails(deliverItem);

function getUserDetails(cb) {
    if (Math.random() > 0.5) {
        cb();
    }
}

function deliverItem(productId, address) {
    console.log("Product Delivered", productId, address);
}

getUserDetails(deliverItem);

function getUserDetails(cb) {
    if (Math.random() > 0.5) {
        cb();
    }
}

function deliverItem(productId, address) {
    console.log("Product Delivered", productId, address);
}

const pr = getUserDetails();
pr.then(deliverItem);
pr.catch(() => {});
