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
	{
		question: `¿Qué imprime este código?

      function getName() {
         var name = "John";
         function printName() {
            console.log(name);
         }
         printName();
      }
      getName();
      `,
		answers: {
			answerA: 'John',
			answerB: 'Compile time error',
			answerC: 'undefined',
		},
		correctAnswer: 'John',
		response: 'false',
	},
	{
		question: `¿Qué hace una sentencia return en un bucle 
            forEach en un Array?
      `,
		answers: {
			answerA: 'Nada',
			answerB: 'Retorna el valor especificado',
			answerC: 'Finaliza el bucle',
		},
		correctAnswer: 'Nada',
		response: 'false',
	},
	{
		question: `¿Qué retorna la siguiente función?

      function resolveFast(x) {
         return new Promise((resolve) => {
            console.log(x)
         });
      }

      async function mainTest() {
         const x = resolveFast(10);
         console.log(5);
      }

      mainTest();
      `,
		answers: {
			answerA: '5, 10',
			answerB: 'No imprime nada',
			answerC: '10, 5',
		},
		correctAnswer: '10, 5',
		response: 'false',
	},
	{
		question: `¿Qué imprime este código?

      function getName() {
         var name = "John";
         
         function printName() {
            console.log(name);
         }
         printName();
      }
      getName();
      `,
		answers: {
			answerA: 'John',
			answerB: 'Compile time error',
			answerC: 'undefined',
		},
		correctAnswer: 'John',
		response: 'false',
	},
	{
		question: `¿Cuál expresión se usa para iterar sobre
      objetos asíncronos?
      `,
		answers: {
			answerA: 'if async then',
			answerB: 'for await... of',
			answerC: 'do while async',
		},
		correctAnswer: 'for await... of',
		response: 'false',
	},
	{
		question: `¿Qué imprime este código?

      let i = 10;

      for(; i < 12;){
         console.log(++i);
      }
      `,
		answers: {
			answerA: 'lint error',
			answerB: 'runtime error',
			answerC: '11, 12',
		},
		correctAnswer: '11, 12',
		response: 'false',
	},
	{
		question: `¿Qué retorna esta función?

      let scope = "global";

      getScope = () => {
         var scope = "local";
         const inner = () => {
            return scope;
         }
         
         return inner;
      }

      getScope()()
      `,
		answers: {
			answerA: 'global',
			answerB: 'local',
			answerC: 'undefined',
		},
		correctAnswer: 'local',
		response: 'false',
	},
	{
		question: `¿Qué valor retornará el array num[2][1]?

      const num = [
         ["a", "b", "c"],
         ["d", "e", "f"],
         ["g", "h", "i"],
      ];
      `,
		answers: {
			answerA: 'd',
			answerB: 'h',
			answerC: 'e',
		},
		correctAnswer: 'h',
		response: 'false',
	},
	{
		question: `¿Qué imprime este código?

      let arr = [1, 2, 3];

      arr.push(4);
      arr.pop();
      arr.slice(1,2);
      arr.splice(1,2);

      console.log(arr)
      `,
		answers: {
			answerA: '[1]',
			answerB: '[1,2]',
			answerC: '[2,3]',
		},
		correctAnswer: '[1]',
		response: 'false',
	},
	{
		question: `¿Cuáles arrow functions en JavaScript
      retornan un nuevo array?

      A) map()
      B) filter()
      C) forEach()
      D) find()
      `,
		answers: {
			answerA: 'A y B',
			answerB: 'A y D',
			answerC: 'B y C',
		},
		correctAnswer: 'A y B',
		response: 'false',
	},
	{
		question: `¿Qué imprime este código?

      const str = 'test1'

      switch (str) {
      case "test1":
      case "test2":
         console.log("At test2");
}
      `,
		answers: {
			answerA: 'At test2',
			answerB: 'Nada',
			answerC: 'Runtime Error',
		},
		correctAnswer: 'At test2',
		response: 'false',
	},
];
