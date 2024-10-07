/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: () =>
    {
        return [
            {
                source: "/",
                destination: "/home",
            },
            {
                source: "/imc",
                destination: "/IMC",
            },
            {
                source: "/medias",
                destination: "/Medias",
            }
        ]
    }

};

export default nextConfig;
