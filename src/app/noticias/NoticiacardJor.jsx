export default function Component() {
    return (
      <div class="bg-[#c6c6c6] p-4 text-gray rounded-lg max-w-sm">
        <h2 class="text-lg font-bold bg-[#a58ab4] p-2 rounded-md">Título de Noticia lorem ipsum hasta 3 líneas de texto</h2>
        <p class="mt-2 text-sm">
          Lorem ipsum dolor sit amet consectetur. Lectus in gravida blandit arcu tortor viverra. Pellentesque purus in
          turpis ac diam cursus aliquam elementum. Augue aliquam nisi pulvinar mauris nibh libero est massa. Vitae posuere
          diam elementum.
        </p>
        <p class="mt-4 text-sm">
          Lorem ipsum dolor sit amet consectetur. Lectus in gravida blandit arcu tortor viverra. Pellentesque purus in
          turpis ac diam cursus aliquam elementum.
        </p>
        <div class="flex items-center justify-between mt-4 bg-yellow-200 p-4 rounded-md">
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-green-400"
            >
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
            <span class="ml-2">Media Name</span>
          </div>
          <span>Timestamp</span>
        </div>
      </div>
    );
  }
  
  