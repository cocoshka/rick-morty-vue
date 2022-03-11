import type { Component } from "vue";

export type TableRecord = Record<string, any>;

export type TableData<T extends TableRecord> = T[];

export type TableColumn<T extends TableRecord> = {
  title: string;
  field?: keyof T;
  render?: (row: T, header: TableColumn<T>) => TableRenderResult | undefined;
};

export type TableRenderResult = Component | string | number | boolean;

export type TableColumns<T extends TableRecord> = TableColumn<T>[];

export type TableProps<T extends TableRecord> = {
  headers?: TableColumns<T>;
  data?: TableData<T>;
}