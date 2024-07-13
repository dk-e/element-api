"use client";

import Examples from "@/components/examples";
import randomEndpoint from "@/lib/randomEndpoint";
import Link from "next/link";

export default function Home() {
    return (
        <div className="relative min-h-screen bg-gradient-to-br bg-opacity-25 from-purple-500/20 to-indigo-500/20">
            <main className="flex flex-col lg:flex-row items-center justify-center lg:justify-between p-6 lg:p-24 gap-10">
                {/* Main content section */}
                <div className="flex flex-col items-center lg:items-start w-full max-w-2xl mb-10 lg:mb-0 text-center lg:text-left">
                    <h1 className="font-semibold text-4xl lg:text-8xl mb-6">Elements API</h1>

                    <div className="grid text-left lg:w-full lg:max-w-[41rem] lg:grid-cols-2 lg:text-left gap-4">
                        <Link
                            href="https://github.com/PeanutDumplings/element-api/blob/master/README.md"
                            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h2 className="mb-3 text-xl lg:text-2xl font-semibold">
                                Documentation{" "}
                                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                    -&gt;
                                </span>
                            </h2>
                            <p className="m-0 max-w-[20ch] text-sm opacity-50">Get information for each available endpoint</p>
                        </Link>

                        <Link
                            href={randomEndpoint()}
                            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h2 className="mb-3 text-xl lg:text-2xl font-semibold">
                                Random Endpoint{" "}
                                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                    -&gt;
                                </span>
                            </h2>
                            <p className="m-0 max-w-[20ch] text-sm opacity-50">Click to visit a random endpoint!</p>
                        </Link>
                    </div>
                </div>

                <div className="w-full lg:w-1/3">
                    <div className="p-6 flex flex-col items-center">
                        <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-white">Example Responses</h2>
                        <Examples />
                    </div>
                </div>
            </main>
        </div>
    );
}
