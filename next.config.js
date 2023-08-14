/** @type {import('next').NextConfig} */
const withVideos = require('next-videos');
const withPWA = require('next-pwa');
const nextConfig = {}

module.exports = withVideos(
    withPWA({
      pwa:{
        dest:'public',
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV === 'development'
      } 
    }),
    nextConfig
    )





