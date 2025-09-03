// lib/services/eventService.js
import { api } from '../api';

export const eventService = {
  async getAll(params = {}) {
    const query = new URLSearchParams(params).toString();
    return api.get(`Event?${query}`);
  },

  async getById(id) {
    return api.get(`Event/${id}`);
  },

  async create(data) {
    return api.post('Event', data);
  },

  async update(id, data) {
    return api.put(`Event/${id}`, data);
  },

  async delete(id) {
    return api.delete(`Event/${id}`);
  },

  async restore(id) {
    return api.put(`Event/${id}/restore`);
  },
};