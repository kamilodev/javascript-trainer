import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Code({ code }) {
	return (
		<SyntaxHighlighter language='javascript' style={docco}>
			{code}
		</SyntaxHighlighter>
	);
}
