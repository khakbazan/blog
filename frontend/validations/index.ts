import { toEnglishNum } from "@/utils/toEnglishNum";
import Joi from "joi";

export const requiredValidation = (value: string, message?: string) => {
  const requiredRules = Joi.string()
    .required()
    .messages({
      "string.empty": message ?? "پرکردن این فیلد الزامیست",
      "string.required": message ?? "پرکردن این فیلد الزامیست",
    });

  const validation = requiredRules.validate(value);

  if (!!validation?.error) {
    return validation?.error?.message;
  }
};

export const addHashtagsValidation = (value: string) => {
  const requiredRules = Joi.string()
    .required()
    .regex(
      /^([\p{L}\p{N}_\u0600-\u06FF]+([\s]?[\p{L}\p{N}_\u0600-\u06FF]+)*)+(,\s*[\p{L}\p{N}_\u0600-\u06FF]+([\s]?[\p{L}\p{N}_\u0600-\u06FF]+)*)*$/u
    )
    .messages({
      "string.empty": "پرکردن این فیلد الزامیست",
      "string.required": "پرکردن این فیلد الزامیست",
      "string.pattern.base": "فرمت وارد کردن هشتگ اشتباه است",
    });

  const validation = requiredRules.validate(value);

  if (!!validation?.error) {
    return validation?.error?.message;
  }
};

export const numericValidation = (value: string, required: boolean = true) => {
  const numericRules = Joi.string()
    .required()
    .pattern(/^[0-9]+(\.[0-9]+)?$/)
    .messages({
      "string.base": "فرمت وارد شده اشتباه است",
      "string.empty": "پرکردن این فیلد الزامیست",
      "any.required": "پرکردن این فیلد الزامیست",
      "string.pattern.base": "فقط مقادیر عددی مجاز هستند",
    });

  const numericOptionalRules = Joi.string()
    .optional()
    .allow("")
    .pattern(/^[0-9]+(\.[0-9]+)?$/)
    .messages({
      "string.base": "فرمت وارد شده اشتباه است",
      "string.empty": "پرکردن این فیلد الزامیست",
      "any.required": "پرکردن این فیلد الزامیست",
      "string.pattern.base": "فقط مقادیر عددی مجاز هستند",
    });

  let validation;

  if (required) {
    validation = numericRules.validate(toEnglishNum(value));
  } else {
    validation = numericOptionalRules.validate(toEnglishNum(value));
  }

  if (!!validation?.error) {
    return validation?.error?.message;
  }
};
