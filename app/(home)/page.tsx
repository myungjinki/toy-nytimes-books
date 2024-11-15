import CategoryList from "../components/category-list";
import HomeHeader from "../components/home-header";

export default async function Home() {
  return (
    <div className="my-8">
      <HomeHeader />
      <CategoryList />
    </div>
  );
}
