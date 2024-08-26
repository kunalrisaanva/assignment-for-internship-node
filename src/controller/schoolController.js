import connection from "../dbConnection/dbConnection.js";

// Endpoint: /addSchool

const addSchool = (req,res) => {

   try {

    const { name, address, latitude, longitude } = req.body;

    // Validation
    if (!name || !address || !latitude || !longitude) {
        return res.status(400).json({ error: 'All fields are required.' });
    }


    if (typeof name !== 'string' || typeof address !== 'string') {
        return res.status(400).json({ error: 'Name and address must be strings.' });
      }
    
    if (typeof latitude !== 'number' || typeof longitude !== 'number') {
       return res.status(400).json({ error: 'Latitude and longitude must be numbers.' });  
    }


    // SQL Query to insert data into the schools table
    const sql = `INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)`;


    // Execute the query
    connection.query(sql, [name, address, latitude, longitude], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err.stack);
      return res.status(500).json({ error: 'Failed to add the school.' });
    }

    // Success response
      res.status(201).json({ message: 'School added successfully!', schoolId: result.insertId });
     });
    



   } catch (error) {
     res.status(400).send(error?.message);
   }

} 


const listSchool = (req,res) => {
    
    const { latitude, longitude } = req.query;

    // Validation
    if (!latitude || !longitude) {
      return res.status(400).json({ error: 'Latitude and longitude are required.' });
    }
  
    const userLocation = { latitude: parseFloat(latitude), longitude: parseFloat(longitude) };
  
    // Fetch all schools from the database
    db.query('SELECT * FROM schools', (err, results) => {
      if (err) {
        console.error('Error fetching data:', err.stack);
        return res.status(500).json({ error: 'Failed to retrieve schools.' });
      }
  
      // Calculate distances and add to results
      const schoolsWithDistance = results.map(school => {
        const schoolLocation = { latitude: school.latitude, longitude: school.longitude };
        const distance = getDistance(userLocation, schoolLocation); // Distance in meters
        return { ...school, distance };
      });
  
      // Sort schools by distance
      schoolsWithDistance.sort((a, b) => a.distance - b.distance);
  
      // Send the sorted list as a response
      res.status(200).json(schoolsWithDistance);
    });


}



export {
    addSchool,
    listSchool
}