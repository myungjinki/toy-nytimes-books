import CategoryList from "../components/category-list";
import HomeHeader from "../components/home-header";

export default async function Home() {
  return (
    <div>
      <HomeHeader />
      <CategoryList />
    </div>
  );
}
