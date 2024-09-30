import mongoose, { Document, Schema } from 'mongoose';

interface CityDocument extends Document {
  name: string;
  population: number;
  country: string;
  latitude: number;
  longitude: number;
}

const citySchema = new Schema<CityDocument>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      validate: {
        validator: (value: string) => {
          return value.length >= 3;
        },
        message: 'City name must be at least 3 characters long.',
      },
    },
    population: {
      type: Number,
      required: true,
      validate: {
        validator: (value: number) => value >= 0,
        message: 'Population must be a non-negative number.',
      },
    },
    country: {
      type: String,
      required: true,
      trim: true,
    },
    latitude: {
      type: Number,
      required: true,
      validate: {
        validator: (value: number) => value >= -90 && value <= 90,
        message: 'Latitude must be between -90 and 90.',
      },
    },
    longitude: {
      type: Number,
      required: true,
      validate: {
        validator: (value: number) => value >= -180 && value <= 180,
        message: 'Longitude must be between -180 and 180.',
      },
    },
  },
  {
    timestamps: true, 
  }
);


const City = mongoose.model<CityDocument>('City', citySchema);

export default City;
