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
                source: "/matematicas",
                destination: "/maths",
            },
            {
                source: "/funcao-reaproveitada",
                destination: "/general-function",
            },
            {
                source: "/nativo",
                destination: "/fetch-page",
            },
            {
                source: "/pagina-com-axios",
                destination: "/axios-page",
            },
            {
                source: "/pagina-server-side",
                destination: "/server-side",
            },
        ]
    }

};

export default nextConfig;
