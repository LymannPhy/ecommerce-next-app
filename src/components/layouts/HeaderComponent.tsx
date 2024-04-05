import Image from 'next/image'
import React from 'react'

const HeaderComponent = () => {
    return (
        <div className="w-[90%] mx-auto mt-20">
            <div className="-mx-4 flex flex-wrap ">
                <div className="w-full mx-auto px-4 lg:w-5/12">
                    <div className="hero-content">
                        <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
                            <span className="text-blue-600">TinkProduct </span> Online
                        </h1>
                        <p className="mb-8 max-w-[480px] text-base text-body-color dark:text-dark-6">
                            Discover a world of endless possibilities with TinkProduct! From cutting-edge electronics to trendy fashion and cozy home essentials, our online platform brings convenience to your fingertips.
                        </p>
                        <ul className="flex flex-wrap items-center">
                            <li>
                                <a
                                    href="/#"
                                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-dark lg:px-7"
                                >
                                    Get Started
                                </a>
                            </li>
                        </ul>
                        <div className="clients pt-8">
                            <h6 className="mb-6 flex items-center text-xs font-normal text-body-color dark:text-dark-6">
                                Some Of Our Clients
                                <span className="ml-3 inline-block h-px w-8 bg-body-color"></span>
                            </h6>

                            <div className="flex items-center space-x-4">
                                <Image width={120} height={120}
                                    alt="client"
                                    src="/assets/CSTAD_120.png"
                                />

                                <Image width={120} height={120}
                                    alt='client'
                                    src="/assets/Royal.png"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden px-4 lg:block lg:w-1/12"></div>
                <div className="w-full px-4 lg:w-6/12">
                    <div className="lg:ml-auto lg:text-right">
                        <div className="relative z-10 inline-block pt-11 lg:pt-0">
                            <Image width={1000} height={1000}
                                src="/assets/shopping.jpg"
                                alt="hero"
                                className="max-w-full lg:ml-auto rounded-md"
                            />
                            <span className="absolute -bottom-8 -left-8 z-[-1]">
                                <svg
                                    width="93"
                                    height="93"
                                    viewBox="0 0 93 93"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                                    <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                                    <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                                    <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                                    <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                                    <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                                    <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                                    <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                                    <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                                    <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                                    <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                                    <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                                    <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                                    <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                                    <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                                    <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                                    <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                                    <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                                    <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                                    <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                                    <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                                    <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                                    <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                                    <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                                    <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent
