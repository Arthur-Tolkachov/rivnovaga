"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { PracticeCategoryModel } from "@entity/practiceCategory";
import { Button } from "@shared/ui/base/Button";

export interface CategoriesFilterProps {
  categories: PracticeCategoryModel[];
}

export const CategoriesFilter: React.FC<CategoriesFilterProps> = ({
  categories,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selected = searchParams?.get("categories") || "all";

  const handleChange = (title: string) => {
    const params = new URLSearchParams(searchParams?.toString());

    if (title === "all") {
      params.delete("categories");
    } else {
      params.set("categories", title);
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex gap-3 flex-wrap">
      <Button
        size="sm"
        variant={selected === "all" ? "filled" : "outlined-dark"}
        color="secondary"
        onClick={() => handleChange("all")}
      >
        Всi
      </Button>

      {categories.map(({ id, slug, title }) => (
        <Button
          key={id}
          size="sm"
          variant={selected === slug ? "filled" : "outlined-dark"}
          color="secondary"
          onClick={() => handleChange(slug)}
        >
          {title}
        </Button>
      ))}
    </div>
  );
};
