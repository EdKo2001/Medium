function shortPolling() {
    setInterval(() => {
        fetch('/short-polling-endpoint')
            .then(response => response.json())
            .then(data => {
                // Process the received data
                console.log('Received:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, 5000); // Poll every 5 seconds
}

// Start the short polling process
shortPolling();