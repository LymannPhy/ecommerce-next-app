import Image from 'next/image'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Discover the story behind TinkProduct Online and our commitment to bringing convenience and innovation to your shopping experience.",
  keywords: ["about us", "mission", "values", "team"],
  openGraph: {
    title: "About Us - TinkProduct Online",
    description: "Discover the story behind TinkProduct Online and our commitment to bringing convenience and innovation to your shopping experience.",
    images: [
      "https://i.pinimg.com/564x/76/e6/b9/76e6b9355380c85fe9a80dddae96172c.jpg"
    ]
  }
};


const page = () => {
  return (
    <main className="max-w-screen-xl mx-auto">
      <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <Image width={1000} height={1000} src="/assets/about-1.jpg" alt=""
                      className="w-full rounded-2xl" />
                  </div>
                  <div className="py-3 sm:py-4">
                    <Image width={1000} height={1000} src="/assets/about-2.jpg" alt=""
                      className="w-full rounded-2xl" />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <Image width={1000} height={1000} src="/assets/about-3.jpg" alt=""
                      className="w-full rounded-2xl" />
                    <span className="absolute -right-7 -bottom-7 z-[-1]">
                      <svg width="134" height="106" viewBox="0 0 134 106" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle cx="1.66667" cy="104" r="1.66667"
                          transform="rotate(-90 1.66667 104)" fill="#FD3D57" />
                        <circle cx="16.3333" cy="104" r="1.66667"
                          transform="rotate(-90 16.3333 104)" fill="#FD3D57" />
                        <circle cx="31" cy="104" r="1.66667" transform="rotate(-90 31 104)"
                          fill="#FD3D57" />
                        <circle cx="45.6667" cy="104" r="1.66667"
                          transform="rotate(-90 45.6667 104)" fill="#FD3D57" />
                        <circle cx="60.3334" cy="104" r="1.66667"
                          transform="rotate(-90 60.3334 104)" fill="#FD3D57" />
                        <circle cx="88.6667" cy="104" r="1.66667"
                          transform="rotate(-90 88.6667 104)" fill="#FD3D57" />
                        <circle cx="117.667" cy="104" r="1.66667"
                          transform="rotate(-90 117.667 104)" fill="#FD3D57" />
                        <circle cx="74.6667" cy="104" r="1.66667"
                          transform="rotate(-90 74.6667 104)" fill="#FD3D57" />
                        <circle cx="103" cy="104" r="1.66667" transform="rotate(-90 103 104)"
                          fill="#FD3D57" />
                        <circle cx="132" cy="104" r="1.66667" transform="rotate(-90 132 104)"
                          fill="#FD3D57" />
                        <circle cx="1.66667" cy="89.3333" r="1.66667"
                          transform="rotate(-90 1.66667 89.3333)" fill="#FD3D57" />
                        <circle cx="16.3333" cy="89.3333" r="1.66667"
                          transform="rotate(-90 16.3333 89.3333)" fill="#FD3D57" />
                        <circle cx="31" cy="89.3333" r="1.66667" transform="rotate(-90 31 89.3333)"
                          fill="#FD3D57" />
                        <circle cx="45.6667" cy="89.3333" r="1.66667"
                          transform="rotate(-90 45.6667 89.3333)" fill="#FD3D57" />
                        <circle cx="60.3333" cy="89.3338" r="1.66667"
                          transform="rotate(-90 60.3333 89.3338)" fill="#FD3D57" />
                        <circle cx="88.6667" cy="89.3338" r="1.66667"
                          transform="rotate(-90 88.6667 89.3338)" fill="#FD3D57" />
                        <circle cx="117.667" cy="89.3338" r="1.66667"
                          transform="rotate(-90 117.667 89.3338)" fill="#FD3D57" />
                        <circle cx="74.6667" cy="89.3338" r="1.66667"
                          transform="rotate(-90 74.6667 89.3338)" fill="#FD3D57" />
                        <circle cx="103" cy="89.3338" r="1.66667"
                          transform="rotate(-90 103 89.3338)" fill="#FD3D57" />
                        <circle cx="132" cy="89.3338" r="1.66667"
                          transform="rotate(-90 132 89.3338)" fill="#FD3D57" />
                        <circle cx="1.66667" cy="74.6673" r="1.66667"
                          transform="rotate(-90 1.66667 74.6673)" fill="#FD3D57" />
                        <circle cx="1.66667" cy="31.0003" r="1.66667"
                          transform="rotate(-90 1.66667 31.0003)" fill="#FD3D57" />
                        <circle cx="16.3333" cy="74.6668" r="1.66667"
                          transform="rotate(-90 16.3333 74.6668)" fill="#FD3D57" />
                        <circle cx="16.3333" cy="31.0003" r="1.66667"
                          transform="rotate(-90 16.3333 31.0003)" fill="#FD3D57" />
                        <circle cx="31" cy="74.6668" r="1.66667" transform="rotate(-90 31 74.6668)"
                          fill="#FD3D57" />
                        <circle cx="31" cy="31.0003" r="1.66667" transform="rotate(-90 31 31.0003)"
                          fill="#FD3D57" />
                        <circle cx="45.6667" cy="74.6668" r="1.66667"
                          transform="rotate(-90 45.6667 74.6668)" fill="#FD3D57" />
                        <circle cx="45.6667" cy="31.0003" r="1.66667"
                          transform="rotate(-90 45.6667 31.0003)" fill="#FD3D57" />
                        <circle cx="60.3333" cy="74.6668" r="1.66667"
                          transform="rotate(-90 60.3333 74.6668)" fill="#FD3D57" />
                        <circle cx="60.3333" cy="30.9998" r="1.66667"
                          transform="rotate(-90 60.3333 30.9998)" fill="#FD3D57" />
                        <circle cx="88.6667" cy="74.6668" r="1.66667"
                          transform="rotate(-90 88.6667 74.6668)" fill="#FD3D57" />
                        <circle cx="88.6667" cy="30.9998" r="1.66667"
                          transform="rotate(-90 88.6667 30.9998)" fill="#FD3D57" />
                        <circle cx="117.667" cy="74.6668" r="1.66667"
                          transform="rotate(-90 117.667 74.6668)" fill="#FD3D57" />
                        <circle cx="117.667" cy="30.9998" r="1.66667"
                          transform="rotate(-90 117.667 30.9998)" fill="#FD3D57" />
                        <circle cx="74.6667" cy="74.6668" r="1.66667"
                          transform="rotate(-90 74.6667 74.6668)" fill="#FD3D57" />
                        <circle cx="74.6667" cy="30.9998" r="1.66667"
                          transform="rotate(-90 74.6667 30.9998)" fill="#FD3D57" />
                        <circle cx="103" cy="74.6668" r="1.66667"
                          transform="rotate(-90 103 74.6668)" fill="#FD3D57" />
                        <circle cx="103" cy="30.9998" r="1.66667"
                          transform="rotate(-90 103 30.9998)" fill="#FD3D57" />
                        <circle cx="132" cy="74.6668" r="1.66667"
                          transform="rotate(-90 132 74.6668)" fill="#FD3D57" />
                        <circle cx="132" cy="30.9998" r="1.66667"
                          transform="rotate(-90 132 30.9998)" fill="#FD3D57" />
                        <circle cx="1.66667" cy="60.0003" r="1.66667"
                          transform="rotate(-90 1.66667 60.0003)" fill="#FD3D57" />
                        <circle cx="1.66667" cy="16.3333" r="1.66667"
                          transform="rotate(-90 1.66667 16.3333)" fill="#FD3D57" />
                        <circle cx="16.3333" cy="60.0003" r="1.66667"
                          transform="rotate(-90 16.3333 60.0003)" fill="#FD3D57" />
                        <circle cx="16.3333" cy="16.3333" r="1.66667"
                          transform="rotate(-90 16.3333 16.3333)" fill="#FD3D57" />
                        <circle cx="31" cy="60.0003" r="1.66667" transform="rotate(-90 31 60.0003)"
                          fill="#FD3D57" />
                        <circle cx="31" cy="16.3333" r="1.66667" transform="rotate(-90 31 16.3333)"
                          fill="#FD3D57" />
                        <circle cx="45.6667" cy="60.0003" r="1.66667"
                          transform="rotate(-90 45.6667 60.0003)" fill="#FD3D57" />
                        <circle cx="45.6667" cy="16.3333" r="1.66667"
                          transform="rotate(-90 45.6667 16.3333)" fill="#FD3D57" />
                        <circle cx="60.3333" cy="60.0003" r="1.66667"
                          transform="rotate(-90 60.3333 60.0003)" fill="#FD3D57" />
                        <circle cx="60.3333" cy="16.3333" r="1.66667"
                          transform="rotate(-90 60.3333 16.3333)" fill="#FD3D57" />
                        <circle cx="88.6667" cy="60.0003" r="1.66667"
                          transform="rotate(-90 88.6667 60.0003)" fill="#FD3D57" />
                        <circle cx="88.6667" cy="16.3333" r="1.66667"
                          transform="rotate(-90 88.6667 16.3333)" fill="#FD3D57" />
                        <circle cx="117.667" cy="60.0003" r="1.66667"
                          transform="rotate(-90 117.667 60.0003)" fill="#FD3D57" />
                        <circle cx="117.667" cy="16.3333" r="1.66667"
                          transform="rotate(-90 117.667 16.3333)" fill="#FD3D57" />
                        <circle cx="74.6667" cy="60.0003" r="1.66667"
                          transform="rotate(-90 74.6667 60.0003)" fill="#FD3D57" />
                        <circle cx="74.6667" cy="16.3333" r="1.66667"
                          transform="rotate(-90 74.6667 16.3333)" fill="#FD3D57" />
                        <circle cx="103" cy="60.0003" r="1.66667"
                          transform="rotate(-90 103 60.0003)" fill="#FD3D57" />
                        <circle cx="103" cy="16.3333" r="1.66667"
                          transform="rotate(-90 103 16.3333)" fill="#FD3D57" />
                        <circle cx="132" cy="60.0003" r="1.66667"
                          transform="rotate(-90 132 60.0003)" fill="#FD3D57" />
                        <circle cx="132" cy="16.3333" r="1.66667"
                          transform="rotate(-90 132 16.3333)" fill="#FD3D57" />
                        <circle cx="1.66667" cy="45.3333" r="1.66667"
                          transform="rotate(-90 1.66667 45.3333)" fill="#FD3D57" />
                        <circle cx="1.66667" cy="1.66683" r="1.66667"
                          transform="rotate(-90 1.66667 1.66683)" fill="#FD3D57" />
                        <circle cx="16.3333" cy="45.3333" r="1.66667"
                          transform="rotate(-90 16.3333 45.3333)" fill="#FD3D57" />
                        <circle cx="16.3333" cy="1.66683" r="1.66667"
                          transform="rotate(-90 16.3333 1.66683)" fill="#FD3D57" />
                        <circle cx="31" cy="45.3333" r="1.66667" transform="rotate(-90 31 45.3333)"
                          fill="#FD3D57" />
                        <circle cx="31" cy="1.66683" r="1.66667" transform="rotate(-90 31 1.66683)"
                          fill="#FD3D57" />
                        <circle cx="45.6667" cy="45.3333" r="1.66667"
                          transform="rotate(-90 45.6667 45.3333)" fill="#FD3D57" />
                        <circle cx="45.6667" cy="1.66683" r="1.66667"
                          transform="rotate(-90 45.6667 1.66683)" fill="#FD3D57" />
                        <circle cx="60.3333" cy="45.3338" r="1.66667"
                          transform="rotate(-90 60.3333 45.3338)" fill="#FD3D57" />
                        <circle cx="60.3333" cy="1.66683" r="1.66667"
                          transform="rotate(-90 60.3333 1.66683)" fill="#FD3D57" />
                        <circle cx="88.6667" cy="45.3338" r="1.66667"
                          transform="rotate(-90 88.6667 45.3338)" fill="#FD3D57" />
                        <circle cx="88.6667" cy="1.66683" r="1.66667"
                          transform="rotate(-90 88.6667 1.66683)" fill="#FD3D57" />
                        <circle cx="117.667" cy="45.3338" r="1.66667"
                          transform="rotate(-90 117.667 45.3338)" fill="#FD3D57" />
                        <circle cx="117.667" cy="1.66683" r="1.66667"
                          transform="rotate(-90 117.667 1.66683)" fill="#FD3D57" />
                        <circle cx="74.6667" cy="45.3338" r="1.66667"
                          transform="rotate(-90 74.6667 45.3338)" fill="#FD3D57" />
                        <circle cx="74.6667" cy="1.66683" r="1.66667"
                          transform="rotate(-90 74.6667 1.66683)" fill="#FD3D57" />
                        <circle cx="103" cy="45.3338" r="1.66667"
                          transform="rotate(-90 103 45.3338)" fill="#FD3D57" />
                        <circle cx="103" cy="1.66683" r="1.66667"
                          transform="rotate(-90 103 1.66683)" fill="#FD3D57" />
                        <circle cx="132" cy="45.3338" r="1.66667"
                          transform="rotate(-90 132 45.3338)" fill="#FD3D57" />
                        <circle cx="132" cy="1.66683" r="1.66667"
                          transform="rotate(-90 132 1.66683)" fill="#FD3D57" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-lg font-semibold text-primary">
                  Why Choose Us
                </span>
                <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                  Tink Product
                </h2>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                  At Tink Product, we understand that your home is more than just a place to live – it a
                  reflection of your unique style and personality. That is why we are dedicated to bringing
                  you an unparalleled selection of high-quality furniture and decor pieces that not only
                  elevate your living space but also inspire creativity and comfort.
                </p>
                <p className="mb-8 text-base text-body-color dark:text-dark-6">
                  Join the SweatHome community today and let create a beautiful, comfortable, and
                  welcoming home together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">OUR TEAM</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably have not heard of them.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <Image width={100} height={100} alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="/assets/team-1.jpg" />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">Thoeng Mengseu</h2>
            <h3 className="text-gray-500 mb-3">Chief Technology Officer</h3>
            <p className="mb-4">Mengseu leads the technical development and innovation initiatives at Tink Product Online. </p>
            <span className="inline-flex">
              <a className="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <Image width={100} height={100} alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="/assets/team-2.jpg" />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">Ly Taing Ey</h2>
            <h3 className="text-gray-500 mb-3"> Head of Product Management</h3>
            <p className="mb-4">Taing Ey spearheads the product strategy and development efforts at Tink Product Online.</p>
            <span className="inline-flex">
              <a className="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <Image width={100} height={100} alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="/assets/team-3.jpg" />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">Pov Sokny</h2>
            <h3 className="text-gray-500 mb-3">UX/UI Designer</h3>
            <p className="mb-4">Sokny crafts intuitive, visually appealing user experiences for Tink Product Online digital platforms.</p>
            <span className="inline-flex">
              <a className="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <Image width={100} height={100} alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="/assets/team-4.jpg" />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">Tha Thyda</h2>
            <h3 className="text-gray-500 mb-3">Marketing Manager</h3>
            <p className="mb-4">Thyda leads marketing at Tink Product Online, driving brand awareness and customer.</p>
            <span className="inline-flex">
              <a className="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </main>
  )
}

export default page
