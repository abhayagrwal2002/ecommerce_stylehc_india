import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId:'wv2v0wxs',
    dataset:'production',
    apiVersion:'2022-09-02',
    useCdn:true,
    token:"skI5IRR6uglCEhDVdJHAQCYGFMYCi7ccWunKojmKiuDuJqs80W5O3PAU488Jr6nfRSRMeARyKwPUP86YqPmAjDiaKxONSHRqIGKGjbfjKxp9EqQRwptUwbWJ0yDcdMpct9L3oQKax56K4MFct2Dg8K4W3LYxjwibTZ0chA2BceJhXmw5bBDz"
});

const builder = imageUrlBuilder(client);

export const urlFor =(source)=> builder.image(source);