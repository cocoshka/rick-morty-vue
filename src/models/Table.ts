import type { Component } from "vue";

export type TableHeader<T> = {
  title?: string;
  render?: TableHeaderRenderFunction<T>;
};

export type TableHeaderRenderFunction<T> = (
  row: T,
  header: TableHeader<T>
) => TableHeaderRenderResult;

export type TableHeaderRenderResult = Component | string | number | boolean;

export type TableHeaders<T> = Record<string, TableHeader<T>>;

export type TableData<T> = T[];
