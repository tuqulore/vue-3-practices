<template>
  <div>
    <ul>
      <li v-for="user in users">
        {{ user }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async setup() {
    const userList = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(["太郎", "花子", "次郎"]);
        }, 1000);
      });
    };

    const users = await userList();

    return { users };
  },
};
</script>
