const BASE_URL = "https://books-api.nomadcoders.workers.dev";

export async function getBookCategoryList() {
  const response = await fetch(`${BASE_URL}/list`);
  return await response.json();
}

// TODO: Error handling
export async function getBookList(name: string) {
  const response = await fetch(`${BASE_URL}/list?name=${name}`);
  return await response.json();
}
