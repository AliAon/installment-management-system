import { ErrorMessage, Field, useFormikContext } from "formik";
import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

export default function AddProductForm() {
  const { values, setFieldValue } = useFormikContext();

  return (
    <>
      <div className="grid grid-cols-12 gap-4 py-4">
        <div className="col-span-12 max-w-fit">
          <h2 className="font-poppins font-semibold mb-2">Product Details</h2>
          <hr />
        </div>

        {/* Product Name */}
        <div className="sm:col-span-6 col-span-12">
          <Label>Product Name</Label>

          <Field
            as={Input}
            name="product_name"
            type="text"
            value={values?.product_name}
            className="mt-2"
            placeholder="Enter product name"
          />

          <ErrorMessage
            name="product_name"
            component="span"
            className="text-xs text-red-500"
          />
        </div>

        {/* Product Purchase Price */}
        <div className="sm:col-span-6 col-span-12">
          <Label>Product Purchase Price</Label>

          <Field
            as={Input}
            name="product_purchase_price"
            type="number"
            value={values?.product_purchase_price}
            className="mt-2"
            placeholder="Enter purchase price"
          />

          <ErrorMessage
            name="product_purchase_price"
            component="span"
            className="text-xs text-red-500"
          />
        </div>

        {/* Net Price */}
        <div className="sm:col-span-6 col-span-12">
          <Label>Net Price</Label>

          <Field
            as={Input}
            name="net_price"
            type="text"
            value={values?.net_price}
            className="mt-2"
            placeholder="Enter net price"
          />

          <ErrorMessage
            name="net_price"
            component="span"
            className="text-xs text-red-500"
          />
        </div>

        {/* Net Price */}
        <div className="sm:col-span-6 col-span-12">
          <Label>Markup Percentage</Label>

          <Field
            as={Input}
            name="markup_percentage"
            type="text"
            value={values?.markup_percentage}
            className="mt-2"
            placeholder="Enter markup percentage"
          />

          <ErrorMessage
            name="markup_percentage"
            component="span"
            className="text-xs text-red-500"
          />
        </div>

        {/* Product Picture */}
        <div className="sm:col-span-6 col-span-12">
          <Label>Product Picture</Label>

          <Input
            type="file"
            className="mt-2"
            onChange={(event) => {
              setFieldValue("product_picture", event.currentTarget.files[0]);
            }}
          />

          <ErrorMessage
            name="product_picture"
            component="span"
            className="text-xs text-red-500"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex items-center justify-between mt-5">
        <Button type="submit" size="lg" className="rounded-2xl">
          Submit
        </Button>
      </div>
    </>
  );
}
