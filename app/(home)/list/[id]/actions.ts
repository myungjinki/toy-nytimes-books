import { BASE_URL } from "@/app/lib/constants";

// TODO: Error handling
export async function getBookList(name: string) {
  const response = await fetch(`${BASE_URL}/list?name=${name}`);
  return await response.json();
}
