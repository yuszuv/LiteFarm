/*
 *  Copyright 2024 LiteFarm.org
 *  This file is part of LiteFarm.
 *
 *  LiteFarm is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  LiteFarm is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 *  GNU General Public License for more details, see <https://www.gnu.org/licenses/>.
 */

import { TASK_TYPES } from '../../../containers/Task/constants';

export enum Unit {
  RATIO = 'ratio',
  PERCENT = 'percent',
  PPM = 'ppm',
  'MG/KG' = 'mg/kg',
}

export enum MolecularCompoundsUnit {
  PPM = 'ppm',
  'MG/KG' = 'mg/kg',
}

export enum Nutrients {
  N = 'n',
  P = 'p',
  K = 'k',
  CA = 'calcium',
  MG = 'magnesium',
  S = 'sulfur',
  CU = 'copper',
  MN = 'manganese',
  B = 'boron',
}

export const TASK_FIELD_NAMES = {
  METHOD_ID: 'method_id',
  OTHER_APPLICATION_METHOD: 'other_application_method',
  FURROW_HOLE_DEPTH: 'furrow_hole_depth',
  FURROW_HOLE_DEPTH_UNIT: 'furrow_hole_depth_unit',
} as const;

export const TASK_PRODUCT_FIELD_NAMES = {
  PRODUCT_ID: 'product_id',
  PURPOSES: 'purposes',
  OTHER_PURPOSE: 'other_purpose',
} as const;

export const PRODUCT_FIELD_NAMES = {
  PRODUCT_ID: 'product_id',
  PURPOSES: 'purposes',
  OTHER_PURPOSE: 'other_purpose',
  NAME: 'name',
  SUPPLIER: 'supplier',
  PERMITTED: 'on_permitted_substances_list',
  FERTILISER_TYPE: 'fertiliser_type',
  MOISTURE_CONTENT: 'moisture_content',
  DRY_MATTER_CONTENT: 'dry_matter_content',
  COMPOSITION: 'composition',
  UNIT: 'npk_unit',
  N: Nutrients.N,
  P: Nutrients.P,
  K: Nutrients.K,
  CA: Nutrients.CA,
  MG: Nutrients.MG,
  S: Nutrients.S,
  CU: Nutrients.CU,
  MN: Nutrients.MN,
  B: Nutrients.B,
  AMMONIUM: 'ammonium',
  NITRATE: 'nitrate',
  MOLECULAR_COMPOUNDS_UNIT: 'molecular_compounds_unit',
} as const;

export type ProductId = number | string | undefined;

export type ProductFormFields = {
  [PRODUCT_FIELD_NAMES.SUPPLIER]?: string | null;
  [PRODUCT_FIELD_NAMES.PERMITTED]?: 'YES' | 'NO' | 'NOT_SURE' | null;
  [PRODUCT_FIELD_NAMES.PURPOSES]?: number[];
  [PRODUCT_FIELD_NAMES.OTHER_PURPOSE]?: string;
  [PRODUCT_FIELD_NAMES.FERTILISER_TYPE]?: number;
  [PRODUCT_FIELD_NAMES.MOISTURE_CONTENT]?: number;
  [PRODUCT_FIELD_NAMES.DRY_MATTER_CONTENT]?: number;
  [PRODUCT_FIELD_NAMES.COMPOSITION]?: {
    [PRODUCT_FIELD_NAMES.UNIT]?: Unit;
    [PRODUCT_FIELD_NAMES.N]?: number | null;
    [PRODUCT_FIELD_NAMES.P]?: number | null;
    [PRODUCT_FIELD_NAMES.K]?: number | null;
    [PRODUCT_FIELD_NAMES.CA]?: number | null;
    [PRODUCT_FIELD_NAMES.MG]?: number | null;
    [PRODUCT_FIELD_NAMES.S]?: number | null;
    [PRODUCT_FIELD_NAMES.CU]?: number | null;
    [PRODUCT_FIELD_NAMES.MN]?: number | null;
    [PRODUCT_FIELD_NAMES.B]?: number | null;
  };
  [PRODUCT_FIELD_NAMES.AMMONIUM]?: number;
  [PRODUCT_FIELD_NAMES.NITRATE]?: number;
  [PRODUCT_FIELD_NAMES.MOLECULAR_COMPOUNDS_UNIT]?: MolecularCompoundsUnit;
};

export type Product = {
  [PRODUCT_FIELD_NAMES.PRODUCT_ID]: number;
  [PRODUCT_FIELD_NAMES.NAME]: string;
  [PRODUCT_FIELD_NAMES.SUPPLIER]?: string | null;
  [PRODUCT_FIELD_NAMES.PERMITTED]?: 'YES' | 'NO' | 'NOT_SURE' | null;
  [PRODUCT_FIELD_NAMES.FERTILISER_TYPE]?: number;
  [PRODUCT_FIELD_NAMES.MOISTURE_CONTENT]?: number;
  [PRODUCT_FIELD_NAMES.N]?: number | null;
  [PRODUCT_FIELD_NAMES.P]?: number | null;
  [PRODUCT_FIELD_NAMES.K]?: number | null;
  [PRODUCT_FIELD_NAMES.CA]?: number | null;
  [PRODUCT_FIELD_NAMES.MG]?: number | null;
  [PRODUCT_FIELD_NAMES.S]?: number | null;
  [PRODUCT_FIELD_NAMES.CU]?: number | null;
  [PRODUCT_FIELD_NAMES.MN]?: number | null;
  [PRODUCT_FIELD_NAMES.B]?: number | null;
  [PRODUCT_FIELD_NAMES.UNIT]?: Unit | null;
  [PRODUCT_FIELD_NAMES.AMMONIUM]?: number;
  [PRODUCT_FIELD_NAMES.NITRATE]?: number;
  [PRODUCT_FIELD_NAMES.MOLECULAR_COMPOUNDS_UNIT]?: MolecularCompoundsUnit;
  farm_id: string;
  type:
    | typeof TASK_TYPES.SOIL_AMENDMENT
    | typeof TASK_TYPES.CLEANING
    | typeof TASK_TYPES.PEST_CONTROL;
  product_translation_key: string | null;
};
