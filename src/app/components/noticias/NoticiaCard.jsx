'use client';

export default function Noticiacard({ newsItem }) {
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString('es-ES') + ' ' + date.toLocaleTimeString('es-ES');
    };

    return (
        <div className="bg-gray-light p-4 text-gray rounded-lg max-w-sm">
            <h3 className="text-lg font-bold bg-gray-txt font-chakra p-2 rounded-md">
                {newsItem.title}
            </h3>
            <h4 className="mt-2 text-sm bg-gray-txt font-chakra">
                {newsItem.description}
            </h4>
            <h5 className="mt-4 text-sm bg-gray-txt font-chakra">
                {newsItem.content || 'Contenido no disponible'}
            </h5>
            <div className="flex items-center justify-between mt-4 bg-lemon bg-gray-txt font-chakra p-4 rounded-md">
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
                    <span className="ml-2 text-sm bg-gray-txt font-chakra">{newsItem.source_id}</span>
                </div>
                <span className="mr-2 text-sm bg-gray-txt font-chakra">{formatDate(newsItem.pubDate)}</span>
            </div>
        </div>
    );
}
