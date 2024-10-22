// script.js

function navigateTo(page) {
    window.location.href = './' + page;
}

function assignDriver(orderId) {
    // Display the modal for driver selection
    const modal = document.getElementById('assignDriverModal');
    const selectedOrderId = document.getElementById('selectedOrderId');
    modal.style.display = 'block';
    selectedOrderId.textContent = orderId;
}

function closeModal() {
    const modal = document.getElementById('assignDriverModal');
    modal.style.display = 'none';
}

function confirmAssignDriver() {
    const driverSelect = document.getElementById('driverSelect');
    const selectedDriver = driverSelect.value;
    const orderId = document.getElementById('selectedOrderId').textContent;
    // Update the driver assignment in the dispatching order list
    const orderElement = document.getElementById(`order-${orderId}`);
    if (orderElement) {
        const driverElement = orderElement.querySelector('.driver');
        driverElement.textContent = selectedDriver;
    }
    alert('Driver ' + selectedDriver + ' assigned to order #' + orderId);
    closeModal();
}

function updateOrderStatus(orderId, status) {
    // Update the order status in the list
    const orderElement = document.getElementById(`order-${orderId}`);
    if (orderElement) {
        const statusElement = orderElement.querySelector('.status');
        statusElement.textContent = status;
    }
    alert('Order #' + orderId + ' status updated to: ' + status);
}

function addOrder(orderId, driver, eta, location, store) {
    // Create a new order element and add it to the dispatching order list
    const orderList = document.getElementById('dispatching-orders');
    const orderItem = document.createElement('div');
    orderItem.classList.add('order-item');
    orderItem.id = `order-${orderId}`;
    orderItem.innerHTML = `
        <p>Order No: ${orderId}</p>
        <p class="driver">Driver: ${driver}</p>
        <p>ETA: ${eta}</p>
        <p>Location: ${location}</p>
        <p>Store: ${store}</p>
        <p class="status">Status: Dispatching</p>
        <button onclick="assignDriver('${orderId}')">Assign Driver</button>
        <button onclick="updateOrderStatus('${orderId}', 'Completed')">Mark as Completed</button>
    `;
    orderList.appendChild(orderItem);
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('assignDriverModal');
    if (event.target == modal) {
        closeModal();
    }
};
