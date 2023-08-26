function regularPolling() {
    setInterval(() => {
        fetch('/regular-polling-endpoint')
            .then(response => response.json())
            .then(data => {
                // Process the received data
                console.log('Received:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, 10000); // Poll every 10 seconds
}

// Start the regular polling process
regularPolling();