<script lang="ts">
import type {
  TableColumns,
  TableData,
  TableRecord,
} from "@/models/Table";
import { defineComponent, type PropType } from "vue";
import TableRenderer from "./TableRenderer.vue";

const defineGenericComponent = <T extends Record<string, any>>() =>
  defineComponent({
    components: {
      TableRenderer,
    },
    props: {
      headers: Array as PropType<TableColumns<T>>,
      data: Array as PropType<TableData<T>>,
    },
  });

const main = defineGenericComponent();

export function GenericTable<T extends TableRecord>() {
  const defineTComponent = () => defineGenericComponent<T>()
  return main as ReturnType<typeof defineTComponent>;
}

export default main;
</script>

<template>
  <table>
    <thead>
      <tr>
        <th v-for="header in headers" :key="header.title">
          {{ header.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in data">
        <td v-for="(header, key) in headers" :key="header.title">
          <template v-if="header.render">
            <TableRenderer
              :rendered="header.render(row, header)"
            ></TableRenderer>
          </template>
          <template v-else>
            {{ row[header.field as string] }}
          </template>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
table {
  border-collapse: collapse;
  border-spacing: 0 0;
  width: 100%;
  td,
  th {
    padding-left: 120px;

    &:first-child {
      padding-left: 140px;
    }

    &:last-child {
      width: 100%;
      padding-right: 140px;
    }
  }
}

thead {
  height: 54px;
  text-align: left;
  white-space: nowrap;
  background-color: $darker;
}
</style>
