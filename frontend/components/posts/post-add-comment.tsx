"use client";
import { Button } from "@/common/button";
import { Textarea } from "@/common/textarea";
import { requiredValidation } from "@/validations";
import { Field, Form, Formik } from "formik";

type PostAddCommentProps = {
  onSubmit: (body: string) => void;
};

export const PostAddComment: React.FC<PostAddCommentProps> = ({ onSubmit }) => {
  return (
    <div>
      <Formik
        validateOnBlur={false}
        validateOnChange={false}
        initialValues={{
          body: "",
        }}
        onSubmit={(values, helpers) => {
          onSubmit(values.body);
          helpers.resetForm();
        }}
      >
        {({ errors }) => (
          <Form role="form" aria-label="فرم ارسال نظر">
            <Field
              as={Textarea}
              name="body"
              label="نظر شما"
              aria-label="متن نظر"
              error={errors?.body}
              validate={requiredValidation}
            />

            <div className="flex justify-end mt-4">
              <Button type="submit" aria-label="ارسال نظر">
                ارسال نظر
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
