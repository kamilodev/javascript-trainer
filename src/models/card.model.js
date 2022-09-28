import '../styles/prism.css';

export const cards = [
	{
		question: `¿Que resultado sale por la consola?
                  
      console.log(new String("yes") === new String("yes"));
      console.log("yes" === "yes");`,
		answers: {
			answerA: 'Linea 1: true, Linea 2: true',
			answerB: 'Linea 1: false, Linea 2: true',
			answerC: 'Linea 1: true, Linea 2: false',
		},
		correctAnswer: 'Linea 1: false, Linea 2: true',
		response: 'false',
	},
	{
		question: 'JavaScript es un lenguaje...',
		answers: {
			answerA: 'Compilado',
			answerB: 'Interpretado',
			answerC: 'Las dos anteriores',
		},
		correctAnswer: 'Interpretado',
		response: 'false',
	},
	{
		question: `¿Cuál es el resultado por consola?
            
      let x = 10;

      const byValue = (y) => {
         y = 20;
      }
      
      byValue(x);
      console.log(x);
`,
		answers: {
			answerA: '10',
			answerB: '20',
			answerC: 'Compile time error',
		},
		correctAnswer: '10',
		response: 'false',
	},
	{
		question: `¿Qué código saldrá por consola?

      const x = new String("JavaScript");
      const y = x;

      console.log(x === y);
      `,
		answers: {
			answerA: 'True',
			answerB: 'Memory error',
			answerC: 'False',
		},
		correctAnswer: 'True',
		response: 'false',
	},
	{
		question: `¿Qué retorna esta función?

      async function goodbye() {
         return "Goodbye";
      }
      `,
		answers: {
			answerA: 'string',
			answerB: 'Promise',
			answerC: 'Async',
		},
		correctAnswer: 'Promise',
		response: 'false',
	},
	{
		question: `¿Cuál de las siguientes opciones NO es una diferencia entre 
      typeof e instanceof?
      `,
		answers: {
			answerA: 'typeof retorna un tipo, instanceof retorna un booleano',
			answerB: 'instanceof requiere TypeScritp y typeof No',
			answerC: 'typeof toma la variable por la derecha y instanceof ambos lados',
		},
		correctAnswer: 'instanceof requiere TypeScritp y typeof No',
		response: 'false',
	},
	{
		question: `¿Cuál de las siguientes resuelve cuando todas las promesas son resueltas, 
      o rechaza cuando alguna de las promesas es rechazada?
      `,
		answers: {
			answerA: 'Promise.resolve()',
			answerB: 'Promise.all()',
			answerC: 'Promise.any()',
		},
		correctAnswer: 'Promise.all()',
		response: 'false',
	},
	{
		question: `¿Qué código saldrá por consola?

      const map = new Map();
      map.set({}, 1);

      console.log(map.get({}));
      `,
		answers: {
			answerA: 'undefined',
			answerB: '1',
			answerC: 'Compile time error',
		},
		correctAnswer: 'undefined',
		response: 'false',
	},
	{
		question: `¿Qué código saldrá por consola?

      class Person {
         name: string;
         DOB: string;
      }

      console.log(typeof Person);
      `,
		answers: {
			answerA: 'class',
			answerB: 'object',
			answerC: 'function',
		},
		correctAnswer: 'function',
		response: 'false',
	},
];
