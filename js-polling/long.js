function longPolling() {
    fetch('/long-polling-endpoint')
        .then(response => response.json())
        .then(data => {
            // Process the received data
            console.log('Received:', data);

            // Initiate the next long polling request
            longPolling();
        })
        .catch(error => {
            console.error('Error:', error);

            // Retry the long polling request after a delay
            setTimeout(longPolling, 1000); // Retry after 1 second
        });
}

// Start the long polling process
longPolling();