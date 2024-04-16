"use client";
import { Button } from "@/common/button";
import { Input } from "@/common/input";
import { SimpleEditor } from "@/common/simple-editor";
import { SuccessMessage } from "@/common/success-message";
import { Textarea } from "@/common/textarea";
import { ApiError } from "@/models/general";
import { requestAddPost } from "@/models/posts";
import { addHashtagsValidation, requiredValidation } from "@/validations";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

export const NewPost: React.FC = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const queryClient = useQueryClient();

  const addPost = useMutation({
    mutationKey: ["add-post"],
    mutationFn: requestAddPost,
    onSuccess: () => {
      setShowSuccessMessage(true);
    },
    onError: (error: AxiosError<ApiError>) => {
      toast.error(
        error?.response?.data?.message ?? "خطا ناشناخته در ایجاد پست"
      );
    },
    onSettled: async () => {
      return await queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  return (
    <section className="box">
      <h1 className="mb-5">افزودن پست جدید</h1>

      <Formik
        validateOnBlur={false}
        validateOnChange={false}
        initialValues={{
          title: "",
          body: "",
          hashtags: "",
        }}
        onSubmit={(values) => {
          addPost.mutate(values);
        }}
      >
        {({ errors, values, setFieldValue }) => (
          <Form className=" space-y-4" aria-label="ایجاد پست جدید">
            <Field
              as={Input}
              aria-label="عنوان پست"
              name="title"
              label="عنوان"
              error={errors?.title}
              validate={requiredValidation}
            />

            {/* we seperate hashtags via comma and backend will convert it to string[] */}
            <div>
              <Field
                as={Input}
                name="hashtags"
                label="هشتگ ها"
                aria-label="هشتگ های پست"
                error={errors?.hashtags}
                validate={addHashtagsValidation}
              />
              <p className="text-xs mt-1">هشتگ هارا با , جدا کنید</p>
            </div>

            <Field
              label="متن پست"
              as={Textarea}
              value={values?.body}
              error={errors?.body}
              validate={requiredValidation}
              name="body"
              aria-label="متن پست"
            />

            <div className="flex items-center justify-end gap-x-1.5 pb-3">
              <Link href="/" prefetch={false}>
                <Button
                  aria-label="انصراف از ایجاد پست جدید"
                  type="button"
                  shape="secondary"
                >
                  انصراف
                </Button>
              </Link>

              <Button type="submit" aria-label="ایجاد پست">
                ایجاد پست
              </Button>
            </div>
          </Form>
        )}
      </Formik>

      <SuccessMessage
        title="پست جدید ایجاد شد"
        btnTitle="متوجه شدم"
        redirectUrl="/"
        show={showSuccessMessage}
        hide={() => setShowSuccessMessage(false)}
      />
    </section>
  );
};
