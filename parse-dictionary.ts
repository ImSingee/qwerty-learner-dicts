import { chinaExam, internationalExam } from "./dictionary.ts"

const dictionaries = [...chinaExam, ...internationalExam]

await Deno.writeFile('./dictionary.json', new TextEncoder().encode(JSON.stringify(dictionaries)))