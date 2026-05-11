import AddProductForm from "@/components/add-product/add-product-form";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useCreateProductMutation } from "@/redux/services/products-api";
import { Field, Form, Formik } from "formik";
import React from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as yup from "yup";
const ProductSchema = yup.object().shape({
  shop: yup.string().required("Shop is required"),
  productData: yup.object().shape({
    name: yup.string().required("Name is required"),
    description: yup.string().required("Description is required"),
    vendorData: yup.object().shape({
      first_name: yup.string().required("First Name is required"),
      last_name: yup.string().required("Last Name is required"),
    }),
    option: yup
      .array()
      .of(
        yup.object().shape({
          option: yup.string().required("Option is required"),
          values: yup.array().min(1, "At least one value is required"),
        }),
      )
      .min(1, "At least one option is required"),
    variants: yup
      .array()
      .of(
        yup.object().shape({
          sku: yup.string().required("Sku is required"),
          price: yup.number().required("Price is required"),
          inventory_quantity: yup.number().required("Quantity is required"),
        }),
      )
      .min(1, "At least one variant with price, quantity is required"),
  }),
});

export default function AddProduct() {
  const pathname = useLocation().pathname;
  const [createProduct, { isLoading }] = useCreateProductMutation();
  const naviate = useNavigate();

  return (
    <div className="p-4">
      <div></div>
      <div>
        <Card className={"py-5 px-4"}>
          <CardTitle>
            <div className="flex md:flex-nowrap flex-wrap items-start justify-between">
              <p className="text-xl text-primary font-poppins lg:pl-0 md:pl-7 font-bold capitalize">
                Product
              </p>
            </div>
          </CardTitle>
          <CardContent className={"px-0 overflow-x-auto"}>
            <Formik
              initialValues={{
                product_name: "",
                product_purchase_price: 0,
                net_price: "",
                product_picture: null,
                markup_percentage: 0,
              }}
              validationSchema={ProductSchema}
              onSubmit={(values) => {
                createProduct(values)
                  .unwrap()
                  .then((res) => {
                    toast.success(res.message);
                    naviate("/shopify-products");
                  })
                  .catch((error) => {
                    toast.error(error.data.message);
                  });
              }}
            >
              <Form>
                <AddProductForm />
              </Form>
            </Formik>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
