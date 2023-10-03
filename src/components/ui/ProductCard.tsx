import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { Product } from "../../constants/types";

interface ProductCard {
  data: Product;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  return (
    <a
      href=""
      className="outline-0 focus:ring-2 hover:ring-2 ring-primary transition duration-300 rounded-lg"
    >
      <Card className="rounded-lg border-2">
        <CardContent className="pt-4">
          <div className="aspect-square relative bg-foreground/5 dark:bg-background rounded-lg">
            <img
              src={data.images?.[0]}
              alt=""
              className="aspect-square object-cover rounded-lg transition-all duration-300 hover:scale-105"
            />
          </div>
        </CardContent>
        <CardFooter className="flex-col items-start">
          <div>
            <p className="font-semibold text-lg">{data.name}</p>
            <p className="text-sm font-bold text-primary-foreground dark:text-primary">
              {data.category}
            </p>
          </div>
          <div className="flex items-center justify-between">{data?.price}</div>
        </CardFooter>
      </Card>
    </a>
  );
};

export default ProductCard;
