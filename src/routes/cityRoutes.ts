import { Router, Request, Response } from 'express';
import City from '../models/City';

const router = Router();


interface CityRequestBody {
  name: string;
  population: number;
  country: string;
  latitude: number;
  longitude: number;
}

// Api for adding a new city
router.post('/cities', async (req: Request<{}, {}, CityRequestBody>, res: Response) => {
  try {
    const { name, population, country, latitude, longitude } = req.body;
    const city = new City({ name, population, country, latitude, longitude });
    await city.save();
    res.status(201).json({ message: 'City added successfully', city });
  } catch (err) {
    res.status(400).json({ message: 'Error while adding city', error: (err as Error).message });
  }
});

// Update an existing city
router.put('/cities/:id', async (req: Request<{ id: string }, {}, Partial<CityRequestBody>>, res: Response) => {
  try {
    const updatedCity = await City.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCity) return res.status(404).json({ message: 'City not found' });
    res.json({ message: 'City updated successfully', city: updatedCity });
  } catch (err) {
    res.status(400).json({ message: 'Error updating city', error: (err as Error).message });
  }
});

// Delete a city
router.delete('/cities/:id', async (req: Request<{ id: string }>, res: Response) => {
  try {
    const city = await City.findByIdAndDelete(req.params.id);
    if (!city) return res.status(404).json({ message: 'City not found' });
    res.json({ message: 'City deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Error deleting city', error: (err as Error).message });
  }
});


// Get cities with pagination, filtering, sorting, and projection
router.get('/cities', async (req: Request<{}, {}, {}, { page?: string; limit?: string; sort?: string; search?: string; filter?: string; fields?: string }>, res: Response) => {
  try {
    const { page = '1', limit = '10', sort, search, filter, fields } = req.query;
    const query: Record<string, any> = {};

    // Filter by fields (e.g., population, country)
    if (filter) {
      const filterObj = JSON.parse(filter);
      Object.assign(query, filterObj);
    }

    // Search by city name
    if (search) {
      query.name = { $regex: search, $options: 'i' };
    }

    // Projection (fields to include/exclude)
    const projection = fields ? fields.split(',').join(' ') : '';

    // Pagination and sorting
    const cities = await City.find(query)
      .select(projection)
      .sort(sort ? { [sort]: 1 } : {}) // Handle sorting
      .skip((parseInt(page) - 1) * parseInt(limit))
      .limit(parseInt(limit));

    const total = await City.countDocuments(query);

    res.json({
      total,
      page: parseInt(page),
      pages: Math.ceil(total / parseInt(limit)),
      cities,
    });
  } catch (err) {
    res.status(400).json({ message: 'Error fetching cities', error: (err as Error).message });
  }
});

export default router;
