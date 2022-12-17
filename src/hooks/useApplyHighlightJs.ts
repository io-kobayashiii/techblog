import { useEffect } from 'react';
import styles from '@/styles/pages/articles/articles.module.scss';
import hljs from 'highlight.js';

export const useApplyHighlightJs = () => {
  useEffect(() => {
    const preElems = document.querySelectorAll('pre');
    if (preElems.length > 0) {
      Array.prototype.forEach.call(preElems, (preElem) => {
        preElem.classList.add(styles.preCodeLanguage);
        const codeElem = preElem.querySelector('code');
        const splittedElemInner = codeElem.innerHTML.split('_____');
        switch (splittedElemInner[0]) {
          case 'terminal':
            codeElem.className = `hljs bash`;
            break;
          default:
            codeElem.className = `hljs ${splittedElemInner[0]}`;
            break;
        }
        preElem.setAttribute(
          'data-language',
          splittedElemInner[1] == 'none'
            ? splittedElemInner[0]
            : splittedElemInner[1]
        );
        codeElem.innerHTML = splittedElemInner[2];
      });
      hljs.highlightAll();
    }
  }, []);
};
