"use client";

import React, { useState, useEffect } from "react";
import { Bot, PenLine, Text, Search } from "lucide-react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useSearchParams } from "next/navigation";

export default function AskAi({ initialQuery = "" }) {
    const [reason, setReason] = useState(null);
    const [fetching, setFetching] = useState(false);
    const [error, setError] = useState(null);
    const [input, setInput] = useState("");
    const searchParams = useSearchParams();

    // Check for search query in URL on component mount
    useEffect(() => {
        const query = searchParams.get('q');
        if (query) {
            setInput(decodeURIComponent(query));
            handleAutoSearch(decodeURIComponent(query));
        } else if (initialQuery) {
            setInput(initialQuery);
        }
    }, [searchParams, initialQuery]);

    // Auto-search when query comes from URL
    const handleAutoSearch = async (query) => {
        if (query && query.length >= 3) {
            setFetching(true);
            setError(null);
            
            try {
                const response = await axios.post(`${process.env.NEXT_PUBLIC_API_KEY_AI_FINDER}`, {
                    prompt: query,
                });

                if (!response.status) {
                    throw new Error("Network response was not ok");
                }

                const data = await response.data;
                setReason(data.result.answer);
            } catch (error) {
                setError(error instanceof Error ? error.message : "An unexpected error occurred");
            } finally {
                setFetching(false);
            }
        }
    };

    const get_ai_response = async (event) => {
        event.preventDefault();

        setFetching(true);
        setError(null);

        if (!input){
            setError("Please describe your question in at least 3 characters.");
            setFetching(false);
            return;
        }

        if (input.length < 3) {
            setError("Please describe your question in at least 3 characters.");
            setFetching(false);
            return;
        }

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_KEY_AI_FINDER}`, {
                prompt: input,
            });

            if (!response.status) {
                throw new Error("Network response was not ok");
            }

            const data = await response.data;
            setReason(data.result.answer);
        } catch (error) {
            setError(error instanceof Error ? error.message : "An unexpected error occurred");
        } finally {
            setFetching(false);
        }
    };

    return (
        <div className="flex flex-col">
            {/* Search Box */}
            <div className=" justify-center mt-6 hidden">
                <div className="w-full max-w-3xl px-4">
                    <form 
                        onSubmit={get_ai_response}
                        className="relative"
                    >
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask NHDC AI a question..."
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#633f28] pr-12"
                        />
                        <button
                            type="submit"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#633f28] hover:text-[#99776c]"
                            disabled={fetching}
                        >
                            {fetching ? (
                                <div className="animate-spin h-5 w-5 border-4 border-[#633f28] border-t-transparent rounded-full"></div>
                            ) : (
                                <Search className="h-5 w-5" />
                            )}
                        </button>
                    </form>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col items-center mt-6">
                <div className="bg-white border border-slate-300 py-10 px-4 my-6 mx-3 rounded-lg shadow-md w-full max-w-3xl">
                    <h1 className="text-[#633f28] text-2xl flex font-bold flex-row">
                        <Bot className="h-7 w-7 text-[#633f28] mr-2" />
                       Tantu AI
                    </h1>

                    <h1 className="text-black font-semibold mt-10 text-lg">Your Question:</h1>

                    <form onSubmit={get_ai_response}>
                        <textarea
                            className="w-full h-32 text-sm border border-slate-300 rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-[#0172be] transition-all duration-500"
                            placeholder="e.g., What is the Role of NHDC for Benefit of Handloom Sector..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            required
                        />
                        <p className="text-slate-500 text-xs px-1 max-w-4xl mt-1">
                            It may take a few minutes for our AI to analyze your requirements and suggest the most suitable solution.
                        </p>

                        {error && <p className="text-red-500 px-1 mt-3 text-sm font-medium">{error}</p>}

                        <button
                            type="submit"
                            disabled={fetching}
                            className={`mt-7 px-7 py-2 flex flex-row bg-[#633f28] text-white text-md rounded-lg shadow-md hover:bg-[#99776c] transition-all duration-300 ${fetching ? "opacity-70 cursor-wait" : "opacity-100 cursor-pointer"}`}
                        >
                            {fetching ? (
                                <>
                                    <div className="animate-spin h-5 w-5 mr-3 border-4 border-y-transparent border-white rounded-full self-center"></div>
                                    Generating Response...
                                </>
                            ) : (
                                <>
                                    <Text className="w-5 h-5 self-center mr-3"/>
                                    Ask AI
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>

            {reason && !fetching && (
                <div className="flex flex-col items-center">
                    <div className="bg-[#f7d7d8] border border-[#99776c] w-full max-w-3xl py-2 px-4 mt-1 mb-15 mx-3 rounded-lg shadow-md">
                        <h1 className="my-3 font-bold px-1 text-md md:text-lg text-black flex flex-row">
                            <PenLine className="self-center w-5 h-5 flex-shrink-0 mr-2"/>
                            <span>Your AI Response</span>
                        </h1>
                        <p className="text-sm px-2 text-red-700">
                            Disclaimer: AI can make mistakes. NHDC does not guarantee the accuracy or reliability of the information provided.
                        </p>

                        <h1 className="font-semibold text-lg mt-5 px-3 mb-2">Answer:</h1>
                        <div className="markdown-formatting">
                            <div className="max-w-4xl px-4 text-black font-medium">
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>{reason}</ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}