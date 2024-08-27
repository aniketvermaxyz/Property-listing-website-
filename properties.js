fetch('/api/properties')
    .then(response => response.json())
    .then(data => {
        const propertyList = document.getElementById('property-list');
        data.forEach(property => {
            const propertyItem = document.createElement('div');
            propertyItem.innerHTML = `
                <h3>${property.title}</h3>
                <p>${property.description}</p>
                <p>Price: $${property.price}</p>
                <a href="property.html?id=${property._id}">View Details</a>
            `;
            propertyList.appendChild(propertyItem);
        });
    });
