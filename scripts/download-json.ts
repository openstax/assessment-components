import { writeFile } from 'fs';
import fetch from 'node-fetch';

(async() => {
  // 100 is the max the API will accept
  const perPage = 100;

  const spliceOption = ((flag: string, defaultValue?: string) => {
    const argIndex = process.argv.indexOf(flag);
    if (argIndex === -1) {
      return defaultValue;
    } else {
      return process.argv.splice(argIndex, 2)[1];
    }
  }) as ((flag: string, defaultValue: string) => string) & ((flag: string) => string | undefined)

  const filename = spliceOption('-o');
  const token = spliceOption('-t');

  if (process.argv.length < 3) {
    console.error('Usage: yarn run-download-json [-o exercises.json] [-t token] <query>');
    process.exit(1);
  }

  const query = process.argv.slice(2).join(' ');

  const headers = {};
  if (token !== undefined) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const searchApiUrl = (query: string, page: number) => (
    `https://exercises.openstax.org/api/exercises?per_page=${perPage}&page=${page}&query=${query}`
  );

  let totalPages = 1;
  const exercises: object[] = [];
  for (let page = 1; page <= totalPages; page++) {
    const response = await fetch(searchApiUrl(query, page), { headers });
    const { total_count, items } = await response.json();

    totalPages = Math.ceil(total_count/perPage);
    exercises.push(...items);

    if (page === 1) {
      console.log(`Downloading ${total_count} exercises`);
    }
    console.log(`Progress: ${exercises.length}/${total_count}`);
  }

  writeFile('exercises.json', JSON.stringify({title: filename, exercises}), (err) => {
    if (err)
      console.error(err);
    else {
      console.log(`${exercises.length} exercises written to exercises.json`);
    }
  });
})();
