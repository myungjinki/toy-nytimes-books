import { BASE_URL } from "@/app/lib/constants";
import { Books } from "@/app/type";

// TODO: Error handling
export async function getBookList(name: string): Promise<Books> {
  const response = await fetch(`${BASE_URL}/list?name=${name}`);
  return await response.json();
}
