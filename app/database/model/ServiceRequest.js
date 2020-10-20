const { Schema, model } = require('mongoose');

const customerDetailsSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
  },
  email: {
    type: String,
    trim: true,
    uppercase: true,
  },
});

const deviceSchema = new Schema({
  itemType: {
    type: String,
    default: 'LAPTOP',
    required: true,
    trim: true,
    uppercase: true,
    enum: ['COMPUTER', 'LAPTOP', 'PHONE', 'SCREEN', 'OTHER'],
  },
  serialNumber: {
    type: String,
    trim: true,
    uppercase: true,
  },
  brand: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
  },
  model: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
  },
});

const serviceRequestSchema = new Schema({
  number: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    uppercase: true,
    minlength: 5,
    index: true,
  },
  requestDescription: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
    minlength: 5,
  },
  generalDeviceOutlook: {
    type: String,
    trim: true,
    uppercase: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  device: {
    type: deviceSchema,
    required: true,
  },
  customer: {
    type: customerDetailsSchema,
    required: true,
  },
});

const ServiceRequest = model('service-request', serviceRequestSchema);

module.exports = ServiceRequest;
