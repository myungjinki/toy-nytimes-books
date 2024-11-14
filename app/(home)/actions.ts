import { BASE_URL } from "@/app/lib/constants";

export async function getCategoryList() {
  const response = await fetch(`${BASE_URL}/list`);
  return await response.json();
}
