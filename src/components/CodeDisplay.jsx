import { Copy, Check } from 'lucide-react';
import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeDisplay = ({ javaCode }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(javaCode)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div className='overflow-hidden rounded-md w-full bg-[#1e1e1e]'>
      <div className='bg-zinc-900 flex justify-between items-center px-4 py-2'>
        <span className='text-sm text-zinc-300'>Java</span>
        <button 
          onClick={copyToClipboard}
          className='flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors'
          aria-label='Copy code'
        >
          {copied ? (
            <>
              <Check className='size-4 text-green-400' />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className='size-4' />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <SyntaxHighlighter 
        language='java' 
        style={atomDark}
        customStyle={{
          margin: 0,
          padding: '1rem',
          background: '#1e1e1e',
          fontSize: '0.875rem',
          lineHeight: '1.5',
        }}
        wrapLongLines={true}
      >
        {javaCode}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeDisplay;