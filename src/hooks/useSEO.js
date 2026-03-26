import { useEffect } from 'react';

const defaults = {
  title: 'Life-Ratownictwo | Profesjonalna Pomoc Medyczna Racibórz',
  description: 'Life-Ratownictwo Medyczne — profesjonalny transport medyczny, zabezpieczenia imprez i szkolenia z pierwszej pomocy w Raciborzu i na Śląsku.',
};

const useSEO = ({ title, description } = {}) => {
  useEffect(() => {
    const pageTitle = title ? `${title} | Life-Ratownictwo` : defaults.title;
    const pageDesc = description || defaults.description;

    document.title = pageTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', pageDesc);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', pageTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', pageDesc);

    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', pageTitle);

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', pageDesc);

    return () => {
      document.title = defaults.title;
      if (metaDesc) metaDesc.setAttribute('content', defaults.description);
      if (ogTitle) ogTitle.setAttribute('content', defaults.title);
      if (ogDesc) ogDesc.setAttribute('content', defaults.description);
      if (twTitle) twTitle.setAttribute('content', defaults.title);
      if (twDesc) twDesc.setAttribute('content', defaults.description);
    };
  }, [title, description]);
};

export default useSEO;
