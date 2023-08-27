const KEY = '37824145-be18cc7d6cb834b81dd7f47f7';

export const getFetch = async ({ search, page}) => {
    const params = new URLSearchParams({
      q: search,
      per_page: 10,
      image_type: 'photo',
      page: page,
      orientation: 'horizontal',
    });

    const respons = await fetch(
      `https://pixabay.com/api/?key=${KEY}&${params}`
    );

    if (!respons.ok) {
      throw new Error('An error has occurred. Try again.');
    }

    const data = await respons.json();

    return data;
  };