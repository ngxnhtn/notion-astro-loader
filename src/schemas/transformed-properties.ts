// import * as propertyType from "./raw-properties.js";
// import { dateToDateObjects, richTextToPlainText } from "../format.js";
// import type { z } from "astro/zod";

// export const number = propertyType.number.transform((property) => property.number) as z.ZodType<
//   number | null
// >;
// export const url = propertyType.url.transform((property) => property.url);
// export const email = propertyType.email.transform((property) => property.email);
// export const phone_number = propertyType.phone_number.transform(
//   (property) => property.phone_number,
// );
// export const checkbox = propertyType.checkbox.transform((property) => property.checkbox);

// export const select = propertyType.select.transform((property) => property.select?.name ?? null);
// export const multi_select = propertyType.multi_select.transform(
//   (property) => property.multi_select.map((option) => option.name) ?? [],
// );
// export const status = propertyType.status.transform((property) => property.status?.name ?? null);

// export const title = propertyType.title.transform((property) =>
//   richTextToPlainText(property.title),
// );
// export const rich_text = propertyType.rich_text.transform((property) =>
//   richTextToPlainText(property.rich_text),
// );

// export const date = propertyType.date.transform((property) => dateToDateObjects(property.date));
// export const created_time = propertyType.created_time.transform(
//   (property) => new Date(property.created_time),
// );

import * as propertyType from "./raw-properties.js";
import { dateToDateObjects, richTextToPlainText } from "../format.js";
import type { z } from "astro/zod";

export const number = propertyType.number.transform((property) => property.number) as z.ZodType<
  number | null
>;

export const url = propertyType.url.transform((property) => property.url) as z.ZodType<
  string | null
>;

export const email = propertyType.email.transform((property) => property.email) as z.ZodType<
  string | null
>;

export const phone_number = propertyType.phone_number.transform(
  (property) => property.phone_number,
) as z.ZodType<string | null>;

export const checkbox = propertyType.checkbox.transform(
  (property) => property.checkbox,
) as z.ZodType<boolean>;

export const select = propertyType.select.transform(
  (property) => property.select?.name ?? null,
) as z.ZodType<string | null>;

export const multi_select = propertyType.multi_select.transform(
  (property) => property.multi_select.map((option) => option.name) ?? [],
) as z.ZodType<string[]>;

export const status = propertyType.status.transform(
  (property) => property.status?.name ?? null,
) as z.ZodType<string | null>;

export const title = propertyType.title.transform((property) =>
  richTextToPlainText(property.title),
) as z.ZodType<string>;

export const rich_text = propertyType.rich_text.transform((property) =>
  richTextToPlainText(property.rich_text),
) as z.ZodType<string>;

export const date = propertyType.date.transform((property) =>
  dateToDateObjects(property.date),
) as z.ZodType<ReturnType<typeof dateToDateObjects>>;

export const created_time = propertyType.created_time.transform(
  (property) => new Date(property.created_time),
) as z.ZodType<Date>;
