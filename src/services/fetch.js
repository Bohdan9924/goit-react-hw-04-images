const KEY = '37824145-be18cc7d6cb834b81dd7f47f7';

export const getFetch = async ({ search, page}) => {
    const params = new URLSearchParams({
      q: search,
      per_page: 12,
      image_type: 'photo',
      page: page,
      orientation: 'horizontal',
    });

    const respons = await fetch(
      `https://pixabay.com/api/?key=${KEY}&${params}`
    );

    if (!respons.ok) {
      throw new Error('Unfortunately, an error occurred. Try again.');
    }

    const data = await respons.json();

    return data;
  };