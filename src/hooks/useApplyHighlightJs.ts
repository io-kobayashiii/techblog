'use client';

import { useEffect, useState } from 'react';
import styles from '@/components/ArticleBody/ArticleBody.module.scss';
import Highlight from 'highlight.js';

export const useApplyHighlightJs = () => {
  console.log('useApplyHighlightJs');
  const [isInitialized, setIsInitialized] = useState(false);
  useEffect(() => {
    if (isInitialized) return;
    setIsInitialized(true);
    console.log('useApplyHighlightJs: Start applying');

    const pres = document.querySelectorAll('pre');
    if (!pres.length) return;

    Array.prototype.forEach.call(pres, (pre: HTMLPreElement) => {
      const code = pre.querySelector('code');
      if (code) {
        const [language, heading, content] = code.innerHTML.split('_____');
        pre.classList.add(styles.preCodeLanguage);
        pre.setAttribute(
          'data-heading',
          heading == 'none' ? language : heading
        );
        code.className = `hljs ${language === 'terminal' ? 'bash' : language}`;
        code.innerHTML = content;
      }
    });

    console.log('Do highlightAll');
    Highlight.highlightAll();
  }, [isInitialized]);
};
