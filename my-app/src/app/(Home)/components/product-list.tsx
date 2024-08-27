import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ToppingList } from "./topping-list";

export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
};
type Protype = { product: Product };
const ProductCard = ({ product }: Protype) => {
  return (
    <Card className="border-none rounded-xl">
      <CardHeader className="flex items-center justify-center">
        <Image
          src={product.image}
          alt="food"
          height={150}
          width={150}
          className="rounded-md"
        />
      </CardHeader>
      <CardContent>
        <h1 className="text-xl font-bold">{product.name}</h1>
        <p className="mt-2">{product.description}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <p>
          <span>From</span>
          <span className="font-bold">₹{product.price}</span>
        </p>

        <Dialog>
          <DialogTrigger className="bg-green-400 hover:bg-white rounded-full hover:text-green-500 hover:font-bold py-2 px-3 ">
            {" "}
            choose
          </DialogTrigger>
          <DialogContent className="bg-white max-w-3xl">
            <div className="flex  p-0 ">
              <div className="w-1/3 bg-white p-8 flex items-center justify-center">
                <Image
                  src={"/food.jpeg"}
                  alt="food"
                  height={500}
                  width={500}
                  className="rounded-md"
                />
              </div>
              <div className="w-2/3 p-8">
                <h3 className="text-xl font-bold text-primary ">Feast & Fusion</h3>
                <p className="font-semibold m-1">{product.description}</p>
             <div>   <h4 className="mt-6">Choose the size</h4>
                <RadioGroup
                  defaultValue="card"
                  className="grid grid-cols-3 gap-4 mt-2"
                >
                  <div>
                    <RadioGroupItem
                      value="small"
                      id="card"
                      className="peer sr-only"
                      aria-label="Card"
                    />
                    <Label
                      htmlFor="card"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      Small
                    </Label>
                  </div>

                  <div>
                    <RadioGroupItem
                      value="paypal"
                      id="paypal"
                      className="peer sr-only"
                      aria-label="Paypal"
                    />
                    <Label
                      htmlFor="paypal"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      Medium
                    </Label>
                  </div>

                  <div>
                    <RadioGroupItem
                      value="apple"
                      id="apple"
                      className="peer sr-only"
                      aria-label="Apple"
                    />
                    <Label
                      htmlFor="apple"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      Large
                    </Label>
                  </div>
                </RadioGroup>
                </div>
                <div>   <h4 className="mt-6">Choose Food</h4>
                <RadioGroup
                  defaultValue="card"
                  className="grid grid-cols-3 gap-4 mt-2"
                >
                  <div>
                    <RadioGroupItem
                      value="small"
                      id="card"
                      className="peer sr-only"
                      aria-label="Card"
                    />
                    <Label
                      htmlFor="card"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      icream
                    </Label>
                  </div>

                  <div>
                    <RadioGroupItem
                      value="paypal"
                      id="paypal"
                      className="peer sr-only"
                      aria-label="Paypal"
                    />
                    <Label
                      htmlFor="paypal"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      pizza
                    </Label>
                  </div>

                  <div>
                    <RadioGroupItem
                      value="apple"
                      id="apple"
                      className="peer sr-only"
                      aria-label="Apple"
                    />
                    <Label
                      htmlFor="apple"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      cake
                    </Label>
                  </div>
                </RadioGroup></div>
                <ToppingList/>

              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};
export default ProductCard;
