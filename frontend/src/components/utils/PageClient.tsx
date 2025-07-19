"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function PageClient() {
    const router = useRouter();

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handleMessage = async (message: any) => {
            if (
                // Filters events emitted through the postMessage() API
                // message.origin === process.env.NEXT_PUBLIC_API_URL &&
                message.data.type === "strapiUpdate"
            ) { // Recommended way to refresh with Next.js
                router.refresh();
            }
        };
        // Add the event listener
        window.addEventListener("message", handleMessage);

        // Cleanup the event listener on unmount
        return () => {
            window.removeEventListener("message", handleMessage);
        };
    }, [router]);

    return null; // This component does not render anything
}