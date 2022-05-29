import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Loading from "../../shared/Loading";

const AddProduct = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imageStorageKey = "242a7e72e9896985441314dfce198365";

  const onSubmit = async (data) => {
    setLoading(true);
    const price = parseInt(data.price);
    const available = parseInt(data.available);
    const minOrder = parseInt(data.minOrder);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        const imageUrl = result.data.url;
        const product = {
          picture: imageUrl,
          name: data.name,
          about: data.about,
          price: price,
          available: available,
          minOrder: minOrder,
        };
        fetch("https://protected-mountain-80420.herokuapp.com/product", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(product),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              toast.success("Product Added Successful");
              reset();
            } else {
              toast.error("Product Added Failed");
            }
          });
        setLoading(false);
      });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="p-8">
      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="text-2xl font-semibold text-center my-4">
          Add A Product
        </h2>
        <form className="lg:w-2/5 mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="file"
              className="input input-bordered border-secondary w-full pt-2"
              {...register("image", {
                required: {
                  value: true,
                  message: "Image is Required",
                },
              })}
            />
            <label className="label">
              {errors.image?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.image?.message}
                </span>
              )}
            </label>
          </div>
          <div>
            <input
              type="text"
              placeholder="Product Name"
              className="input input-bordered border-secondary w-full"
              {...register("name", {
                required: {
                  value: true,
                  message: "Product Name is Required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name?.message}
                </span>
              )}
            </label>
          </div>
          <div>
            <textarea
              type="text"
              className="textarea input-bordered border-secondary w-full"
              placeholder="Product Description"
              {...register("about", {
                required: {
                  value: true,
                  message: "Product Description is Required",
                },
              })}
            ></textarea>
            <label className="label">
              {errors.about?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.about?.message}
                </span>
              )}
            </label>
          </div>
          <div>
            <input
              type="number"
              placeholder="Price"
              className="input input-bordered border-secondary w-full"
              {...register("price", {
                required: {
                  value: true,
                  message: "Price is Required",
                },
              })}
            />
            <label className="label">
              {errors.price?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.price?.message}
                </span>
              )}
            </label>
          </div>
          <div className="flex justify-between gap-2">
            <div>
              <input
                type="number"
                placeholder="Available Quantity"
                className="input input-bordered border-secondary w-full"
                {...register("available", {
                  required: {
                    value: true,
                    message: "Available Quantity is Required",
                  },
                })}
              />
              <label className="label">
                {errors.available?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.available?.message}
                  </span>
                )}
              </label>
            </div>
            <div>
              <input
                type="number"
                placeholder="Minimum Order Quantity"
                className="input input-bordered border-secondary w-full"
                {...register("minOrder", {
                  required: {
                    value: true,
                    message: "Minimum Order is Required",
                  },
                })}
              />
              <label className="label">
                {errors.minOrder?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.minOrder?.message}
                  </span>
                )}
              </label>
            </div>
          </div>
          <input type="submit" className="btn w-full" value="Add Product" />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
