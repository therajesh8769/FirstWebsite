document.getElementById('homeBox').addEventListener('mouseenter', function() {
    this.classList.add('animated');
    h2.innerText="I LOVE U Soooo much";
    h2.style.color='red';
   
});

let h2=document.querySelector("#h2");
    document.getElementById('homeBox').addEventListener('mouseleave', function() {
        this.classList.remove('animated');
        h2.innerText="Baby please don't leave my heart";
        h2.style.color='brown'
        document.querySelector(".container").style.display = "block";
    });


// Function to handle mouseleave event

    
    // Append the heading to the body
    

    // Move the button container from display none to block
 

    // Add click event listener to the existing button
    document.getElementById('pickupLineBtn').addEventListener('click', fetchPickupLine);


// Function to fetch a random pickup line from the API
async function fetchPickupLine() {
    try {
        const url = 'https://pickup-lines-api.p.rapidapi.com/pickupline';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '9fc74d12cfmshe27a6cefee119d3p1b5221jsn71a618efab28',
		'x-rapidapi-host': 'pickup-lines-api.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	let p=document.querySelector("#para");
    p.innerText=result;
    p.style.color='brown';
} catch (error) {
	console.error(error);
}
}
}

// Add event listener to the homeBox element
