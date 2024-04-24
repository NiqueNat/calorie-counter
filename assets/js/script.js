//OiPSiafhj0bRTltU0NE9uA==7NujYvqQNPjCP14V//
///Went with a calorie counter api///
///simplified process, by using user input///
///Program only goes to 500lbs, options are limited///

const form = document.getElementById('exercise-form');
const resultsList = document.getElementById('results-list');

form.addEventListener('submit', async function (event) {
    event.preventDefault();

    try {
        const weight = document.getElementById('weight-input').value;
        const duration = document.getElementById('duration-input').value;
        const activity = document.getElementById('activity-input').value;

        const url = `https://api.api-ninjas.com/v1/caloriesburned?activity=${activity}&weight=${weight}&duration=${duration}`;

        const response = await fetch(url, {
            headers: {
                'X-Api-Key': 'OiPSiafhj0bRTltU0NE9uA==7NujYvqQNPjCP14V' // Replace with your actual API key
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching calories burned data');
        }

        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
            resultsList.innerHTML = '';

            data.forEach(entry => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <p>Activity: ${entry.name}</p>
                    <p>Calories Per Hour: ${entry.calories_per_hour}</p>
                    <p>Duration: ${entry.duration_minutes} minutes</p>
                    <p>Calories Burned: ${entry.total_calories ? entry.total_calories.toFixed(2) : 'N/A'}</p>
                `;
                resultsList.appendChild(listItem);
            });
        } else {
            resultsList.innerHTML = 'Calories Burned data not available.';
        }
    } catch (error) {
        console.error('Error fetching calories burned data:', error);
        resultsList.innerHTML = 'Error fetching data. Please try again.';
    }
});

  
  // ... (other code)
  