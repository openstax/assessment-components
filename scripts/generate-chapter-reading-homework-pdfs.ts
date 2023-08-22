import { readFile, writeFile, mkdir } from 'fs/promises';
import { ExerciseData } from 'src/types';
import util from 'util';
const exec = util.promisify(require('child_process').exec);
import path from 'path';

const filterName = process.argv[3];

const readExercises = async () => {
  const exercisesJsonPath = process.argv[2];
  const fileContents = await readFile(exercisesJsonPath, 'utf8');
  return JSON.parse(fileContents).exercises;
};

const filterAndGroupExercises = (exercises: ExerciseData[]) => {
  const moduleGroups = {};
  let filteredExercises = exercises;

  if (filterName === 'single-part-multiple-choice-only') {
    filteredExercises = exercises.filter(exercise =>
      exercise.questions.length === 1 &&
      exercise.questions[0].formats.includes('multiple-choice') &&
      !exercise.questions[0].formats.includes('free-response')
    );
  }

  filteredExercises.forEach((exercise) => {
    const moduleTag = exercise.tags.find(tag => tag.startsWith('module-slug:'));

    if (moduleTag) {
      const moduleId = moduleTag.split(':')[2];
      if (!moduleGroups[moduleId]) {
        moduleGroups[moduleId] = [];
      }
      moduleGroups[moduleId].push(exercise);
    }
  });

  return moduleGroups;
};

const splitByAssignmentType = (group: ExerciseData[]) => {
  const reading: ExerciseData[] = [];
  const homework: ExerciseData[] = [];

  group.forEach(exercise => {
    if (exercise.tags.includes('assignment-type:reading')) {
      reading.push(exercise);
    }

    if (exercise.tags.includes('assignment-type:homework')) {
      homework.push(exercise);
    }
  });

  return { reading, homework };
};

const generatePDF = async (exercises: ExerciseData[], filename: string) => {
  const mainJsonPath = path.join(__dirname, '..', '..', 'exercises.json');
  await writeFile(mainJsonPath, JSON.stringify({ exercises: exercises })).catch(console.error);
  const { stdout, stderr } = await exec(`yarn generate-pdf ${filename}`);
  console.log(stdout);
  if (stderr) {
    console.error(stderr);
  }
};

const processExercises = async () => {
  console.log('loading exercises...');
  const exercises = await readExercises();

  if (!exercises || exercises.length === 0) {
    console.error('no exercises found');
    process.exit(1);
  }

  const moduleGroups = filterAndGroupExercises(exercises);

  const tmpDirPath = path.join(__dirname, '..', '..', 'tmp');
  await mkdir(tmpDirPath, { recursive: true });

  for (const moduleId in moduleGroups) {
    const group = moduleGroups[moduleId];
    const { reading, homework } = splitByAssignmentType(group);

    if (reading.length > 0) {
      await generatePDF(reading, path.join(tmpDirPath, `${moduleId}-reading.pdf`));
    }

    if (homework.length > 0) {
      await generatePDF(homework, path.join(tmpDirPath, `${moduleId}-homework.pdf`));
    }
  }
};

processExercises().catch(err => console.error(err));
