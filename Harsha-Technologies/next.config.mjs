/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/hp-printer-repair-hyderabad.html",
        destination: "/brands/hp-printer-repair",
        permanent: true
      },
      {
        source: "/printer-repair-kukatpally.html",
        destination: "/areas/kukatpally-printer-repair",
        permanent: true
      },
      {
        source: "/doorstep-repair-service.html",
        destination: "/services",
        permanent: true
      },
      {
        source: "/contact.html",
        destination: "/contact",
        permanent: true
      },
      {
        source: "/index.html",
        destination: "/",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
