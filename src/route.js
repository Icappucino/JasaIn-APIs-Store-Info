// src/routes.js
const Joi = require('@hapi/joi');
const db = require('./db-config');

const routes = [
  {
    method: 'POST',
    path: '/register',
    handler: (request, h) => {
      // Logika untuk mendaftarkan toko
    },
  },
  {
    method: 'POST',
    path: '/login',
    handler: (request, h) => {
      // Logika untuk login sebagai akun toko
    },
  },
  {
    method: 'PUT',
    path: '/profile',
    handler: (request, h) => {
      // Logika untuk merubah profile toko
    },
  },
  {
    method: 'POST',
    path: '/products',
    handler: (request, h) => {
      // Logika untuk menambahkan produk
    },
  },
  {
    method: 'DELETE',
    path: '/products/{productId}',
    handler: (request, h) => {
      // Logika untuk menghapus produk
    },
  },
  {
    method: 'PUT',
    path: '/products/{productId}',
    handler: (request, h) => {
      // Logika untuk mengupdate produk
    },
  },
  // Rute fallback untuk penanganan error 404
  {
    method: '*',
    path: '/{any*}',
    handler: (request, h) => {
      return h.response({ message: 'Not Found' }).code(404);
    },
  },
];

module.exports = routes;
