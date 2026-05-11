import { ErrorMessage, Field, useFormikContext } from "formik";
import React from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

export default function Basicform() {
  const { values, setFieldValue } = useFormikContext();

  const products = [
    {
      id: "1",
      name: "iPhone 15",
    },
    {
      id: "2",
      name: "Samsung S24",
    },
    {
      id: "3",
      name: "MacBook Pro",
    },
  ];

  const plans = [
    {
      id: "monthly",
      name: "Monthly",
    },
    {
      id: "yearly",
      name: "Yearly",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-12 gap-4 py-4">
        {/* Customer Name */}
        <div className="col-span-12 max-w-fit">
          <h2 className="font-poppins font-semibold mb-2">Customer Details</h2>
          <hr />
        </div>
        <div className="sm:col-span-6 col-span-12">
          <Label>Name</Label>

          <Field
            as={Input}
            name="name"
            type="text"
            value={values?.name}
            className="mt-2"
            placeholder="Enter name"
          />

          <ErrorMessage
            name="name"
            component="span"
            className="text-xs text-red-500"
          />
        </div>

        {/* Serial Number */}
        <div className="sm:col-span-6 col-span-12">
          <Label>Serial Number</Label>

          <Field
            as={Input}
            name="serial_number"
            type="text"
            value={values?.serial_number}
            className="mt-2"
            placeholder="Enter serial number"
          />

          <ErrorMessage
            name="serial_number"
            component="span"
            className="text-xs text-red-500"
          />
        </div>

        {/* Business Name */}
        <div className="sm:col-span-6 col-span-12">
          <Label>Business Name</Label>

          <Field
            as={Input}
            name="business_name"
            type="text"
            value={values?.business_name}
            className="mt-2"
            placeholder="Enter business name"
          />

          <ErrorMessage
            name="business_name"
            component="span"
            className="text-xs text-red-500"
          />
        </div>

        {/* Address */}
        <div className="sm:col-span-6 col-span-12">
          <Label>Address</Label>

          <Field
            as={Input}
            name="address"
            type="text"
            value={values?.address}
            className="mt-2"
            placeholder="Enter address"
          />

          <ErrorMessage
            name="address"
            component="span"
            className="text-xs text-red-500"
          />
        </div>

        {/* Phone Number */}
        <div className="sm:col-span-6 col-span-12">
          <Label>Phone Number</Label>

          <Field
            as={Input}
            name="phone_number"
            type="text"
            value={values?.phone_number}
            className="mt-2"
            placeholder="Enter phone number"
          />

          <ErrorMessage
            name="phone_number"
            component="span"
            className="text-xs text-red-500"
          />
        </div>
        {/* Customer Picture */}
        <div className="sm:col-span-6 col-span-12">
          <Label>Customer Picture</Label>

          <Input
            type="file"
            className="mt-2"
            onChange={(event) => {
              setFieldValue("customer_picture", event.currentTarget.files[0]);
            }}
          />

          <ErrorMessage
            name="customer_picture"
            component="span"
            className="text-xs text-red-500"
          />
        </div>
        <div className="mt-2"></div>

        <div className="col-span-12  max-w-fit">
          <h2 className="font-poppins font-semibold mb-2">Guarantor Details</h2>
          <hr />
        </div>

        {/* Guarantor Name */}
        <div className="sm:col-span-6 col-span-12">
          <Label>Guarantor Name</Label>

          <Field
            as={Input}
            name="guarantor_name"
            type="text"
            value={values?.guarantor_name}
            className="mt-2"
            placeholder="Enter guarantor name"
          />

          <ErrorMessage
            name="guarantor_name"
            component="span"
            className="text-xs text-red-500"
          />
        </div>

        {/* Guarantor Phone */}
        <div className="sm:col-span-6 col-span-12">
          <Label>Guarantor Phone Number</Label>

          <Field
            as={Input}
            name="guarantor_phone_number"
            type="text"
            value={values?.guarantor_phone_number}
            className="mt-2"
            placeholder="Enter guarantor phone number"
          />

          <ErrorMessage
            name="guarantor_phone_number"
            component="span"
            className="text-xs text-red-500"
          />
        </div>

        {/* Guarantor Address */}
        <div className="sm:col-span-6 col-span-12">
          <Label>Guarantor Address</Label>

          <Field
            as={Input}
            name="guarantor_address"
            type="text"
            value={values?.guarantor_address}
            className="mt-2"
            placeholder="Enter guarantor address"
          />

          <ErrorMessage
            name="guarantor_address"
            component="span"
            className="text-xs text-red-500"
          />
        </div>

        {/* Guarantor Business */}
        <div className="sm:col-span-6 col-span-12">
          <Label>Guarantor Business Name</Label>

          <Field
            as={Input}
            name="guarantor_business_name"
            type="text"
            value={values?.guarantor_business_name}
            className="mt-2"
            placeholder="Enter guarantor business name"
          />

          <ErrorMessage
            name="guarantor_business_name"
            component="span"
            className="text-xs text-red-500"
          />
        </div>
        <div className="mt-2"></div>
        <div className="col-span-12 max-w-fit">
          <h2 className="font-poppins font-semibold mb-2">Product Details</h2>
          <hr />
        </div>
        {/* Product */}
        <div className="sm:col-span-6 col-span-12">
          <Label>Product</Label>

          <Select
            value={values?.product_id}
            onValueChange={(value) => {
              setFieldValue("product_id", value);
            }}
          >
            <SelectTrigger className="w-full mt-2">
              <SelectValue placeholder="Select product" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                {products?.map((product) => (
                  <SelectItem key={product.id} value={product.id}>
                    {product.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <ErrorMessage
            name="product_id"
            component="span"
            className="text-xs text-red-500"
          />
        </div>

        {/* Plan */}
        <div className="sm:col-span-6 col-span-12">
          <Label>Plan</Label>

          <Select
            value={values?.plan}
            onValueChange={(value) => {
              setFieldValue("plan", value);
            }}
          >
            <SelectTrigger className="w-full mt-2">
              <SelectValue placeholder="Select plan" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                {plans?.map((plan) => (
                  <SelectItem key={plan.id} value={plan.id}>
                    {plan.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <ErrorMessage
            name="plan"
            component="span"
            className="text-xs text-red-500"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-between mt-5">
        <Button type="submit" size="lg" className="rounded-2xl">
          Submit
        </Button>
      </div>
    </>
  );
}
