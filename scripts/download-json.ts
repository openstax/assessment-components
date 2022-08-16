import { writeFile } from 'fs';
import fetch from 'node-fetch';

(async() => {
  // 100 is the max the API will accept
  const perPage = 100;

  let filename = 'exercises.json';
  const outputArgsIndex = process.argv.indexOf('-o');
  if (outputArgsIndex !== -1) {
    const outputArgs = process.argv.splice(outputArgsIndex, 2);
    filename = outputArgs[1];
  }

  if (process.argv.length < 3) {
    console.error(`Usage: ${process.argv[0]} ${process.argv[1]} [-o exercises.json] <query>`);
    process.exit(1);
  }

  const query = process.argv.slice(2).join(' ');

  const searchApiUrl = (query: string, page: number) => (
    `https://exercises.openstax.org/api/exercises?per_page=${perPage}&page=${page}&query=${query}`
  );

  let totalPages = 1;
  const exercises: object[] = [];
  for (let page = 1; page <= totalPages; page++) {
    const response = await fetch(searchApiUrl(query, page));
    const { total_count, items } = await response.json();

    totalPages = Math.ceil(total_count/perPage);
    exercises.push(...items);

    if (page === 1) {
      console.log(`Downloading ${total_count} exercises`);
    }
    console.log(`Progress: ${exercises.length}/${total_count}`);
  }

  writeFile(filename, JSON.stringify(exercises), (err) => {
    if (err)
      console.error(err);
    else {
      console.log(`${exercises.length} exercises written to ${filename}`);
    }
  });
})();
