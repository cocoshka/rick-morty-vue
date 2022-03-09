<script lang="ts">
import type { TableHeaders, TableData } from "@/models/Table";
import { defineComponent } from "vue";

type Props<T> = {
  headers?: TableHeaders<T>;
  data?: TableData<T>;
};

class TableFactory<T = any> {
  define() {
    return defineComponent<Props<T>>({
      data: () => ({
        // data: [],
        headers: [],
      }),
    });
  }
}

const main = new TableFactory().define();

export function GenericTable<T>() {
  return main as ReturnType<TableFactory<T>["define"]>;
}

export default main;
</script>

<template>
  <table>
    <thead>
      <tr>
        <th v-for="header in headers">
          {{ header.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in data">
        <td v-for="(header, key) in headers">
          <template v-if="header.render">
            <!-- <TableRenderer
              :rendered="header.render(row, header)"
            ></TableRenderer> -->
          </template>
          <template v-else>
            {{ row[key] }}
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
