import { BASE_URL } from "@/app/lib/constants";
import { Category } from "../type";

export async function getCategoryList(): Promise<Category> {
  const response = await fetch(`${BASE_URL}/lists`);
  return await response.json();
}
