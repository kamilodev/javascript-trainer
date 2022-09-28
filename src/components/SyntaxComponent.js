import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

/* import React, { useEffect } from 'react';
import Prism from 'prismjs'; */

// export default function Code({ code, language }) {
// 	useEffect(() => {
// 		Prism.highlightAll();
// 	}, []);

// 	return (
// 		<div className='Code'>
// 			<h2> Code Syntax Block {language}</h2>
// 			<pre>
// 				<code className={`language-${language}`}>{code}</code>
// 			</pre>
// 		</div>
// 	);
// }

export default function Code({ code }) {
	return (
		<SyntaxHighlighter language='javascript' style={docco}>
			{code}
		</SyntaxHighlighter>
	);
}
