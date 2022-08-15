import fetch from 'node-fetch';

(async() => {
  // 100 is the max the API will accept
  const perPage = 100;

  const searchApiUrl = (query: string, page: number) => (
    `https://exercises.openstax.org/api/exercises?per_page=${perPage}&page=${page}&query=${query}`
  );

  const query = process.argv.slice(2).join(' ');

  let totalPages = 1;

  for (let page = 1; page <= totalPages; page++) {
    const response = await fetch(searchApiUrl(query, page));
    const { total_count, items } = await response.json();
    totalPages = Math.ceil(total_count/perPage);
    console.log(items.length);
  }
})();
