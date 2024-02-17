export async function getAnimesResponse(resource, query) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const anime = await response.json();
  return anime;
}

export async function getNestedAnimeResponse(resource, objectProperty) {
  const response = await getAnimesResponse(resource);
  return response.data.flatMap((item) => item[objectProperty]);
}

export function reproduce(data, gap) {
  const first = Math.floor(Math.random() * (data.length - gap) + 1);
  const last = first + gap;

  const response = {
    data: data.slice(first, last),
  };

  return response;
}
