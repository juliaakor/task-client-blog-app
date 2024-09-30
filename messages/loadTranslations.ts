const translationFiles = ['about', 'author', 'blog', 'contact', 'home', 'policy'];

export const getTranslationsByLocale = async (locale: string) => {
  const translations = await Promise.all(
    translationFiles.map(async (file) => {
      const { default: fileDefault } = await import(`./${locale}/${file}.json`);

      return [file, fileDefault];
    })
  );

  return Object.fromEntries(translations);
};
