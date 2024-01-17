'use client';

export default function NoticiascardJor({ newsItem }) {
    const formatDate = (timestamp) => {
        // Implement a function to format the timestamp as needed
        // For example, you can use the Date object or a library like moment.js
        // Return the formatted timestamp
    };

    return (
        <div className="bg-[#c6c6c6] p-4 text-gray rounded-lg max-w-sm">
            <h2 className="text-lg font-bold bg-[#a58ab4] p-2 rounded-md">
                {newsItem.name}
            </h2>
            <p className="mt-2 text-sm">
                {newsItem.description}
            </p>
            <p className="mt-4 text-sm">
                {newsItem.additionalContent}
            </p>
            <div className="flex items-center justify-between mt-4 bg-yellow-200 p-4 rounded-md">
                <div className="flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-400"
                    >
                        <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                    <span className="ml-2">{newsItem.mediaName}</span>
                </div>
                <span>{formatDate(newsItem.timestamp)}</span>
            </div>
        </div>
    );
}

  