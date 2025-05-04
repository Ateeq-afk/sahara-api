const supabase = require('../middleware/db');

const createEnquiry = async (req, res) => {
  const { name, email, phone, projectType, propertySize, location, budget, timeline, requirements } = req.body;

  try {
    const { data, error } = await supabase
      .from('enquiries')
      .insert([
        {
          name,
          email,
          phone,
          project_type: projectType,
          property_size: propertySize,
          location,
          budget,
          timeline,
          requirements,
        }
      ]);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(201).json({ message: 'Enquiry created successfully', data });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = { createEnquiry };
