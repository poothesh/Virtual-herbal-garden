async function searchByImage() {
    const fileInput = document.getElementById('uploadImage');
    const file = fileInput.files[0];

    if (!file) {
        alert('Please upload an image.');
        return;
    }

    const formData = new FormData();
    formData.append('image', file);

    // Send image to the backend for AI-based searching
    const response = await fetch('/api/search-image', {
        method: 'POST',
        body: formData
    });

    const results = await response.json();
    displayResults(results);
}

// Display search results
function displayResults(results) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (results.length === 0) {
        resultsDiv.innerText = 'No matching herbs found.';
    } else {
        results.forEach(result => {
            const herbDiv = document.createElement('div');
            herbDiv.innerHTML = `<h3>${result}</h3>`;
            resultsDiv.appendChild(herbDiv);
        });
    }
}
