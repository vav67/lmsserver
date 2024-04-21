/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
   //   domains:['res.cloudinary.com','randomuser.me'],
   remotePatterns: [
    {
      protocol: 'https',
      hostname: 'res.cloudinary.com',
      pathname: '**',
    },
     
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        pathname: '**',
      },
     
  ],
    }, 

  //     experimental:{
  //   //    reactRoot: true,
  //   //    suppressHydrationWarning: true,
  //   missingSuspenseWithCSRBailout: false, //https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
  // },
 
  }

//export default nextConfig;
module.exports = nextConfig
